

const clock = document.getElementById('clock')

// setInterval is a function which repeats the same code again and again
setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)