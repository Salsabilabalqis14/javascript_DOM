// Section 2
const title = document.getElementById('title')
console.log(title)

const subTitle = document.getElementsByClassName('sub-title')
console.log(subTitle)

const p = document.getElementsByTagName('p')
console.log(p.length)

// Section 3
const main = document.getElementById('main')
console.log(main.firstElementChild)

console.log(title.parentElement)

console.log(title.nextElementSibling)

// Section 4
let div = document.createElement('div')

div.innerHTML = '<p>Teks ini di dalam div</p>'

document.body.appendChild(div)

// Section 5
const btn = document.getElementById('btn')
btn.setAttribute('class', 'setBtn')
console.log(btn.getAttribute('type'))
console.log(btn.hasAttribute('onclick'))

// Section 6
main.style.backgroundColor = 'bisque'
title.style.textAlign = 'center'
subTitle[0].style.color = 'red'

// Section 7
btn.addEventListener('click', () =>{
    alert('Anda klik button')
})

btn.addEventListener('mouseover', () => {
    btn.style.backgroundColor = 'blue'
})

const inputField = document.getElementById('input')

console.log(inputField)

inputField.addEventListener('focus', () => {
    inputField.style.backgroundColor = 'red'
})

inputField.addEventListener('blur', () =>{
    inputField.style.backgroundColor = ''
})

// Section 8
const radioButtons = document.querySelectorAll('input[name="gender"]')
const submitBtn = document.getElementById('submit')
const output = document.getElementById('output')

submitBtn.addEventListener('click', () => {
    let gender
    for(const radioButton of radioButtons){
        if (radioButton.checked){
            gender = radioButton.value
            break
        }
    }

    output.innerHTML = gender ? `Kamu ${gender}` : `Kamu belum memilih gender`
})

const pesan = document.getElementById('pesan')
const pesanError = document.getElementById('pesanError')

pesan.addEventListener('input', (event) => {
    if (pesan.validity.tooShort){
        pesanError.textContent = `Penjelasan anda terlalu singkat`
    } else {
        pesanError.textContent = ``
    }
})