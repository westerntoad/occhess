var root = document.querySelector(':root')
var rootStyles = getComputedStyle(root)
var mtnColor = rootStyles.getPropertyValue('--mountain')
    .toString().replace(/[^\d,]/g, '').split(',') // parsing rgb to array
var bgColor = rootStyles.getPropertyValue('--background')
    .toString().replace(/[^\d,]/g, '').split(',') // parsing rgb to array
var offset = 0.07

window.addEventListener('scroll', () => {
    let y = (window.scrollY || window.pageYOffset) / ((document.body.scrollHeight - window.innerHeight) * offset)
    if(y > 1) y = 1

    var r = mtnColor[0] * (1 - y) + bgColor[0] * y
    var g = mtnColor[1] * (1 - y) + bgColor[1] * y
    var b = mtnColor[2] * (1 - y) + bgColor[2] * y
    //var [r, g, b] = [mtnColor[0]/y, mtnColor[1]/y, mtnColor[2]/y].map(Math.round)
    root.style.setProperty('--mountain', `rgb(${r}, ${g}, ${b})`)
    //alert(mtnColor + "   ,   " + bgColor)
    //document.getElementById("section1").style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    //document.getElementById("stop2").setAttribute("stop-color", `rgb(${r}, ${g}, ${b})`)
})