// GLOBAL VARIABLES
var root = document.querySelector(':root')
var rootStyles = getComputedStyle(root)

var mtnDiv;

window.addEventListener('load', (event) => {
    mtnDiv = document.querySelector("#mtn-div");
    console.log('page is fully loaded');
    let y = (window.scrollY || window.pageYOffset) / (mtnDiv.offsetHeight * 0.9)
    if(y > 1) y = 1

    var r = mtnColor[0] * (1 - y) + bgColor[0] * y
    var g = mtnColor[1] * (1 - y) + bgColor[1] * y
    var b = mtnColor[2] * (1 - y) + bgColor[2] * y
    root.style.setProperty('--mountain', `rgb(${r}, ${g}, ${b})`)
  });










// BACKGROUND SCROLL
var mtnColor = rootStyles.getPropertyValue('--mountain')
    .toString().replace(/[^\d,]/g, '').split(','); // parsing rgb to array
var bgColor = rootStyles.getPropertyValue('--background')
    .toString().replace(/[^\d,]/g, '').split(','); // parsing rgb to array

window.addEventListener('scroll', () => {
    let y = (window.scrollY || window.pageYOffset) / (mtnDiv.offsetHeight * 0.9)
    if(y > 1) y = 1

    var r = mtnColor[0] * (1 - y) + bgColor[0] * y
    var g = mtnColor[1] * (1 - y) + bgColor[1] * y
    var b = mtnColor[2] * (1 - y) + bgColor[2] * y
    root.style.setProperty('--mountain', `rgb(${r}, ${g}, ${b})`)
})