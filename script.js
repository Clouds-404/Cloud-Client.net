document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('stars-canvas');
    const starCount = 130;

    // Створюємо зірки
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 2 + 0.5;
        const opacity = Math.random() * 0.5 + 0.1;

        star.style.cssText = `
            position: absolute;
            left: ${x}%;
            top: ${y}%;
            width: ${size}px;
            height: ${size}px;
            background: #fff;
            border-radius: 50%;
            opacity: ${opacity};
            box-shadow: 0 0 5px rgba(255,255,255,0.3);
        `;
        canvas.appendChild(star);
    }

    // Плавна прокрутка
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});