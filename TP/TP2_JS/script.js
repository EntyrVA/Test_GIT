/* BILGER-BAVEREL Axel */

function calculateTotal() {
    const price1 = parseFloat(document.getElementById("price1").value) || 0;
    const quantity1 = parseInt(document.getElementById("quantity1").value) || 0;
    const price2 = parseFloat(document.getElementById("price2").value) || 0;
    const quantity2 = parseInt(document.getElementById("quantity2").value) || 0;
    const price3 = parseFloat(document.getElementById("price3").value) || 0;
    const quantity3 = parseInt(document.getElementById("quantity3").value) || 0;

    const result1 = price1 * quantity1;
    const result2 = price2 * quantity2;
    const result3 = price3 * quantity3;
    
    document.getElementById("result1").innerText = result1;
    document.getElementById("result2").innerText = result2;
    document.getElementById("result3").innerText = result3;

    const totalResult = result1 + result2 + result3;
    document.getElementById("totalResult").innerText = totalResult;
}

function resetAll() {
    document.getElementById("price1").value = '';
    document.getElementById("quantity1").value = '';
    document.getElementById("price2").value = '';
    document.getElementById("quantity2").value = '';
    document.getElementById("price3").value = '';
    document.getElementById("quantity3").value = '';

    document.getElementById("result1").innerText = '0';
    document.getElementById("result2").innerText = '0';
    document.getElementById("result3").innerText = '0';
    document.getElementById("totalResult").innerText = '0';
}