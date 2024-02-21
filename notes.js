window.addEventListener("DOMContentLoaded", e => {
    let input = document.querySelector(".search input");
    let search = (document.querySelector(".search"));
    search.addEventListener("click", p => {

        if (p.target !== input) {
            input.focus()
            input.selectionStart = input.value.length;
            input.selectionEnd = input.value.length;
        }

    })


    input.addEventListener("input", key => {


        let widthTotal = input.offsetWidth + 30 + document.querySelector(".logo").offsetWidth + document.querySelector(".ordering").offsetWidth;
        let min = true;
        if (!(widthTotal >= window.innerWidth * 0.8)) {
            min = true;

        } else {
            console.log("stop")
            min = false;

        }


        input.style.width = (input.value.length + 2) + "ch"


        if (input.offsetWidth < (search.offsetWidth > 200 ? search.offsetWidth : 200)) {

            search.style.width = input.offsetWidth + "px";

        }

    })



    let mover = document.querySelector(".nav .cont .mover")
    let nav = document.querySelector(".nav")
    document.addEventListener("mouseover", x => {
        let element = x.target;
        if (document.contains(element) && element.closest('.nav')) {
            if (element.getAttribute("info") || element.parentElement.getAttribute("info")) {
                if (element.parentElement.getAttribute("info")) element = element.parentElement;
                let editit = function () {
                    mover.classList.add("target")
                    mover.textContent = element.getAttribute("info");
                    let rect = element.getBoundingClientRect();
                    mover.style.left = rect.left - (mover.offsetWidth / 2) + (rect.width / 2 > x.target.offsetWidth / 2 ? rect.width / 2 : x.target.offsetWidth / 2) + "px";
                    mover.style.top = rect.top - (mover.offsetHeight) - 7 + "px";
                }
                editit()
                let differance = function () {
                    editit()
                    x.target.removeEventListener("transitionend", differance)

                }
                x.target.addEventListener("transitionend", differance);
            } else {
                if (mover.classList.contains("target"))
                    mover.classList.remove("target")
            }
        } else {
            if (mover.classList.contains("target"))
                mover.classList.remove("target")
        }

    })

})