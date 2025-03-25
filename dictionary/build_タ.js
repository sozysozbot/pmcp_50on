const fs = require('fs');

const 行 = "タ";

const guide_words = {
    1: "ドゥカレティ",
    2: "ディンドゥン",
    3: "テㇲテリㇳ",
};

const entries_tsv =
    fs.readFileSync("entries.tsv", { encoding: 'utf-8' })
        .split(/\r?\n/).slice(1);

const entries = entries_tsv
    .map(entry => entry.split('\t'))
    .map(([
        entry_word_ja, entry_word_pmcp, sub_entry_word_ja, sub_entry_word_pmcp, entry_pos, entry_definition, line_break_after_pos]) => {
        if (sub_entry_word_ja === "" && sub_entry_word_pmcp === "") {
            return simple_entry(entry_word_ja, entry_word_pmcp, entry_pos, entry_definition);
        } else {
            return entry_with_subentry(entry_word_ja, entry_word_pmcp, sub_entry_word_ja, sub_entry_word_pmcp, entry_pos, entry_definition, line_break_after_pos !== "false");
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


ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ。

いろはにほへと、ちりぬるを。わかよたれそ、つねならむ。うゐのおくやま、けふこえて。あさきゆめみし、ゑひもせず。いろはにほへと、ちりぬるを。わかよたれそ、つねならむ。うゐのおくやま、けふこえて。あさきゆめみし、ゑひもせず。いろはにほへと、ちりぬるを。わかよたれそ、つねならむ。うゐのおくやま、けふこえて。あさきゆめみし、ゑひもせず。いろはにほへと、ちりぬるを。わかよたれそ、つねならむ。うゐのおくやま、けふこえて。あさきゆめみし、ゑひもせず。いろはにほへと、ちりぬるを。わかよたれそ、つねならむ。うゐのおくやま、けふこえて。あさきゆめみし、ゑひもせず。いろはにほへと、ちりぬるを。わかよたれそ、つねならむ。うゐのおくやま、けふこえて。あさきゆめみし、ゑひもせず。
`, { encoding: 'utf-8' });

function simple_entry(word, pmcp, pos, definition) {
    return `<div class="entry">
    <span class="entry-word-ja" lang="ja">${word}</span> <span class="entry-word-pmcp">${pmcp}</span> <span
        class="entry-word-POS" lang="ja">[${pos}]</span><br>
    <div class="definition" lang="ja">${definition}</div>
</div>`;
}

function entry_with_subentry(word, pmcp, subentry_word, subentry_pmcp, subentry_pos, subentry_definition, line_break_after_pos = true) {
    return `<div class="entry">
    <span class="entry-word-ja" lang="ja">${word}</span> <span class="entry-word-pmcp">${pmcp}</span><br>
    <div class="sub-entry">
        <span class="sub-entry-word-ja" lang="ja">${subentry_word}</span> <span class="sub-entry-word-pmcp">${subentry_pmcp}</span>
        <span class="sub-entry-word-POS" lang="ja">[${subentry_pos}]</span>${line_break_after_pos ? '<br>' : ' '}<span class="sub-entry-definition" lang="ja">${subentry_definition}</span>
    </div>
</div>`;
}