const fs = require('fs');

const 行 = "タ";

const guide_words = {
    1: "ディシェㇲ",
    2: "ディㇲティㇲ",
    3: "トゥデキレ",
    4: "ドゥトゥスン"
};

const entries_array =
    fs.readFileSync("EDIT_ME.tsv", { encoding: 'utf-8' })
        .split(/\r?\n/).slice(1)
        .map((row) => row.split('\t'))
    ;

/** 
Replace the sequence of entries

...
["ディヤㇲ","*","dijac","ディヤスィㇳ","DIJACIT","動詞","キャンセルする、無効とする",""],
["ディヤㇲ","*","dijac","ディヤㇲレティ","dijacleti","動詞","無効な",""],
...

with a single entry with multiple subentries. Remove the preceding asterisk in the distinguisher.

...
{
multiple: true, 
word: "ディヤㇲ", distinguisher: "", pmcp: "dijac",
subentries: [["ディヤスィㇳ", "DIJACIT", "動詞", "キャンセルする、無効とする", ""],
["ディヤㇲレティ", "dijacleti", "動詞", "無効な", ""]]
}
*/
function group_asterisk(entries_) {
    const entries_grouped = [];
    let current_grouping = null;
    for (const entry of entries_) {
        if (entry[1].startsWith("*")) {
            // This is a groupable row
            // Either start a new grouping or add to the current one
            if (!current_grouping) {
                // Start a new grouping
                current_grouping = {
                    multiple: true,
                    word: entry[0],
                    distinguisher: entry[1].slice(1), // Remove the asterisk
                    pmcp: entry[2],
                    subentries: [entry.slice(3)]
                };
            } else if (current_grouping.word === entry[0]
                && current_grouping.distinguisher === entry[1].slice(1) // Remove the asterisk
                && current_grouping.pmcp === entry[2]) {
                // Add to the current grouping
                current_grouping.subentries.push(entry.slice(3));
            } else {
                // End the current grouping and start a new one
                entries_grouped.push(current_grouping);

                // Start a new grouping
                current_grouping = {
                    multiple: true,
                    word: entry[0],
                    distinguisher: entry[1].slice(1), // Remove the asterisk
                    pmcp: entry[2],
                    subentries: [entry.slice(3)]
                };
            }
        } else {
            // This is a non-groupable row
            if (current_grouping) {
                // End the current grouping
                entries_grouped.push(current_grouping);
                current_grouping = null;
            }
            // Add the non-groupable row to the result
            entries_grouped.push(entry);
        }
    }
    if (current_grouping) {
        // End the last grouping
        entries_grouped.push(current_grouping);
    }
    return entries_grouped;
}

const grouped = group_asterisk(entries_array);
fs.writeFileSync(`__debug__grouped.jsonl`, grouped.map(JSON.stringify).join('\n'), { encoding: 'utf-8' });

const entries = grouped
    .map((row) => {
        if (!row.multiple) {
            const [
                entry_word_ja, distinguisher, entry_word_pmcp, sub_entry_word_ja, sub_entry_word_pmcp, entry_pos, entry_definition, line_break_after_pos] = row;
            if (sub_entry_word_ja === "" && sub_entry_word_pmcp === "") {
                return simple_entry(entry_word_ja, distinguisher, entry_word_pmcp, entry_pos, entry_definition);
            } else {
                return entry_with_single_subentry(entry_word_ja, distinguisher, entry_word_pmcp, { word: sub_entry_word_ja, pmcp: sub_entry_word_pmcp, pos: entry_pos }, entry_definition, line_break_after_pos !== "false");
            }
        } else {
            const { word, distinguisher, pmcp, subentries } = row;
            return entry_with_multiple_subentries(word, distinguisher, pmcp, subentries.map(subentry => {
                const [subentry_word_ja, subentry_word_pmcp, subentry_pos, subentry_definition] = subentry;
                return { word: subentry_word_ja, pmcp: subentry_word_pmcp, pos: subentry_pos, definition: subentry_definition };
            }));
        }
    });

fs.writeFileSync(`vivliostyle/${行}.html`, `<link rel="stylesheet" href="common.css">

<style>
    @page:left { 
        background-image: url("爪見出し/${行}_left.png");
        background-repeat: no-repeat;
        @top-left { font-family: "M+ 1p Heavy"; font-size: 14pt; } /* 左ページでは左の柱見出しのみ */
        @top-right { font-family: "M+ 1p Heavy"; font-size: 0pt; }
    }

    @page:right { 
        background-image: url("爪見出し/${行}_right.png");
        background-repeat: no-repeat;
        @top-left { font-family: "M+ 1p Heavy"; font-size: 0pt; }
        @top-right { font-family: "M+ 1p Heavy"; font-size: 14pt; }  /* 右ページでは右の柱見出しのみ */
    }
    
    /* それぞれのページ指定では柱見出しを両側に指定しておき、上記ルールにより片方だけ潰す */
${Object.entries(guide_words).map(([key, value]) => `    @page:nth(${key}) {
        @top-left { content: "${value}"; }
        @top-right { content: "${value}"; }
    }
`).join('\n')}</style>


${entries.join('\n\n')}
`, { encoding: 'utf-8' });

