
let closeBtn = document.querySelector('.menu__closeSvg');
let menu = document.querySelector(".menu")
let barIcon = document.querySelector(".header__bar")
let formCloseBtn = [...document.querySelectorAll(".formCloseBtn")]
let formContainer = document.querySelector(".formContainer")
let form = document.querySelector(".demoForm")
let demoBtn = document.querySelector('.header__btn')
let submitForm = document.querySelector(".submit")
let menuDemoBtn = document.querySelector(".menu__btn")
let doneForm = document.querySelector(".doneForm")


function closeMenu() {
    menu.classList.add("dnone")
}

function openMenu() {
    menu.classList.remove("dnone")

}

function closeForm() {
    formContainer.classList.add("dnone")
    form.classList.remove("dnone")
    doneForm.classList.add("dnone")
}

function openForm() {
    formContainer.classList.remove("dnone")
}


function submitFn() {
    form.classList.add("dnone")
    doneForm.classList.remove("dnone")
}


closeBtn.addEventListener("click", closeMenu)
formCloseBtn.map(btn => {
    btn.addEventListener("click", closeForm)
})
barIcon.addEventListener("click", openMenu)
demoBtn.addEventListener("click", openForm)
menuDemoBtn.addEventListener("click", openForm)
submitForm.addEventListener("click", submitFn)