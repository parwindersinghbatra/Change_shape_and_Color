// const container = document.getElementById('container')
const colorChange = document.getElementById('first')
const colorBtn  = document.getElementById('colorBtn')



// ========================== For Color Change Div =======================
colorBtn.addEventListener('click', () =>{

var red = Math.floor(Math.random() * 256);
var green = Math.floor(Math.random() * 256);
var blue = Math.floor(Math.random() * 256);

var newColor = "rgb(" + red + "," + green + "," + blue + ")";

    const result = colorChange.style.backgroundColor = newColor
    console.log(newColor)
})

// ====================Shape Change============================
function changeShape(){
    const shapeChange = document.getElementById('shape')
    const classList1 = ['circle', 'square', 'oval'];
    const randomIndex = Math.floor(Math.random() * classList1.length);
    
            // Add the randomly selected class to the element
            shapeChange.classList = ""

            shapeChange.classList.add(classList1[randomIndex]);
        console.log(classList1[randomIndex]);
}

const shapeBtn = document.getElementById('shapeBtn')
shapeBtn.addEventListener('click', changeShape)