function simple_entry(word, distinguisher, pmcp, pos, definition) {
    return `<div class="entry">
    <span class="entry-word-ja" lang="ja">${word}${distinguisher}</span> <span class="entry-word-pmcp">${pmcp}</span> <span
        class="entry-word-POS" lang="ja">[${pos}]</span><br>
    <div class="definition" lang="ja">${definition}</div>
</div>`;
}

function entry_with_single_subentry(word, distinguisher, pmcp, subentry, definition, line_break_after_pos = true) {
    return `<div class="entry">
    <span class="entry-word-ja" lang="ja">${word}${distinguisher}</span> <span class="entry-word-pmcp">${pmcp}</span><br>
    <div class="sub-entry">
        <span class="sub-entry-word-ja" lang="ja">${subentry.word}</span> <span class="sub-entry-word-pmcp">${subentry.pmcp}</span>
        <span class="sub-entry-word-POS" lang="ja">[${subentry.pos}]</span>${line_break_after_pos ? '<br>' : ' '}<span class="sub-entry-definition" lang="ja">${definition}</span>
    </div>
</div>`;
}

function entry_with_multiple_subentries(word, distinguisher, pmcp, subentries) {
    return `<div class="entry">
    <span class="entry-word-ja" lang="ja">${word}${distinguisher}</span> <span class="entry-word-pmcp">${pmcp}</span><br>
    <div class="sub-entry">
${subentries.map(subentry => {
        if (subentry.word === "" && subentry.pmcp === "") {
            /* 直前の見出し語にぶら下がり、音写と PMCP の欄なしで掲載 */
            return `        <span class="sub-entry-word-POS" lang="ja">[${subentry.pos}]</span> <span class="sub-entry-definition" lang="ja">${subentry.definition}</span><br>`;
        }
        return `        <span class="sub-entry-word-ja" lang="ja">${subentry.word}</span> <span class="sub-entry-word-pmcp">${subentry.pmcp}</span>
        <span class="sub-entry-word-POS" lang="ja">[${subentry.pos}]</span> <span class="sub-entry-definition" lang="ja">${subentry.definition}</span><br>`;
    }
    ).join('\n')}
    </div>
</div>`;
}

`<div class="entry">
    <span class="entry-word-ja" lang="ja">ディヤㇲ</span> <span class="entry-word-pmcp">dijac</span><br>
    <div class="sub-entry">
        <span class="sub-entry-word-ja" lang="ja">ディヤスィㇳ</span> <span class="sub-entry-word-pmcp">DIJACIT</span>
        <span class="sub-entry-word-POS" lang="ja">[動詞]</span> <span class="sub-entry-definition" lang="ja">キャンセルする、無効とする</span><br>
        <span class="sub-entry-word-ja" lang="ja">ディヤㇲレティ</span> <span class="sub-entry-word-pmcp">DIJACLETI</span>
        <span class="sub-entry-word-POS" lang="ja">[動詞]</span> <span class="sub-entry-definition" lang="ja">無効な</span>
    </div>
</div>

<div class="entry">
    <span class="entry-word-ja" lang="ja">ディンドゥン</span> <span class="entry-word-pmcp">dindun</span><br>
    <div class="sub-entry">
        <span class="sub-entry-word-POS" lang="ja">[動詞]</span> <span class="sub-entry-definition" lang="ja">ごちゃごちゃ</span><br>
        <span class="sub-entry-word-ja" lang="ja">ディンドゥニㇳ</span> <span class="sub-entry-word-pmcp">DINDUN-IT</span>
        <span class="sub-entry-word-POS" lang="ja">[他動詞]</span> <span class="sub-entry-definition" lang="ja">混ぜる、乱す、シャッフルする</span>
    </div>
</div>

<div class="entry">
    <span class="entry-word-ja" lang="ja">デシャペ</span> <span class="entry-word-pmcp">dexape</span><br>
    <div class="sub-entry">
        <span class="sub-entry-word-POS" lang="ja">[名詞]</span> <span class="sub-entry-definition" lang="ja">火</span><br>
        <span class="sub-entry-word-POS" lang="ja">[動詞]</span> <span class="sub-entry-definition" lang="ja">燃やす、焼く</span><br>
    </div>
</div>`