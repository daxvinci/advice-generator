var txt = document.querySelector(".txt")
var id = document.querySelector(".id")
var circle = document.querySelector(".circle")


fetch("https://api.adviceslip.com/advice").then(result => {
    return result.json()
}).then(resultdata => {
    var data = resultdata.slip
    txt.innerText = data.advice
    id.innerText += data.id
}).catch(error => {
    console.log(error)
})
circle.addEventListener("click", function(){fetch("https://api.adviceslip.com/advice").then(result => {
    return result.json()
}).then(resultdata => {
    var data = resultdata.slip
    txt.innerText = data.advice
    var id2 = data.id
    id.innerText = "Advice #" + id2
}).catch(error => {
    console.log(error)
})})
