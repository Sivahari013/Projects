let button = document.getElementById('btn');
const wrap = document.getElementById('wrapper');
const bgcolor = document.getElementById('color');
const HexValue = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

button.addEventListener('click',function(){
    
    let hexColor = "#"
    
    for(let i = 1; i<=6; i++){
        hexColor += RandHex()
    }

    wrap.style.backgroundColor = hexColor;
    bgcolor.innerHTML = hexColor;
})


function RandHex(){
    let hexVal = Math.floor(Math.random() * 16)
    return HexValue[hexVal]
}

