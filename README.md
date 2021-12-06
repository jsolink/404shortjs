# sk5short-one
![](https://img.shields.io/github/v/release/jsolink/404shortjs?style=for-the-badge)
![](https://img.shields.io/github/last-commit/jsolink/404shortjs?style=for-the-badge)
![](https://img.shields.io/github/license/jsolink/404shortjs?style=for-the-badge)
![](https://img.shields.io/github/languages/top/jsolink/404shortjs?style=for-the-badge)
![](https://img.shields.io/npm/v/@sk5s/404shortjs?style=for-the-badge)

[![](https://nodei.co/npm/@sk5s/404shortjs.png)](https://www.sk5s.cyou/)

快速製作簡易短連結檔案，只要將js加入404頁面，就可以快速完成多個短連結，使用javascript重新導向，不用後端程式，404shortjs make a short link just in a minutes, use javascript to redirect. Just add js to 404 page.

---

Use
---
1. add `index.js` or cdn to your html
2. add config into your `.html` file
example
```js
<script>
  let fourofour_book_location = 'book.json' // your redirect data path
  let fourofour_defaultLink = 'https://www.sk5s.cyou/' // redirect to default when error
  let fourofour_defaultLink_delay = 5 // how many seconds you want to stay on this page not redirect to default link when user go to 404 page.
</script>
```
copy here
```js
<script>
  let fourofour_book_location = ''
  let fourofour_defaultLink = 'https://www.sk5s.cyou/'
  let fourofour_defaultLink_delay = 5
</script>
```
3. create `.json` file
content:
```js
{
  "google": "https://google.com",
  "sk5s": "https://www.sk5s.cyou/"
}
```

CDN
---
### jsdelivr
```
https://cdn.jsdelivr.net/npm/@sk5s/404shortjs/index.js
```
or
```
https://cdn.jsdelivr.net/gh/jsolink/404shortjs/index.js
```

---

[![sk5s site](https://upload.cc/i1/2021/10/29/dVn6TN.png)](https://www.sk5s.cyou/)
[![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://www.sk5s.cyou/)

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg?style=for-the-badge)](CODE_OF_CONDUCT.md)

```
     _    ____                        _           _   
 ___| | __ ___| ___   _ __  _ __ ___ (_) ___  ___| |_ 
/ __| |/ /___ \/ __| | '_ \| '__/ _ \| |/ _ \/ __| __|
\__ \   < ___) \__ \ | |_) | | | (_) | |  __/ (__| |_ 
|___/_|\_\____/|___/ | .__/|_|  \___// |\___|\___|\__|
                     |_|           |__/               
```

🔗 [https://git.io/404shortjs](https://git.io/404shortjs)