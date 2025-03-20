document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.getElementById('burgerMenu');
    const navList = document.getElementById('navList');

    // Открыть и закрыть меню при клике на бургер
    burgerMenu.addEventListener('click', (event) => {
        navList.classList.toggle('show'); // Показать/скрыть меню

        // Если меню открывается, скрываем бургер
        if (navList.classList.contains('show')) {
            burgerMenu.classList.add('hidden');
        } else {
            burgerMenu.classList.remove('hidden');
        }

        event.stopPropagation(); // Остановить всплытие, чтобы предотвратить закрытие сразу после открытия
    });

    // Закрыть меню при клике вне его
    document.addEventListener('click', (event) => {
        if (navList.classList.contains('show') && !navList.contains(event.target) && !burgerMenu.contains(event.target)) {
            navList.classList.remove('show'); // Скрыть меню
            burgerMenu.classList.remove('hidden'); // Показать бургер при закрытии
        }
    });
});