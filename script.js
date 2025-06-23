let date = document.getElementById('date')
let form = document.getElementById('form')
let display = document.getElementById("display")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let birthDate = new Date(date.value)
    let currentDate = new Date()
    let totalTime = (birthDate - currentDate) / (1000 * 60 * 60 * 24)
    const days = Math.floor((birthDate - currentDate) / (1000 * 60 * 60 * 24))
    const hours = Math.floor(((birthDate - currentDate) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor(((birthDate - currentDate) % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor(((birthDate - currentDate) % (1000 * 60)) / (1000))
    let isNum = days + hours + minutes + seconds
    if (isNaN(isNum)) {
        display.textContent = "Enter a valid date"
        date.value = ""
    } else if (birthDate < currentDate ) {
         display.textContent = "Enter a valid date"
        date.value = ""
    }
     else {
        display.textContent = `Your Birthday will be in ${days} Days ${hours} hours, ${minutes} minutes and ${seconds} seconds`
        date.value = ""
    }
})