# Challenge DOM Manipulation

## Section 2. Selecting elements

**Contoh 1**

index.html

```
...
    <h1 id="title">Latihan HTML DOM</h1>
...
```

script.js

```
const title = document.getElementById('title')
console.log(title)
```

**Contoh 2**

index.html

```
...
    <h2 class="sub-title">Ini adalah sub judul</h2>
...
```

script.js

```
const subTitle = document.getElementsByClassName('sub-title')
console.log(subTitle)
```

**Contoh 3**

index.html

```
...
    <p id="desc">Ini adalah paragraf</p>
...
```

script.js

```
const p = document.getElementsByTagName('p')
console.log(p.length)
```

---

## Section 3. Traversing elements

index.html

```
...
    <main id="main">
        ...
    </main>
...
```

**Contoh 1**

script.js

```
const main = document.getElementById('main')
console.log(main.firstElementChild)
```

**Contoh 2**

script.js

```
console.log(title.parentElement)
```

**Contoh 3**

script.js

```
console.log(title.nextElementSibling)
```

---

## Section 4. Manipulating elements

**Contoh**

script.js

```
let div = document.createElement('div')
div.innerHTML = '<p>Teks ini di dalam div</p>'
document.body.appendChild(div)
```

---

## Section 5. Working with Attributes

index.html

```
...
    <button id="btn">Button</button>
...
```

**Contoh**

script.js

```
const btn = document.getElementById('btn')
btn.setAttribute('class', 'setBtn')
console.log(btn.getAttribute('type'))
console.log(btn.hasAttribute('onclick'))
```

---

## Section 6. Manipulating Element’s Styles

**Contoh**

script.js

```
main.style.backgroundColor = 'bisque'
title.style.textAlign = 'center'
subTitle[0].style.color = 'red'
```

---

## Section 7. Working with Events

**Contoh 1**

script.js

```
btn.addEventListener('click', () =>{
    alert('Anda klik button')
})

btn.addEventListener('mouseover', () => {
    btn.style.backgroundColor = 'blue'
})
```

**Contoh 2**

script.js

```
const inputField = document.getElementById('input')

inputField.addEventListener('focus', () => {
    inputField.style.backgroundColor = 'red'
})

inputField.addEventListener('blur', () =>{
    inputField.style.backgroundColor = ''
})
```

---

## Section 8. Scripting Web Forms

**Contoh 1**

index.html

```
...
    <label for="gender">
        <span>Gender :</span>
        <input type="radio" name="gender" id="male" value="Male"/>
        <span>Male</span>
        <input type="radio" name="gender" id="female" value="Female"/>
        <span>Female</span>
    </label>
    <button id="submit" type="submit">Kirim</button>
    <div id="output"></div>
...
```

script.js

```
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
```

**Contoh 2**

index.html

```
...
    <label for="pesan">
        <span>Pesan</span>
        <input placeholder="Enter some text" id="pesan" name="pesan" minlength="8">
        <p id="pesanError" style="color: red;"></p>
    </label>
...
```

script.js

```
const pesan = document.getElementById('pesan')
const pesanError = document.getElementById('pesanError')

pesan.addEventListener('input', (event) => {
    if (pesan.validity.tooShort){
        pesanError.textContent = `Penjelasan anda terlalu singkat`
    } else {
        pesanError.textContent = ``
    }
})
```
