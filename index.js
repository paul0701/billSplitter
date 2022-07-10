function setTwoNumberDecimal(event) {
    this.value = parseFloat(this.value).toFixed(2);
}

function calcBill() {
    var cost = parseFloat(document.querySelector("#total-cost").value);
    var split = parseFloat(document.querySelector("#covers").value);
    var calculate;
          
          
    if (cost < 0) {
      return "You cannot have negative numbers.";
    } else {
      calculate = cost / split;
      document.querySelector("#result").innerHTML = calculate.toFixed(2);
    }
  }

  function myFunction() {
    document.getElementById("form").reset();
  }
  
  document.querySelector("#calcs").addEventListener("click", function(e) {
    event.preventDefault();
    calcBill();
  }) ; 