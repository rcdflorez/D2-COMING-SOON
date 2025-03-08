function startCountdown() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 15);
    targetDate.setHours(targetDate.getHours() + 7);
    targetDate.setMinutes(targetDate.getMinutes() + 3);

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        document.getElementById("days").textContent = Math.floor(difference / (1000 * 60 * 60 * 24));
        document.getElementById("hours").textContent = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById("minutes").textContent = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById("seconds").textContent = Math.floor((difference % (1000 * 60)) / 1000);
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
}

startCountdown();
