const fs = require('fs');
fs.writeFileSync('vivliostyle/タ.html', `<link rel="stylesheet" href="common.css">

<style>
    @page:left { 
        background-image: url("爪見出し/タ_left.png");
        background-repeat: no-repeat;
    }

    @page:right { 
        background-image: url("爪見出し/タ_right.png");
        background-repeat: no-repeat;
    }

    @page:nth(1) {
        @top-left {
            content: "ドゥカレティ";
            font-family: "M+ 1p Heavy";
            font-size: 14pt;
        }
    }

    @page:nth(2) {
        @top-right {
            content: "ディンドゥン";
            font-family: "M+ 1p Heavy";
            font-size: 14pt;
        }
    }

    @page:nth(3) {
        @top-left {
            content: "テㇲテリㇳ";
            font-family: "M+ 1p Heavy";
            font-size: 14pt;
        }
    }
</style>


<div class="entry">
    <span class="entry-word-ja" lang="ja">ドゥカレティ</span> <span class="entry-word-pmcp">dukaleti</span> <span
        class="entry-word-POS" lang="ja">[数詞]</span><br>
    <div class="definition" lang="ja">3、3つ、3つの</div>
</div>

<div class="entry">
    <span class="entry-word-ja" lang="ja">ドゥシェ</span> <span class="entry-word-pmcp">duxe</span> <span
        class="entry-word-POS" lang="ja">[名詞]</span><br>
    <div class="definition" lang="ja">詩、歌、詩歌</div>
</div>

<div class="entry">
    <span class="entry-word-ja" lang="ja">ドゥトゥスン</span> <span class="entry-word-pmcp">dutucun</span><br>
    <div class="sub-entry">
        <span class="sub-entry-word-ja" lang="ja">ドゥトゥスンレティ</span> <span class="sub-entry-word-pmcp">dutucunleti</span>
        <span class="sub-entry-word-POS" lang="ja">[修飾詞]</span> <span class="sub-entry-definition" lang="ja">新しい</span>
    </div>
</div>

<div class="entry">
    <span class="entry-word-ja" lang="ja">ドド</span> <span class="entry-word-pmcp">dodo</span> <span
        class="entry-word-POS" lang="ja">[名詞]</span><br>
    <div class="definition" lang="ja">馬</div>
</div>

<div class="entry">
    <span class="entry-word-ja" lang="ja">ドㇰ¹</span> <span class="entry-word-pmcp">dok</span><br>
    <div class="sub-entry">
        <span class="sub-entry-word-ja" lang="ja">ドキㇳ</span> <span class="sub-entry-word-pmcp">dokit</span> <span
            class="sub-entry-word-POS" lang="ja">[他動詞]</span><br>
    </div>
    <div class="definition" lang="ja">～を引く、～を引っ張る</div>
</div>

<div class="entry">
    <span class="entry-word-ja" lang="ja">ドㇰ²</span> <span class="entry-word-pmcp">dok</span><br>
    <div class="sub-entry">
        <span class="sub-entry-word-ja" lang="ja">ドㇰティㇳ</span> <span class="sub-entry-word-pmcp">doktit</span> <span
            class="sub-entry-word-POS" lang="ja">[他動詞]</span><br>
    </div>
    <div class="definition" lang="ja">～を叩く、～を殴る、～を打つ、～を打ち付ける、(投げ棒を)投げる。</div>
</div>

<div class="entry">
    <span class="entry-word-ja" lang="ja">ドㇲネトㇲ</span> <span class="entry-word-pmcp">docnetoc</span> <span
        class="entry-word-POS" lang="ja">[名詞]</span><br>
    <div class="definition" lang="ja">酒、アルコール</div>
</div>

<div class="entry">
    <span class="entry-word-ja" lang="ja">ドゥカレティ</span> <span class="entry-word-pmcp">dukaleti</span> <span
        class="entry-word-POS" lang="ja">[数詞]</span><br>
    <div class="definition" lang="ja">3、3つ、3つの</div>
</div>

<div class="entry">
    <span class="entry-word-ja" lang="ja">ドゥシェ</span> <span class="entry-word-pmcp">duxe</span> <span
        class="entry-word-POS" lang="ja">[名詞]</span><br>
    <div class="definition" lang="ja">詩、歌、詩歌</div>
</div>

<div class="entry">
    <span class="entry-word-ja" lang="ja">ドゥトゥスン</span> <span class="entry-word-pmcp">dutucun</span><br>
    <div class="sub-entry">
        <span class="sub-entry-word-ja" lang="ja">ドゥトゥスンレティ</span> <span class="sub-entry-word-pmcp">dutucunleti</span>
        <span class="sub-entry-word-POS" lang="ja">[修飾詞]</span> <span class="sub-entry-definition" lang="ja">新しい</span>
    </div>
</div>

<div class="entry">
    <span class="entry-word-ja" lang="ja">ドド</span> <span class="entry-word-pmcp">dodo</span> <span
        class="entry-word-POS" lang="ja">[名詞]</span><br>
    <div class="definition" lang="ja">馬</div>
</div>

<div class="entry">
    <span class="entry-word-ja" lang="ja">ドㇰ¹</span> <span class="entry-word-pmcp">dok</span><br>
    <div class="sub-entry">
        <span class="sub-entry-word-ja" lang="ja">ドキㇳ</span> <span class="sub-entry-word-pmcp">dokit</span> <span
            class="sub-entry-word-POS" lang="ja">[他動詞]</span><br>
    </div>
    <div class="definition" lang="ja">～を引く、～を引っ張る</div>
</div>

<div class="entry">
    <span class="entry-word-ja" lang="ja">ドㇰ²</span> <span class="entry-word-pmcp">dok</span><br>
    <div class="sub-entry">
        <span class="sub-entry-word-ja" lang="ja">ドㇰティㇳ</span> <span class="sub-entry-word-pmcp">doktit</span> <span
            class="sub-entry-word-POS" lang="ja">[他動詞]</span><br>
    </div>
    <div class="definition" lang="ja">～を叩く、～を殴る、～を打つ、～を打ち付ける、(投げ棒を)投げる。</div>
</div>


ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ、ああああああああああああああああああああああ。

いろはにほへと、ちりぬるを。わかよたれそ、つねならむ。うゐのおくやま、けふこえて。あさきゆめみし、ゑひもせず。いろはにほへと、ちりぬるを。わかよたれそ、つねならむ。うゐのおくやま、けふこえて。あさきゆめみし、ゑひもせず。いろはにほへと、ちりぬるを。わかよたれそ、つねならむ。うゐのおくやま、けふこえて。あさきゆめみし、ゑひもせず。いろはにほへと、ちりぬるを。わかよたれそ、つねならむ。うゐのおくやま、けふこえて。あさきゆめみし、ゑひもせず。いろはにほへと、ちりぬるを。わかよたれそ、つねならむ。うゐのおくやま、けふこえて。あさきゆめみし、ゑひもせず。いろはにほへと、ちりぬるを。わかよたれそ、つねならむ。うゐのおくやま、けふこえて。あさきゆめみし、ゑひもせず。
`, { encoding: 'utf-8' });
