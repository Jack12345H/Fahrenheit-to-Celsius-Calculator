//Calculator Event Listener
document.getElementById("convertor").addEventListener("click", convert);

//function
function convert() {
  let fahrenheit = document.getElementById("input").value;
  let temperature = ((fahrenheit - 32) * 5) / 9;

  //output(celsius)
  document.getElementById("input").value = "";
  document.getElementById("input").style.backgroundColor = "#26d978";
  document.getElementById("celsius").innerHTML = temperature.toFixed(1);
}
