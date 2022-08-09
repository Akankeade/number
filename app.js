let number = document.getElementById('Num')
let dec = document.getElementById('Dec')
let res = document.getElementById('Res')
let inc = document.getElementById('Inc')
let  body = document.body

function Decrease (){
        number.innerText--
        if(number.innerText < 0){
            body.style.backgroundColor = 'red'
        }
}

dec.addEventListener('click', Decrease)

// RESET FUNCTION
let Reset = function(){
    number.innerText = 0

    if (number.innerText ==0 ) {
        body.style.backgroundColor = 'yellow'
    }

}
res.addEventListener('click', Reset)


// Increaase function

inc.addEventListener('click', ()=>{
    number.innerText++

    if (number.innerText > 0) {
        body.style.backgroundColor = 'green'
    }
})