function Kontrola() {
    let number1 = document.getElementById("A");
    var x = parseFloat(number1.value);
    let number2 = document.getElementById("B");
    var y = parseFloat(number2.value);

    if (x >= -25 && x <= 25) {
        if (y >= -25 && y <=25) {
            document.getElementById("vystup").textContent = "Leží uvnitř čtverce"
            }
        else {
            document.getElementById("vystup").textContent = "Neleží uvnitř čtverce"
            }
        }
    else {
        document.getElementById("vystup").textContent = "Neleží uvnitř čtverce"
        }
}