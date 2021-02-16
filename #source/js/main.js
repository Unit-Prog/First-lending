let burger = document.querySelector('.burger');
let burgerLine = document.querySelector('.burger__line')
let headerMenu = document.querySelector('.header__menu')
let wrapper = document.querySelector('body')

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    burgerLine.classList.toggle('active')
    headerMenu.classList.toggle('active')
    wrapper.classList.toggle('overflow-hidden')
})

//* =============================================================================================

let progress = document.querySelectorAll('.skills__progress')
let percent = document.querySelectorAll('.skills__percent span')
let progressBar = document.querySelectorAll('.skills__progress-bar')

function setProgress(circle, value) {
    let radius = circle.r.baseVal.value
    let circumference = radius * 2 * Math.PI
    circle.style.strokeDasharray = circumference
    circle.style.strokeDashoffset = circumference - (value / 100) * circumference
}

function progressAnimated(circle, percent, progressBar, value) {
    let i = 0
    setInterval(() => {
        if (i < value) {
            i++
            setProgress(circle, i)
            percent.innerText = i
            progressBar.style.opacity = i / 30;
        } 
        else {
            return
        }
    }, 30)
}

function progressBarsAnimated() {
    progressAnimated(progress[0], percent[0], progressBar[0], 90)
    progressAnimated(progress[1], percent[1], progressBar[1], 75)
    progressAnimated(progress[2], percent[2], progressBar[2], 70)
    progressAnimated(progress[3], percent[3], progressBar[3], 85)
}

function progressBarsAnimationStart(morePixelsDown) {
    let html = document.documentElement
    let skillsColumn = document.querySelectorAll('.skills__column')
    let animated = false;

    function startAnimation() {
        let startСoordinates = skillsColumn[0].getBoundingClientRect().top - html.clientHeight + morePixelsDown
        if(startСoordinates < 0 && !animated) {
            progressBarsAnimated()
            animated = true;
            setTimeout(() => {skillsColumn.forEach(item => {item.classList.remove('transparent')})}, 30)
        }
    }

    startAnimation()
    window.addEventListener('scroll', (e) => {startAnimation()})
}

progressBarsAnimationStart(60)
//* =============================================================================================

function animationStart(element, morePixelsDown, animationDelay) {
    let html = document.documentElement
    let animatedElement = document.querySelector(element)

    function startAnimation () {
        let startСoordinates = animatedElement.getBoundingClientRect().top - html.clientHeight + morePixelsDown
        
        if(startСoordinates < 0 && !animatedElement.classList.contains('animated')) {
            setTimeout(() => {
                animatedElement.classList.remove('transparent')
                animatedElement.classList.add('animated')
            }, animationDelay)
        }
    }

    startAnimation ()
    window.addEventListener('scroll', (e) => {startAnimation()})
}

animationStart(".services__title", 50, 0)
animationStart(".services__subtitle", 0, 350)

animationStart('.services__column:nth-child(1)', 170, 300)
animationStart('.services__column:nth-child(2)', 170, 0)
animationStart('.services__column:nth-child(3)', 170, 0)
animationStart('.services__column:nth-child(4)', 170, 300)

animationStart('.team__header-block', 90, 0)
animationStart('.team__img_ball', 100, 0)
let teamImgBall = document.querySelector('.team__img_ball')
teamImgBall.addEventListener('animationstart', () => {
    animationStart('.team__img_1', 100, 1595)
    animationStart('.team__img_2', 100, 1795)
    animationStart('.team__img_3', 100, 1895)
    animationStart('.team__img_4', 100, 2045)
})

animationStart('.skills__title', 60, 0)
animationStart('.skills__subtitle', 0, 300)

animationStart('.portfolio__title', 0, 0)
animationStart('.portfolio__subtitle', 0, 0)
animationStart('.portfolio__column:nth-child(1)', 40, 0)
animationStart('.portfolio__column:nth-child(2)', 40, 0)
animationStart('.portfolio__column:nth-child(3)', 40, 0)
animationStart('.portfolio__column:nth-child(4)', 40, 0)
animationStart('.portfolio__btn', 0, 0)

animationStart('.about-us__header-block', 50, 0)
animationStart('.about-us__item-text_1', 50, 300)
animationStart('.about-us__item-text_2', 50, 0)
animationStart('.about-us__item-text_3', 50, 300)
animationStart('.about-us__item-text_4', 50, 0)

animationStart('.get-in__header-block', 0, 0)
animationStart('.get-in__input:first-child', 0, 0)
animationStart('.get-in__input:last-child', 0, 200)
animationStart('.get-in__textarea', 100, 0)
animationStart('.get-in__btn', 50, 0)

function mouseEnterAnimation(item, animatedItem, callback) {
    item.addEventListener('mouseenter', () => {
        animatedItem.removeEventListener('animationiteration', callback)
        animatedItem.classList.add('animated')
    })
    item.addEventListener('mouseleave', () => {
        animatedItem.addEventListener('animationiteration', callback)
    })
}

let servicesItems = document.querySelectorAll('.services__item')
let servicesFlag = document.querySelector('.services__flag')
let servicesPencil = document.querySelector('.services__pencil')

function stopFlagAnimation() {setTimeout(() => {servicesFlag.classList.remove('animated')}, 250)}
function stopPencilAnimation() {servicesPencil.classList.remove('animated')}

mouseEnterAnimation(servicesItems[0], servicesFlag, stopFlagAnimation)
mouseEnterAnimation(servicesItems[1], servicesPencil, stopPencilAnimation)

function gearsAnimation() {
    let servicesBigGear = document.querySelector('.services__big-gear')
    let servicesSmallGear = document.querySelector('.services__small-gear')
    
    servicesItems[2].addEventListener('mouseenter', () => {
        servicesBigGear.style = "animation: 300ms big-gearRotateZ forwards;";
        servicesSmallGear.style = "animation: 300ms small-gearRotateZ forwards;";
    })
    servicesItems[2].addEventListener('mouseleave', () => {
        servicesBigGear.style = "animation: 300ms big-gearRotateZBack forwards;";
        servicesSmallGear.style = "animation: 300ms small-gearRotateZBack forwards;";
    })
}

gearsAnimation()

function rocketAnimation() {
    let servicesRocket = document.querySelector('.services__rocket')
    let servicesRocketFire = document.querySelector('.services__rocket-fire')
    
    servicesItems[3].addEventListener('mouseenter', () => {
        servicesRocket.classList.add('animated')
        servicesRocketFire.classList.add('animated')
    })
    servicesItems[3].addEventListener('mouseleave', () => {
        servicesRocket.classList.remove('animated')
        servicesRocketFire.classList.remove('animated')
    })
}

rocketAnimation()



