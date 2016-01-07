這個範例示範最基礎的靜態網頁開發，

以jquery與jquery-ui為示範，

在網頁呈現一個日曆，

這裡有一個相依性，

jquery-ui 必須在 jquery 之後載入

    <script src="jquery-2.1.4.min.js"></script>
    <script src="jquery-ui-1.11.4/jquery-ui.js"></script>

如果載入順序錯誤，將會看不到日曆

    <script src="jquery-ui-1.11.4/jquery-ui.js"></script>
    <script src="jquery-2.1.4.min.js"></script>
    
此外，如果有使用過jQuery-ui的人可能會發覺，這個日曆的樣子很陽春，
這是我刻意不載入CSS的結果。我後續將會探討到**網頁程式模組化**與css的相關性。

其它待討論的議題

- commonjs & AMD & ES6
- 網頁程式模組化
- webpack
- postcss & nextcss
- 其它