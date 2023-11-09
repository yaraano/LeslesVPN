const mobailBtn = document.querySelector('.mobile-btn')
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("mobile").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
})
