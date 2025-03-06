document.addEventListener("DOMContentLoaded", function () {
    const heartsContainer = document.querySelector(".hearts-container");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw"; // Рандомное положение по ширине
        heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Разное время анимации
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Запускаем генерацию сердечек через небольшую задержку
    setTimeout(() => {
        setInterval(createHeart, 300);
    }, 500);
});