/* To Top */
let toTop = document.getElementById("Top");
/* Count number from 0 to Goal */
let stat = document.querySelectorAll("#stat .box span");
let statDiv = document.querySelector(".stats")
let started = false;

window.onscroll = function () {
    /* To Top */
    if (window.scrollY >= 400) {
        toTop.style.bottom = "20px";
    } else {
        toTop.style.bottom = "-80px";
    }
    /*End To Top */

    /* Count number from 0 to Goal */
    if (window.scrollY >= (statDiv.offsetTop - 500)) {
        if (!started) {
            stat.forEach((num) => startCount(num));
        }
        started = true;

        function startCount(el) {
            let gol = el.dataset.goal;
            let counte = setInterval(() => {
                el.textContent++;
                if (el.textContent == gol) {
                    clearInterval(counte)
                }
            }, 2000 / gol)
        }
    }

}


toTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
})

/* Progress Skills */

let ourskill = document.querySelector(".ourskilld");
// Auto

let Progress = document.querySelectorAll(".progress .skill .prog");
window.addEventListener("scroll", function () {
    if (window.scrollY >= (ourskill.offsetTop - 500)) {
        Progress.forEach((progrs) => progrs.style.width = `${progrs.dataset.prog}`)
    }
})


/* manuall
// window.addEventListener("scroll", function () {
//     if (window.scrollY >= 7400) {
//         htmlSkill.style.width = "80%";
//         cssSkill.style.width = "85%";
//         jsSkill.style.width = "69%";
//         pySkill.style.width = "60%";
//         sqlSkill.style.width = "75%";
//     }
// })*/

/* Other Link */
let otherLink = document.querySelector(".Other");
let hiddenLink = document.querySelector(".hidden-Links");
otherLink.addEventListener("click", function () {
    hiddenLink.classList.toggle("clicked");
    otherLink.classList.toggle("onclick");
})
/* To hide the Element when click on outside it The Link Below*/
/*https://bobbyhadz.com/blog/javascript-hide-element-when-clicked-outside*/
document.addEventListener("click", function HideEl(el) {
    if (!hiddenLink.contains(el.target) && !otherLink.contains(el.target)) {
        hiddenLink.classList.remove("clicked");
        otherLink.classList.remove("onclick");
    }
})

/* Coundown Time */
let time = new Date("Jan 1, 2023 00:00:00").getTime();



let counter = setInterval(() => {
    let timeNow = new Date().getTime();
    let diff_time = time - timeNow;
    let days = Math.floor((diff_time / 1000 / 60 / 60 / 24));
    let hours = Math.floor((diff_time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    let mins = Math.floor((diff_time % (1000 * 60 * 60) / (1000 * 60)));
    let secs = Math.floor((diff_time % (1000 * 60) / (1000)));
    document.getElementById("days").innerHTML = days < 10 ? `0${days}` : days;
    document.getElementById("hour").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.getElementById("mins").innerHTML = mins < 10 ? `0${mins}` : mins;
    document.getElementById("sec").innerHTML = secs < 10 ? `0${secs}` : secs;
    if (counter <= 0) {
        clearInterval();
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hour").innerHTML = "00";
        document.getElementById("mins").innerHTML = "00";
        document.getElementById("secs").innerHTML = "00";
    }
})

/* dark / light theme */

/* 1 => switch button theme */
let themeButton = document.querySelector(".swichbutton");
let spanButton = document.querySelector(".spanButton");
let moon = document.getElementById("moon");
let sun = document.getElementById("sun");
let themeColor = document.querySelector("html");

spanButton.addEventListener("click", function () {
    spanButton.classList.toggle("switched");
    moon.classList.toggle("moon");
    sun.classList.toggle("sun");
});
/* 2 => change color */
sun.addEventListener("click", function () {
    themeColor.setAttribute("data-theme", "dark");
});
moon.addEventListener('click', function () {
    themeColor.setAttribute("data-theme", "light");
});

/* Setting button */
let settingButton = document.querySelector('.setting');
let confg = document.querySelector('.setting .confg')
settingButton.addEventListener('click', function () {
    confg.classList.toggle('show');
});
document.addEventListener('click', function (el) {
    if (!confg.contains(el.target) && !settingButton.contains(el.target)) {
        confg.classList.remove('show');
    }
})

