let progress = document.querySelector("#progress-bar")
let progress_text = document.querySelector("#progress-text")
let count = 0;
setInterval(function () {
    if (count < 100) {
        count = count + 1
        progress.style.width = `${count}%`
        progress_text.textContent = `${count}%`
    }
}, 1)