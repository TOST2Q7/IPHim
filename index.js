const a1 = [ 
    [ "Cu", 63.55 ],
    [ "Au", 196.97 ],
    [ "Fu", 55.845 ],
    [ "Ni", 58.69 ],
    [ "Zn", 65.38 ],
    [ "Ag", 107.87 ],
    [ "Pt", 195.08 ],
    [ "Al", 26.98 ],
    [ "Pb", 207.2 ],
]

// Электролит, Катод, Анод
const v1 = [
    [ "NaCl", [ "Na", "Cl" ], 0.15 ],
    [ "Na2CO3", [ "Na", "O" ], 0.9 ], 
    [ "H2SO4", [ "H", "O" ], 0.2 ], 
    [ "KCl", [ "K", "Cl" ], 0.11 ], 
    [ "HNO3", [ "H", "O" ], 0.5 ], 
    [ "NaOH", [ "H", "O" ], 0.13 ], 
    [ "KOH", [ "H", "O" ], 0.17 ], 
    [ "H2SO4", [ "H", "SO2" ], 0.7 ], 
    [ "H3PO4", [ "H", "O" ], 0.56 ], 
    [ "K2SO4", [ "H", "O" ], 0.54 ], 
    [ "K2CO3", [ "H", "O" ], 0.89 ], 
    [ "(NH4)2CO3", [ "NH3", "CO2" ], 1.088 ], 
    [ "HCl", [ "H", "Cl" ], 0.123 ], 
    [ "NaF", [ "Na", "F" ], 0.13 ], 
    [ "Ca(OH)2", [ "H", "O" ], 0.979 ], 
]


var select_katod = document.getElementById("cathode");

for (let i = 0; i < 9; i++) {
    var option = document.createElement("option");
    option.text = a1[i][0];
    option.value = i;
    select_katod.add(option);
}


var select_anod = document.getElementById("anode");

for (let i = 8; i > -1; i--) {
    var option = document.createElement("option");
    option.text = a1[i][0];
    option.value = i;
    select_anod.add(option);
}


var select_elec = document.getElementById("electrolyte");

for (let i = 0; i < 15; i++) {
    var option = document.createElement("option");
    option.text = v1[i][0];
    option.value = i;
    select_elec.add(option);
}





function getIto() {
    var select_katod = document.getElementById("cathode");
    var select_anod = document.getElementById("anode");
    var select_elec = document.getElementById("electrolyte");

    var Value1 = select_katod.value; // Получить значение выбранного элемента
    var Value2 = select_anod.value; // Получить значение выбранного элемента
    var Value3 = select_elec.value;


    var A = document.getElementById('InputA').value;
    var T = document.getElementById('InputT').value;

    
    
    var itogo = ((A*T)/96485.3321233100184)*((a1[Value1][1] + a1[Value2][1] + (Value3))/2);
    

    var spanElement1 = document.getElementById('itogo1');
    var spanElement2 = document.getElementById('itogo2');
    var spanElement3 = document.getElementById('itogo3');


    spanElement1.textContent = "Масса: " + itogo;
    spanElement2.textContent = "Образования на катоде: " + v1[Value3][1][0];
    spanElement3.textContent = "Образования на аноде: " + v1[Value3][1][1];




}

document.getElementById("myButton").addEventListener("click", getIto);







