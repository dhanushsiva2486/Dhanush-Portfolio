/* MENU SHOW Y HIDDEN  */
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

/*Close  */

toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

/* Hidden */

closeMenu.addEventListener('click' , ()=>{
    navMenu.classList.remove('show')
})

/* Remove Menu */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    navMenuclassList.remove('show')
}
navLink.forEach(n => n.addEventListner('click', linkAction))

/* SCROLL SECTIONS ACTIVE LINK */

const section = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrolly = window.pageYOffset
    
    section.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrolly > sectionTop && scrolly <= sectionTop +sectionHeight){
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.remove('active')
        }
    })
}