var elem = document.getElementById("anode-list-elements");



elem.

const myForm = document.myForm;

const addButton = myForm.addButton, 
    removeButton = myForm.removeButton, 
    languagesSelect = myForm.language;

// обработчик добавления элемента
function addOption() {

    // получаем текст для элемента
    const text = myForm.textInput.value;
 
    // получаем значение для элемента
    const value = myForm.valueInput.value;
 
    // создаем новый элемента
    const newOption = new Option(text, value);
    languagesSelect.options[languagesSelect.options.length]=newOption;
}

