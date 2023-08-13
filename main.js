let list;
let number;
function show(){
fetch('https://newsapi.org/v2/everything?q=apple&from=2023-06-23&to=2023-06-23&sortBy=popularity&apiKey=4b6c16cbdb4043c8a9bab02d5727a3e1')
.then(Response => Response.json())
.then(data => {
    console.log(data)
    list =  JSON.stringify(data);
    localStorage.setItem('list',`${list}`);
    for(var i=0;i<5;i++)
    {
       `` document.getElementsByClassName('img')[`${i}`].src=data.articles[`${i}`].urlToImage;
        document.getElementsByClassName('titles')[`${i}`].innerHTML=data.articles[`${i}`].title;
        document.getElementsByClassName('description')[`${i}`].innerHTML=data.articles[`${i}`].description;
        document.getElementsByClassName('author')[`${i}`].innerHTML=data.articles[`${i}`].author;
    }
 
}) 
}
function search() {
    let title = document.getElementById('q').value;
    console.log(title)
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    let sortBy = document.getElementById('sortBy').value;
    if(title ==  "" && from== "" && to== "" && sortBy ==  "")
    {
        alert('please complete the search form');
    }
    else {
        fetch(`https://newsapi.org/v2/everything?q=${title}&from=${from}&to=${to}&sortBy=${sortBy}&apiKey=4b6c16cbdb4043c8a9bab02d5727a3e1`)
.then(Response => Response.json())
.then(data => {
    list =  JSON.stringify(data);
    localStorage.setItem('list',`${list}`);
    for(var i=0;i<5;i++)
    {
        document.getElementsByClassName('img')[`${i}`].src=data.articles[`${i}`].urlToImage;
        document.getElementsByClassName('titles')[`${i}`].innerHTML=data.articles[`${i}`].title;
        document.getElementsByClassName('description')[`${i}`].innerHTML=data.articles[`${i}`].description;
        document.getElementsByClassName('author')[`${i}`].innerHTML=data.articles[`${i}`].author;
    }
    }) 

    }
 }
 function a(index) {
    localStorage.setItem('index',`${index}`)
    
 }
 function get(){
    let key=localStorage.getItem('index');
    let news=JSON.parse(localStorage.getItem('list'));
    console.log(key);
    console.log(news.articles[`${key}`].content);
    document.getElementById('img-content').src=news.articles[`${key}`].urlToImage;
    document.getElementById('title-content').innerText=news.articles[`${key}`].title;
    document.getElementById('content').innerHTML=news.articles[`${key}`].content;
    document.getElementById('author').innerHTML=news.articles[`${key}`].author;
    document.getElementById('url').innerHTML=news.articles[`${key}`].url;
    document.getElementById('url').href=news.articles[`${key}`].url;
    let button = document.getElementById('button');
    button.remove();

 }
//  export{
//     number,
//     list
//  }