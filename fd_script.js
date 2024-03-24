function calculatefd(){

    const principal = parseFloat(document.getElementById("principal").value);
    
    const interest = parseFloat(document.getElementById("interest").value);
    
    const tenure = parseFloat(document.getElementById("tenure").value);

    
    const maturityamount = principal * Math.pow((1 + interest / 100), tenure);
    //display result
    document.getElementById('result').innerHTML= "Maturity Amount :  $" + maturityamount.toFixed(2);

}

// attach listener evevnt calculator button
document.getElementById("calculate_btn").addEventListener("click" ,calculatefd);