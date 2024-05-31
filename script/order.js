let btn =document.querySelector('button')
let input1=document.querySelectorAll('input')[0]
let input2=document.querySelectorAll('input')[1]
let total1=document.getElementById('firstTot')
let total2=document.getElementById('secondTot')
let price1=document.querySelectorAll('td')[3]
let price2=document.querySelectorAll('td')[9]
let overallTotal=document.querySelectorAll('td')[14]



function total(){
    // total1.innerText = ("R"+(price1.innerText * input1.value).toFixed(2))
result=(price1.innerText * input1.value).toFixed(2)
total1.innerText ="R" + result
}

input1.onchange = function(){total()}


function tot2(){
    // total2.innerText = ("R" +(price2.innerText * input2.value).toFixed(2))
    answer=(price2.innerText * input2.value).toFixed(2)

    total2.innerText ="R" + answer

}

input2.onchange = function(){tot2()}




btn.addEventListener('click',grandTotal)
function grandTotal(){
    total()
    tot2()
    // overallTotal.innerText = 
    sum =eval(`${result}+ ${answer}`).toFixed(2)
    overallTotal.innerText ="R" +sum
    // overallTotal.innerText="hello"
}

// btn.addEventListener('click',calculate)


// function calculate(){


// }
// function mult(value1,value) {
//     total1.innerText +=eval(`${input1.value} *150.95`)
    
// }
// function multi(value1,value) {
//     total2.innerText +=eval(`${input2.value} *180.95`)
    
// }


// total1.addEventListener('click',mult)
// total2.addEventListener('click',multi)