var input_data = document.getElementById("input_data");

function onChange() {
  var value = e.value;
  var text = e.options[e.selectedIndex].text;
  console.log(value, text);
}





e.onchange = onChange;



onChange();


// ---------------------------------



function getValue() {
    // Получаем доступ к элементу input по его id
    var inputElement = document.getElementById("myInput");
    
    // Получаем значение, введенное пользователем
    var value = inputElement.value;
    
    // Выводим значение в консоль (или можете использовать его для других целей)
    console.log("Значение введенное пользователем: " + value);
}
