window.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('scroll', function(){
        const header = document.querySelector('.head');
        header.classList.toggle('sticky', window.scrollY > 0)
    })
    const menuBtn = document.querySelector('.menu-btn')
    const novigation = document.querySelector('.navigation')
    const novigationItems = document.querySelectorAll('.link')
    const scrollbtn = document.querySelector('.scrolltop-btn')
    menuBtn.addEventListener('click', ()=>{
        menuBtn.classList.toggle('active')
        novigation.classList.toggle('active')
    })
    novigationItems.forEach(navitem => {
        navitem.addEventListener('click', ()=>{
            menuBtn.classList.remove('active')
            novigation.classList.remove('active')
        })
    })
    window.addEventListener('scroll', ()=>{
        scrollbtn.classList.toggle('active', window.scrollY > 500)
    })
    scrollbtn.addEventListener('click', ()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })


    window.addEventListener('scroll', ()=>{
        let reveals = document.querySelectorAll('.reveal')
        for(let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let revealtop = reveals[i].getBoundingClientRect().top
            let revealpoint = 50
            if(revealtop < windowHeight - revealpoint) {
                reveals[i].classList.add('active')
            }
        }
    })
})