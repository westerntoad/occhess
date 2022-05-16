// GLOBAL VARIABLES
var root;
var rootStyles;
var mtnDiv;
var mtnColor;
var bgColor;

window.addEventListener('load', (event) => {
    root = document.querySelector(':root');
    rootStyles = getComputedStyle(root);
    mtnDiv = document.querySelector("#mtn-div");
    mtnColor = rootStyles.getPropertyValue('--mountain')
      .toString().replace(/[^\d,]/g, '').split(','); // parsing rgb to array
    bgColor = rootStyles.getPropertyValue('--background')
      .toString().replace(/[^\d,]/g, '').split(','); // parsing rgb to array

    updateBackground();
    console.log('page is fully loaded');
  })


// FUNCTIONS
function updateBackground() {
    let y = (window.scrollY || window.pageYOffset) / (mtnDiv.offsetHeight * 0.9)
    if(y > 1) y = 1

    var r = mtnColor[0] * (1 - y) + bgColor[0] * y
    var g = mtnColor[1] * (1 - y) + bgColor[1] * y
    var b = mtnColor[2] * (1 - y) + bgColor[2] * y
    root.style.setProperty('--mountain', `rgb(${r}, ${g}, ${b})`)
}


// EVENT LISTENERS
window.addEventListener('scroll', () => {
    updateBackground();
  })