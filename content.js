// import {list,number} from "./main.js";
// console.log(number)

document.getElementById('title-content').innerHTML=list.articles[`${number}`].title;
document.getElementById('content').innerHTML=list.articles[`${number}`].content;
document.getElementById('img').innerHTML=list.articles[`${number}`].urlToImage;
document.getElementById('author').innerHTML=list.articles[`${number}`].author;