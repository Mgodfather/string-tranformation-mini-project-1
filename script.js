// My logic/code======>
// const inputField = document.querySelector('#text-input')
// let allResults = document.querySelectorAll('.result')

// inputField.addEventListener('input', (e)=>{
//     allResults.forEach((el, i) => {
//        el.innerText = e.target.value;
//         if (i === 0) {
//             el.innerText = e.target.value.toLowerCase();
//         } else if(i === 1){
//             el.innerText = e.target.value.toUpperCase();
//         }else if(i === 4) {
//             el.innerText = e.target.value.replaceAll(" ", '_');
//         }else if(i === 5){
//             el.innerText = e.target.value.replaceAll(" ", '-');
//         }
//     });
// })

// experienced person logic (procodr)====>
const inputField = document.querySelector('#text-input') 
const lowerCase = document.querySelector('#lowercase h4')
const upperCase = document.querySelector('#uppercase h4')
const camelCase = document.querySelector('#camelcase h4')
const pascalCase = document.querySelector('#pascalcase h4')
const snakeCase = document.querySelector('#snakecase h4')
const kebabCase = document.querySelector('#kebabcase h4')
const trim = document.querySelector('#trim h4')

//here first letter of the word will be in uppercase
function capitalizeFirstLetter(str){
    if (!str) {
        return str
    }
    return str[0].toUpperCase() + str.slice(1, str.length)
}

//here words are converted in camel case
function toCamelCase(string) {
    let wordsArr = string.toLowerCase().split(' ')
   let strArray = wordsArr.map((word, i) => {
        if (i===0) {
           return word 
        }
        return capitalizeFirstLetter(word)
    })
    return strArray.join('')
}

// here words are converted in pascal case
function toPascalCase(string){
    let wordsArr = string.toLowerCase().split(' ')
    let strArray = wordsArr.map((word) => {
         return capitalizeFirstLetter(word)
     })
     return strArray.join('')
}

// // here words are converted in snake case
// function toSnakeCase(string){
//     let wordsArr = string.split(' ')
//      return wordsArr.join('_')
// }

// // here words are converted in kebab case
// function toKebabCase(string){
//     let wordsArr = string.split(' ')
//      return wordsArr.join('-')
// }

// // here words are converted in trim
// function toTrim(string){
//     let wordsArr = string.split(' ')
//      return wordsArr.join('')
// }


//here all final results are collected
function allResults(){
    lowerCase.innerText = inputField.value.toLowerCase()
    upperCase.innerText = inputField.value.toUpperCase()
    camelCase.innerText = toCamelCase(inputField.value.trim())
    pascalCase.innerText = toPascalCase(inputField.value.trim())
    snakeCase.innerText = inputField.value.trim().replaceAll(" ", '_')
    kebabCase.innerText = inputField.value.trim().replaceAll(" ", '-')
    trim.innerText = inputField.value.trim().replaceAll(" ", '').trim()
}


inputField.addEventListener('input', () => {
    allResults()
})

// allResults()