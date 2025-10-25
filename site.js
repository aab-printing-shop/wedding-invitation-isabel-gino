// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const targetDate = new Date("2026-01-28T15:00:00").getTime(); // 🎯 your wedding date
const countdown = document.getElementById("countdown");

const timer = setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
        clearInterval(timer);
        countdown.innerHTML = "🎉 The Big Day is Here! 💍";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdown.innerHTML = `
                <span><STRONG>${days}</STRONG> DAYS</span> 
                <span><STRONG>${hours}</STRONG> HOURS</span> 
                <span><STRONG>${minutes} </STRONG> MINUTES</span> AND 
                <span><STRONG>${seconds}</STRONG> SECONDS</span>
                <span> UNTIL THE BIG DAY - <strong>#ISABELongsToGINO</strong></span>
              `;
}, 1000);