function somarValores() {
    const valor1 = document.getElementById('valor1').value;
    const valor2 = document.getElementById('valor2').value;

    const num1 = parseFloat(valor1);
    const num2 = parseFloat(valor2);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Insira números válidos em ambos os campos.");
    } else {
        const soma = num1 + num2;
        alert("A soma dos valores é: " + soma);
    }
}