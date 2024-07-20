
let tiro = document.querySelector(".tiro")

let plus = document.querySelector(".plus")
let mines = document.querySelector(".mines")
let reset = document.querySelector(".reset")
let value = 0

plus.addEventListener("click", function(){
    value++
    tiro.innerHTML = value
})

mines.addEventListener("click", function(){
    value--
    tiro.innerHTML = value
})
reset.addEventListener("click", function(){
    value = 0
    tiro.innerHTML = value
})

