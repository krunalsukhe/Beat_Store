
let last_music=new Audio;
let last_bn=null;
function playAudio(music,bn){
    if(music.paused || music.currntTime<=0){
        if(last_music!=music){
            last_music.pause();
            last_music.currentTime=0;
            if(last_bn!=null){
                last_bn.classList.remove('fa-circle-pause');
                last_bn.classList.add('fa-circle-play');
            }
            last_music=music;
            last_bn=bn;
        }
        music.play();
        // let icon = document.querySelector(".fa-circle-play");
        bn.classList.remove('fa-circle-play');
        bn.classList.add('fa-circle-pause');
    }
    else{
        music.pause();
        //let icon = document.querySelector(".fa-circle-pause");
        bn.classList.remove('fa-circle-pause');
        bn.classList.add('fa-circle-play');
    }
    
}
function frepeat(music){
    music.currentTime=0;
}

function fdrop(){    
    let list = document.querySelector('.about_dropdown');    
    list.classList.toggle('dropd');   
}

// function myFunction() {
//     let incart=localStorage.getItem('cartval');
//     incart=parseInt(incart);
//     document.getElementById("cart_val").textContent=incart+1;
// }

// window.onload = function() {
//     var reloading = sessionStorage.getItem("reloading");
//     if (reloading) {
//         sessionStorage.removeItem("reloading");
//         myFunction();
//     }
// }

// function reloadP() {
//     sessionStorage.setItem("reloading", "true");
//     document.location.reload();
// }

function onLoadcart(){
    let incart=localStorage.getItem('cartval');
    // var token=localStorage.getItem('token');
    // localStorage.setItem('token',"");
    incart=parseInt(incart);
    if(incart){
        document.getElementById("cart_val").textContent=incart;
    }
}

function cartval(){
    const token=localStorage.getItem('token');
    if(!token){
        window.alert("Please Sign In");
        return "";
    }
    
    let incart=localStorage.getItem('cartval');
    incart=parseInt(incart);
    if(incart){
        localStorage.setItem('cartval',incart+1)
        document.getElementById("cart_val").textContent=incart+1;
    }
    else{
        localStorage.setItem('cartval',1)
        document.getElementById("cart_val").textContent=1;
    }
    
}

onLoadcart();
