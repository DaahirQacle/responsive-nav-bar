let hambeger = document.querySelector('.hambeger');
let icons = document.querySelector('.fa-bars')

hambeger.addEventListener('click',()=>{

    if(icons.classList.contains('fa-bars')){
        icons.classList.replace('fa-bars','fa-times')
        let test = document.querySelector('.menu-bars').style.display="block"
    }else{
        icons.classList.replace('fa-times','fa-bars')
        let test = document.querySelector('.menu-bars').style.display="none"
    }
})

// function func(){
//     test.classList.toggle('bars')
// }