# PMCP 50 音順辞書

## 全体の流れ

- `entries.tsv` に書く
- `node build_タ.js` により、`vivliostyle/タ.html` を作る
- `cd vivliostyle; npx vivliostyle build -m` により、`nclc-leti-tectelit-leti-lukup-cet.pdf` が出来上がる

なお、vivliostyle/preview.bat を使ってプレビューを立ち上げておくと、「`node build_タ.js` により、`vivliostyle/タ.html` を作る」をトリガーにしてプレビューが更新されるので作業しやすい。