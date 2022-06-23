let decInp = document.getElementById("dec-inp");
let binInp = document.getElementById("bin-inp");
let octInp = document.getElementById("oct-inp");
let hexInp = document.getElementById("hex-inp");
let errorMsg = document.getElementById("error-msg");

decInp.addEventListener("input", () => {
  let decValue = parseInt(decInp.value);
  binInp.value = decInp.value==""?"":decValue.toString(2);
  octInp.value = decInp.value==""?"":decValue.toString(8);
  hexInp.value = decInp.value==""?"":decValue.toString(16).toUpperCase();
});

binInp.addEventListener("input", () => {
  let binValue = binInp.value;
  if (binValidator(binValue)) {
    decInp.value = binInp.value==""?"":parseInt(binValue, 2);
    octInp.value = binInp.value==""?"":parseInt(binValue, 2).toString(8);
    hexInp.value = binInp.value==""?"":parseInt(binValue, 2).toString(16).toUpperCase();
   errorMsg.textContent = "";
  }
  else {
   errorMsg.textContent = "Please Enter An Valid Binary Input";
  }
  function binValidator(num) {
    for (let i = 0; i < num.length; i++) {
      if (num[i] != "0" && num[i] != "1") {
        return false;
      }
    }
    return true;
  }
});
