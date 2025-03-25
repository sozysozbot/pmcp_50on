const fs = require('fs');

const 行 = "タ";

const guide_words = {
    1: "ドゥカレティ",
    2: "ディンドゥン",
    3: "テㇲテリㇳ",
};

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


${simple_entry(
    "ドゥカレティ",
    "dukaleti",
    "数詞",
    "3、3つ、3つの"
)}

${simple_entry(
    "ドゥシェ",
    "duxe",
    "名詞",
    "詩、歌、詩歌"
)}

${entry_with_subentry(
    "ドゥトゥスン",
    "dutucun",
    "ドゥトゥスンレティ",
    "dutucunleti",
    "修飾詞",
    "新しい",
    false
)}

${simple_entry(
    "ドド",
    "dodo",
    "名詞",
    "馬"
)}

${entry_with_subentry(
    "ドㇰ¹",
    "dok",
    "ドキㇳ",
    "dokit",
    "他動詞",
    "～を引く、～を引っ張る"
)}

${entry_with_subentry(
    "ドㇰ²",
    "dok",
    "ドㇰティㇳ",
    "doktit",
    "他動詞",
    "～を叩く、～を殴る、～を打つ、～を打ち付ける、(投げ棒を)投げる"
)}

${simple_entry(
    "ドㇲネトㇲ",
    "docnetoc",
    "名詞",
    "酒、アルコール"
)}

${simple_entry(
    "ドゥカレティ",
    "dukaleti",
    "数詞",
    "3、3つ、3つの"
)}

${simple_entry(
    "ドゥシェ",
    "duxe",
    "名詞",
    "詩、歌、詩歌"
)}

${entry_with_subentry(
    "ドゥトゥスン",
    "dutucun",
    "ドゥトゥスンレティ",
    "dutucunleti",
    "修飾詞",
    "新しい",
    false
)}

${simple_entry(
    "ドド",
    "dodo",
    "名詞",
    "馬"
)}

${entry_with_subentry(
    "ドㇰ¹",
    "dok",
    "ドキㇳ",
    "dokit",
    "他動詞",
    "～を引く、～を引っ張る"
)}

${entry_with_subentry(
    "ドㇰ²",
    "dok",
    "ドㇰティㇳ",
    "doktit",
    "他動詞",
    "～を叩く、～を殴る、～を打つ、～を打ち付ける、(投げ棒を)投げる"
)}


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