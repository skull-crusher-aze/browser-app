const search = document.getElementById("search");
const btn = document.getElementById("btn");
const images = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg", "bg6.jpg", "bg7.jpg", "bg8.jpg", "bg9.jpg", "bg10.jpg",];
const button = document.getElementById("img");

button.onclick = ()=>{
    var random = Math.floor(Math.random()*images.length);
    var path = "url('./assets/"+images[random]+"') no-repeat";
    document.body.style.background = path;
    localStorage.setItem("color", path);
}

const regex = /http/;
const regex2 = /www/;

window.onload = () => {
    document.body.style.background = localStorage.getItem("color");
}

btn.onclick = ()=>{
    var istrue = regex.test(search.value);
    var istrue2 = regex2.test(search.value);
    if(istrue){
        window.open(search.value, "_self")
    } else if(istrue2){
        const searchval = "http://"+search.value;
        window.open(searchval,"_self")
    } else {
        window.open(`https://www.google.com/search?q=${search.value}`, "_self")
    }
}

document.getElementById("form").onsubmit = (e) => {
    e.preventDefault();
    var istrue = regex.test(search.value);
    var istrue2 = regex2.test(search.value);
    if (istrue) {
        window.open(search.value, "_self")
    } else if (istrue2) {
        const searchval = "http://" + search.value;
        window.open(searchval, "_self")
    } else {
        window.open(`https://www.google.com/search?q=${search.value}`, "_self")
    }
}

document.getElementById("color").onchange = ()=>{
    document.body.style.background = document.getElementById("color").value;

    localStorage.setItem("color", document.getElementById("color").value);
}

document.getElementById("customize").onclick = ()=>{
    document.querySelector(".custom").classList.toggle("visible")
}

window.ondblclick = ()=>{
    document.querySelector(".custom").classList.remove("visible")
}

window.onkeypress = (evt)=>{
    if(evt.keyCode == 47){
        search.focus();
    }
}
