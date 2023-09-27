var button = document.querySelector("#summ-btn");
var number1 = document.querySelector("#number1");
var number2 = document.querySelector("#number2");
function summ(a, b) {
    return a + b;
}
button.addEventListener("click", function () {
    console.log("Summ: ", summ(Number(number1.value), +number2.value));
});
