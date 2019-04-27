


var display = document.getElementById('bar')

var buttons = document.querySelectorAll(".normal")
for (let button of buttons) {
    button.addEventListener("click", function (event) {
        display.innerText += button.innerText

    })
}

var clean = document.getElementById('clean')
clean.addEventListener("click", function (event) {
    display.innerText = " "
})


var equals = document.getElementById('equals')
equals.addEventListener("click", function (event) {
    display.innerText = eval(display.innerText)
})

var decimal = document.getElementById('decimal')
decimal.addEventListener("click", function (event) {
    display.innerText = display.innerText + "."
})