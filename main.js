var mode = document.querySelector("button")
var body = document.querySelector("body")
var avatar = document.querySelector("img")

mode.addEventListener('click', change)

function change() {
    if(body.classList.contains("black")){
        body.classList.remove("black")
        avatar.setAttribute('src', './assets/avatar-light.png')
        
    }else{
        body.classList.add("black")
        avatar.setAttribute('src', './assets/avatar.png')
    }
}