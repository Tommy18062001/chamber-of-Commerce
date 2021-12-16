const temp = parseFloat(document.getElementById("temp").textContent);
const speed = parseFloat(document.getElementById("speed").textContent);

let f = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
f = Math.round(f);
// console.log(f);

if (temp <= 50 && speed > 3) {
  document.getElementById("windChill").textContent = f + "\xB0F";
}
else {
  document.getElementById("windChill").textContent = "No Wind Chill Today"
}