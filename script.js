// Функция для включения версии для слабовидящих
function enableSpecialVersion() {
    // Добавляем класс special-version к тегу body
    document.body.classList.add('special-version');
    
    // Сохраняем выбор пользователя в localStorage
    localStorage.setItem('specialVersion', 'enabled');
    
    // Меняем текст кнопки
    document.querySelector('.eye-button').textContent = '👁 Обычная версия';
}

// Функция для отключения версии для слабовидящих
function disableSpecialVersion() {
    // Удаляем класс special-version у тега body
    document.body.classList.remove('special-version');
    
    // Сохраняем выбор пользователя
    localStorage.setItem('specialVersion', 'disabled');
    
    // Меняем текст кнопки
    document.querySelector('.eye-button').textContent = '👁 Версия для слабовидящих';
}

// Функция переключения
function toggleSpecialVersion() {
    if (document.body.classList.contains('special-version')) {
        disableSpecialVersion();
    } else {
        enableSpecialVersion();
    }
}

// Проверяем сохраненные настройки при загрузке страницы
function checkSavedVersion() {
    const savedVersion = localStorage.getItem('specialVersion');
    if (savedVersion === 'enabled') {
        enableSpecialVersion();
    }
}

// Добавляем обработчик события на кнопку после загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    // Находим кнопку
    const eyeButton = document.querySelector('.eye-button');
    
    // Добавляем обработчик клика
    if (eyeButton) {
        eyeButton.addEventListener('click', toggleSpecialVersion);
    }
    
    // Проверяем сохраненные настройки
    checkSavedVersion();
});

    // Функция для форматирования даты
function getCurrentDate() {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Январь - 0
        const year = today.getFullYear();
        
        return `${day}.${month}.${year}`;
    }
    document.getElementById('current-date').textContent = getCurrentDate();