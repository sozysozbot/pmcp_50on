const fs = require('fs');

const 行 = "タ";

const guide_words = {
    1: "ディㇲネレㇳ",
    2: "ディㇲノㇲ",
    3: "トゥデキレ",
    4: "ドゥトゥスン"
};

const entries_tsv =
    fs.readFileSync("entries.tsv", { encoding: 'utf-8' })
        .split(/\r?\n/).slice(1);

const entries_array = [
    ["タウポ", "", "taupo", "", "", "名詞", "タウポ【端】（都市名）", ""],
    ["タカメク", "", "takameku", "", "", "名詞", "天恵、タム神の恩恵", ""],
    ["タカン", "", "takan", "", "", "名詞", "タカン（民族名）", ""],
    ["タサㇰ", "", "tacak", "", "", "人名", "タザク、タサク【皇来】（人名）", ""],
    ["タシュ", "", "taxu", "", "", "名詞", "遺跡", ""],
    ["タショㇳ", "", "taxot", "", "", "名詞", "（セッカイクの）終季、タショト", ""],
    ["タスィク", "", "taciku", "", "", "名詞", "防具", ""],
    ["タㇲテㇽ", "", "tactel", "タㇲテリㇳ", "tactelit", "他動詞", "決める、決定する、選ぶ、選択する", ""],
    ["タタ", "", "tata", "", "", "動詞", "楽しい", ""],
    ["タタ", "", "tata", "", "", "前置助動詞", "楽しんで", ""],
    ["ダㇳ", "", "dat", "", "", "名詞", "（ゲームの）役", ""],
    ["タヌㇳ", "", "tanut", "", "", "名詞", "タヌト【皇下】（都市名）", ""],
    ["ダパㇽ", "", "dapal", "ダパㇽレティ", "dapalleti", "修飾詞", "カッコいい、クールな", ""],
    ["タㇷ゚", "", "tap", "", "", "人名", "ターフ、タプ（人名）", ""],
    ["タㇽテ", "", "talte", "", "", "名詞", "タルテの石（宝石の一種。トパーズに似る。）", ""],
    ["タン", "", "tan", "", "", "名詞", "タム神（神を統括する神）、（セッカイクの）タム【皇】", ""],
    ["タン レティ デㇲ", "", "tan leti dec", "", "", "複合名詞", "タムカラー（深い緑色）", ""],
    ["ダンカ", "", "danka", "ダンカレティ", "dankaleti", "動詞", "立体的である", ""],
    ["タンケ", "", "tanke", "", "", "名詞", "タンケ【皇処】（セッカイク）", ""],
    ["タンシェㇽマ", "", "tanxelma", "", "", "名詞", "タムシエルミワ島", ""],
    ["タンスㇰ", "", "tancuk", "", "", "名詞", "タムツイの宗教従事者、（セッカイクの）巫", ""],
    ["タンツウィ", "", "tamzuwi", "", "", "名詞", "タムツイ", ""],
    ["タンツォ", "", "tanzo", "", "", "名詞", "（セッカイクの）皇処", ""],
    ["タンデㇲ", "", "tandec", "", "", "名詞", "タムカラー（深い緑色）", ""],
    ["タンナ", "", "tanna", "", "", "名詞", "タンナ【皇水】（地名およびセッカイク用語）", ""],
    ["ディイェ", "", "dije", "", "", "名詞", "手番", ""],
    ["ティイェㇳ", "", "tijet", "", "", "名詞", "シナモン、ニッキ、肉桂", ""],
    ["ディシェㇲ", "", "dixec", "", "", "名詞", "自然科学、理化学", ""],
    ["ディㇲティㇲ", "", "dictic", "", "", "名詞", "家、企業", ""],
    ["ディㇲティㇲラウツァイテ", "", "dicticlauzaite", "", "", "名詞", "大工、建築家", ""],
    ["ディㇲネレㇳ", "", "dicnelet", "", "", "名詞", "親戚", ""],
    ["ディㇲノㇲ", "", "dicnoc", "", "", "動詞", "走る", ""],
    ["ディㇲノㇲ", "", "dicnoc", "ディㇲノスィㇳ", "DICNOCIT", "他動詞", "運転する", ""],
    ["ティソㇳ", "", "ticot", "", "", "名詞", "考え", ""],
    ["ティソㇳ", "", "ticot", "ティソティㇳ", "ticotit", "他動詞", "と思う、と考える、と感じる、[ticotit kije] 認識する、[ticotit kije] 気づく", ""],
    ["ティソㇳ ティソㇳ", "", "ticot-ticot", "", "", "動詞", "思う、考える", ""],
    ["ティソㇳラタ", "", "ticotlata", "", "", "名詞", "思想家", ""],
    ["ディツェン", "", "dizen", "", "", "名詞", "感情", ""],
    ["ディティ", "", "diti", "", "", "形容詞", "新しい", ""],
    ["ディティイェ", "", "ditije", "", "", "名詞", "社会", ""],
    ["ティディㇷ゚", "", "tidip", "", "", "名詞", "紙", ""],
    ["ティデㇲ", "", "tidec", "", "", "動詞", "尋ねる、質問する、問う", ""],
    ["ティパㇲ", "", "tipac", "", "", "名詞", "斜め", ""],
    ["ティピディヤ", "", "tipidija", "", "", "名詞", "予算、見積", ""],
    ["ティペㇲ", "", "tipec", "", "", "名詞", "斜め", ""],
    ["ティペセン", "", "tipecen", "", "", "動詞", "斜めである", ""],
    ["ティミベ", "", "timibe", "", "", "名詞", "マフィア", ""],
    ["ディヤㇲ", "*", "dijac", "ディヤスィㇳ", "DIJACIT", "動詞", "キャンセルする、無効とする", ""],
    ["ディヤㇲ", "*", "dijac", "ディヤㇲレティ", "dijacleti", "動詞", "無効な", ""],
    ["ティユナ", "", "tijuna", "", "", "名詞", "左", ""],
    ["ディユナムㇽ", "", "dijunamul", "", "", "名詞", "ヘルメット", ""],
    ["ディユナㇽ", "", "dijunal", "", "", "名詞", "頭", ""],
    ["ディㇽ", "", "dil", "ディリㇳ", "DIL-IT", "他動詞", "刺す", ""],
    ["ディンドゥン", "*", "dindun", "", "", "動詞", "ごちゃごちゃ", ""],
    ["ディンドゥン", "*", "dindun", "ディンドゥニㇳ", "DINDUN-IT", "他動詞", "混ぜる、乱す、シャッフルする", ""],
    ["テㇰ", "", "tek", "", "", "名詞", "合計、和", ""],
    ["デㇰタㇷ゚", "", "dektap", "", "", "人名", "デクタプ、デクタフ（人名）", ""],
    ["デシャペ", "*", "dexape", "", "", "名詞", "火", ""],
    ["デシャペ", "*", "dexape", "", "", "動詞", "燃やす、焼く", ""],
    ["デシャモセㇽ", "", "dexamocel", "", "", "名詞", "コスト", ""],
    ["テショㇲ", "", "texoc", "", "", "動詞", "寝る", ""],
    ["テショスィㇽ", "", "texocil", "", "", "名詞", "夜", ""],
    ["デㇲ", "¹", "dec", "", "", "名詞", "色", ""],
    ["デㇲ", "²", "dec", "デスィㇳ", "DECIT", "他動詞", "踏む、歩く", ""],
    ["テスィレ", "", "tecile", "", "", "名詞", "名人", ""],
    ["テㇲテㇽ", "", "tectel", "テㇲテリㇳ", "tectelit", "他動詞", "～を決める、～を決定する、～を選ぶ、～を選択する", ""],
    ["デㇲトㇰ", "", "dectok", "", "", "名詞", "芋", ""],
    ["テㇲヌロ", "", "tecnulo", "", "", "名詞", "誇張", ""],
    ["テㇲノㇰ", "", "tecnok", "", "", "名詞", "右", ""],
    ["デネポㇲ", "", "denepoc", "", "", "名詞", "条件", ""],
    ["デノポㇲ", "", "denopoc", "", "", "名詞", "条件", ""],
    ["デリユ", "", "deliju", "", "", "前置助動詞", "～する必要がある、～のはずだ", ""],
    ["デル", "", "delu", "", "", "前置助動詞", "～する必要がある、～のはずだ", ""],
    ["デㇽ", "", "del", "", "", "動詞", "黒い", ""],
    ["デㇽネ", "", "delne", "", "", "動詞", "黒い", ""],
    ["デルン", "", "delun", "", "", "動詞", "黒い", ""],
    ["デレイェ", "", "deleje", "", "", "動詞", "引き分けの", ""],
    ["テレㇲ", "", "telec", "", "", "名詞", "行為", ""],
    ["デレㇲ", "", "delec", "", "", "動詞", "必要である", ""],
    ["テンスミタㇽ", "", "tencumital", "", "", "名詞", "刑務所", ""],
    ["トゥイェセン", "", "tujecen", "", "", "名詞", "（暦の）月", ""],
    ["ドゥカ", "", "duka", "ドゥカレティ", "dukaleti", "数詞", "3、3つ、3つの", ""],
    ["ドゥシェ", "", "duxe", "", "", "名詞", "詩、歌、詩歌", ""],
    ["ドゥシェㇲテン", "", "duxecten", "", "", "形容詞", "理科の、理系の、数理系の", ""],
    ["ドゥㇲ", "", "duc", "ドゥスィㇳ", "ducit", "動詞", "[或 ducit 或 untik]～は([jo])を後悔する", ""],
    ["ドゥスン", "", "ducun", "", "", "前置助動詞", "極端に", ""],
    ["トゥデ", "", "tude", "", "", "動詞", "移動する", ""],
    ["トゥデ", "", "tude", "", "", "後置助動詞", "主語から離れる動作の方向を示す", ""],
    ["トゥデキレ", "", "tudekile", "", "", "名詞", "往来、交流", ""],
    ["ドゥトゥスン", "", "dutucun", "ドゥトゥスンレティ", "dutucunleti", "修飾詞", "新しい", "FALSE"],
    ["ドゥトゥトゥラㇽ", "", "dututulal", "", "", "名詞", "（寸法の）前後", ""],
    ["トゥニ", "", "tuni", "", "", "名詞", "予定、計画", ""],
    ["トゥモㇰ", "", "tumok", "", "", "名詞", "（セッカイクの）再行、テュモク", ""],
    ["トゥライ", "", "tulai", "", "", "名詞", "伴侶、配偶者", ""],
    ["トゥライ トゥライ", "", "tulai-tulai", "", "", "名詞", "夫婦", ""],
    ["トゥリヨ", "", "tulijo", "", "", "名詞", "土手", ""],
    ["トゥワサ", "", "tuwaca", "", "", "動詞", "信じる", ""],
    ["トゥワサイㇳ", "", "tuwacait", "", "", "動詞", "祝う", ""],
    ["トゥワサポㇽト", "", "tuwacapolto", "", "", "名詞", "宗教施設、神社、寺、教会", ""],
    ["トゥワサリシャ", "", "tuwacalixa", "", "", "名詞", "祭祀、典礼、法要", ""],
    ["トゥワセイㇳ", "", "tuwaceit", "", "", "動詞", "祝う", ""],
    ["トゥワㇽ", "", "tuwal", "トゥワリㇳ", "TUWALIT", "動詞", "奪う、ひったくる", ""],
    ["トゥワレニヤ", "", "tuwalenija", "", "", "名詞", "略奪", ""],
    ["ドㇰ", "¹", "dok", "ドキㇳ", "dokit", "他動詞", "～を引く、～を引っ張る、～を呼び込む", ""],
    ["ドㇰ", "²", "dok", "ドㇰティㇳ", "doktit", "他動詞", "～を叩く、～を殴る、～を打つ、～を打ち付ける、(投げ棒を)投げる", ""],
    ["トケㇲセ", "", "tokecce", "", "", "名詞", "勝ち組、上流階級", ""],
    ["トシャ", "", "toxa", "", "", "名詞", "石、岩", ""],
    ["トㇲティイェㇲ", "", "toctijec", "", "", "動詞", "南である", ""],
    ["ドㇲネトㇲ", "", "docnetoc", "", "", "名詞", "酒、アルコール", ""],
    ["ドド", "", "dodo", "", "", "名詞", "馬", ""],
    ["トニ", "", "toni", "", "", "名詞", "神", ""],
    ["ドネン", "", "donen", "", "", "名詞", "交通", ""],
    ["ドネン", "", "donen", "", "", "形容詞", "交通の", ""],
    ["トリㇳ", "", "tolit", "", "", "名詞", "朝", ""],
    ["ドルメン", "", "dolumen", "", "", "形容詞", "穢れた", ""]];

function group_asterisk(entries_) {
    /*
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
            } else if (current_grouping.word === entry[0]) {
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
fs.writeFileSync(`__debug__grouped.json`, JSON.stringify(grouped), { encoding: 'utf-8' });

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