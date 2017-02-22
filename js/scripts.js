
// TODO: use colourlovers-api
// http://www.colourlovers.com/api/palettes/top?format=json

//TODO: include randomize feature
//TODO: have fifth color be bg for body
//TODO: Randomly select one of the four colors (not fifth) to be the font color


const inputs = document.querySelectorAll('.color');

function changeColor () {
  const suffix = this.dataset.sizing || ''; //if this.dataset.sizing is empty, equal to nothing.
  const r = hexToRgb(this.value).r;
  const g = hexToRgb(this.value).g;
  const b = hexToRgb(this.value).b;
  const a = `${this.name}` == 'fifthColor' ? 1.0 : 0.5;
  document.documentElement.style.setProperty(`--${this.name}`, "rgba(" + [r, g, b, a].join() + ")");
  document.querySelector(`#${this.name}.color__wrapper`).style.backgroundColor = `${this.value}`;   

}

function hexToRgb(hex) {
// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
});

var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
} : null;
}

inputs.forEach(input => input.addEventListener('change', changeColor));
// inputs.forEach(input => input.addEventListener('mousemove', changeColor));


//grab some pallets
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.colourlovers.com/api/palettes/random", false);
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);
