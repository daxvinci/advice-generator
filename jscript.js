var txt = document.querySelector(".txt")
var id = document.querySelector(".id")


fetch("https://api.adviceslip.com/advice").then(result => {
    return result.json()
}).then(resultdata => {
    var data = resultdata.slip
    txt.innerText = data.advice
    id.innerText += data.id
}).catch(error => {
    console.log(error)
})