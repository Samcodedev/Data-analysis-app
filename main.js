let first = document.getElementById("first")
let second = document.getElementById("second")
let third = document.getElementById("third")
let forth = document.getElementById("forth")
let fifth = document.getElementById("fifth")
let show = document.getElementById("show")

let ff = document.getElementById("ff")
let ss = document.getElementById("ss")
let tt = document.getElementById("tt")
let fo = document.getElementById("fo")
let fi = document.getElementById("fi")

let percentage = 100


function call(){

    let totalSum = parseFloat(ff.value) + parseFloat(ss.value) + parseFloat(tt.value) + parseFloat(fo.value) + parseFloat(fi.value)
    
    let div1 = (parseFloat(ff.value)/totalSum) * 100
    first.innerHTML = (div1).toFixed(1) + "%"
    let div2 = (parseFloat(ss.value)/totalSum) * 100
    second.innerHTML = (div2).toFixed(1) + "%"
    let div3 = (parseFloat(tt.value)/totalSum) * 100
    third.innerHTML = (div3).toFixed(1) + "%"
    let div4 = (parseFloat(fo.value)/totalSum) * 100
    forth.innerHTML = (div4).toFixed(1) + "%"
    let div5 = (parseFloat(fi.value)/totalSum) * 100
    fifth.innerHTML = (div5).toFixed(1) + "%"

    first.style.height = div1 + "%"
    second.style.height = div2 + "%" 
    third.style.height = div3 + "%"
    forth.style.height = div4 + "%"
    fifth.style.height = div5 + "%"
    sumValue()


    console.log(totalSum)
    console.log(parseFloat((ff.value)/totalSum)*100)
}