


function myFunction() {
    alert("Функция вызвана!");
    var text = document.getElementById("text21");
    text.innerHTML = selectElement;
}

// Находим кнопку по ее id
var button = document.getElementById("myButton");

// Назначаем обработчик события "click" для кнопки
button.addEventListener("click", checkSelected);



var selectElement;
var inputValue_Amper;
var inputValue_Time;
var text;














function checkSelected() {
    selectElement = document.getElementById("input_data").value;
    inputValue_Amper = document.getElementById("inputAmper").value;
    inputValue_Time = document.getElementById("inputTime").value;
    text = document.getElementById("text21");



    switch(selectElement) {
        case "cu1":
            handleOption1();    
            break;
        
        case "cu2":
            handleOption2();
            break;
        
        case "al1":
            handleOption3();
            break;
        
        case "au1":
            handleOption4();
            break;

        case "au2":
            handleOption5();
            break;
        
        default:
            // Действие по умолчанию, если не выбрано ни одно из опций
            break;
    }






}

function handleOption1() {
    text.innerHTML = (63.55*inputValue_Amper*inputValue_Time)/(2*96485.3321233100184)
}

function handleOption2() {
    text.innerHTML = (63.55*inputValue_Amper*inputValue_Time)/(3*96485.3321233100184)
}

function handleOption3() {
    text.innerHTML = (26.98*inputValue_Amper*inputValue_Time)/(3*96485.3321233100184)
}

function handleOption4() {
    text.innerHTML = (196.967*inputValue_Amper*inputValue_Time)/(3*96485.3321233100184)
}

function handleOption5() {
    text.innerHTML = (196.967*inputValue_Amper*inputValue_Time)/(2*96485.3321233100184)
}
// ---------------------------------

