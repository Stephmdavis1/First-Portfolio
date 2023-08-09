// const code = document.getElementById('code');
// const boxes = document.querySelectorAll('.box');

// code.addEventListener('dragstart', dragStart);
// code.addEventListener('dragend', dragEnd);

// boxes.forEach(box => {
//     box.addEventListener('dragover', dragOver);
//     box.addEventListener('dragenter', dragEnter);
//     box.addEventListener('dragleave', dragLeave);
//     box.addEventListener('dragdrop', dragDrop);
// })

// function dragOver(e) {
//     e.preventDefault();
// }

// function dragEnter(e) {
//     e.preventDefault();
// }

// function dragLeave(e) {
//     e.preventDefault();
// }

// function dragDrop() {
//     this.className = 'box';
//     this.append(image2);
// }



// function dragStart() {
//     setTimeout(() => (this.className = 'invisible'), 0);
// }

// function dragEnd() {
//     this.className = 'code';
// }

const herocontainer = document.querySelector('.hero-container');
// const heroimgcontainer = document.querySelector('.image-box');
const workContainer = document.querySelectorAll(".work-container");
const workTitlesFront = document.querySelector(".work-title-front");
const workTitlesUx = document.querySelector(".work-title-ux");
const projectsTitle = document.querySelector(".projects-title");
const phones = document.querySelector(".phone");
const repsonsiveWebsite = document.querySelector(".responsive-website");
const mobileApp = document.querySelector(".mobile-app");

const typed = new Typed('.element', {
    strings: ["STEPHANIE DAVIS"],
    typeSpeed: 40,
    backSpeed: 80,
    loop: true
});


let theme = document.getElementById('theme');
theme.onclick = function () {
    document.body.classList.toggle('light_mode');
    if (document.body.classList.contains('light_mode')) {
        theme.src = "./Images/dark-mode.png"
    } else {
        theme.src = "./Images/light-mode.png"
    }
}


window.addEventListener('scroll', () => {
    let offsetY = window.scrollY
    herocontainer.style.transform = `translateY(${offsetY * 0.1}px)`
    workContainer[0].style.backgroundPositionY = `${offsetY * 0.5}px`
    workContainer[1].style.backgroundPositionY = `${-offsetY * 0.5}px`
    workTitlesFront.style.transform = `translateX(calc(200vh - ${offsetY}px))`
    workTitlesUx.style.transform = `translateX(calc(-100vh + ${offsetY}px))`
    projectsTitle.style.transform = `translateY(calc(250vh - ${offsetY}px))`
    phones.style.transform = `translateX(calc(350vh - ${offsetY}px))`
    repsonsiveWebsite.style.transform = `translateX(calc(453vh - ${offsetY}px))`
    mobileApp.style.transform = `translateX(calc(592vh - ${offsetY}px))`

})


 // heroimgcontainer.style.transform = `translate(${offsetY * 0.4}px, ${-offsetY * 0.15}px)`




