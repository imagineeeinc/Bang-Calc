var calc = document.getElementById("output")
setInterval(function() {
    if (calc.value.length > 10) {
        calc.style.fontSize = 550/calc.value.length + "px"
    } else if (calc.value.length < 10) {
        calc.style.fontSize = "40pt"
    }
}, 50)
calc.onkeypress = function(e) {
    if (e.keyCode === 13) {
        calc.value = eval(calc.value)
    }
}