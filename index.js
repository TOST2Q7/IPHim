


function myFunction() {
    alert("Функция вызвана!");
}

// Находим кнопку по ее id
var button = document.getElementById("myButton");

// Назначаем обработчик события "click" для кнопки
button.addEventListener("click", myFunction);


















function checkSelected() {
    const selectElement = document.getElementById("input_data").value;
    const inputValue_Amper = document.getElementById("inputAmper").value;
    const inputValue_Time = document.getElementById("inputTime").value;


    


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
            handleOption3();
            break;

        case "au2":
            handleOption3();
            break;
        
        default:
            // Действие по умолчанию, если не выбрано ни одно из опций
            break;
    }
}

function handleOption1() {
    console.log("Option 1 выбрана");
    // Дополнительные действия для Option 1
}

function handleOption2() {
    console.log("Option 1 выбрана");
    // Дополнительные действия для Option 1
}

function handleOption3() {
    console.log("Option 1 выбрана");
    // Дополнительные действия для Option 1
}
// ---------------------------------



function getValue() {
    // Получаем доступ к элементу input по его id
    var inputElement = document.getElementById("myInput");
    
    // Получаем значение, введенное пользователем
    var value = inputElement.value;
    
    // Выводим значение в консоль (или можете использовать его для других целей)
    console.log("Значение введенное пользователем: " + value);
}
