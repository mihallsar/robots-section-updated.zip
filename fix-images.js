// Скрипт для замены всех изображений на абсолютные пути
const domain = 'https://ideipro.ru'; // Твой домен

// Заменяем все Unsplash URL на локальные
const imageMappings = {
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80': `${domain}/wp-content/uploads/robots/robot-vacuum.jpg`,
    'https://images.unsplash.com/photo-1563207153-f403bf289096?w=800&q=80': `${domain}/wp-content/uploads/robots/arduino-robot.jpg`,
    'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?w=800&q=80': `${domain}/wp-content/uploads/robots/industrial-robot.jpg`,
    'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&q=80': `${domain}/wp-content/uploads/robots/lawn-mower.jpg`,
    'https://images.unsplash.com/photo-1561144257-e32e8eeb8e5e?w=800&q=80': `${domain}/wp-content/uploads/robots/robot-toy.jpg`,
    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80': `${domain}/wp-content/uploads/robots/lego-robot.jpg`,
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80': `${domain}/wp-content/uploads/robots/diy-robot.jpg`,
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80': `${domain}/wp-content/uploads/robots/window-cleaner.jpg`,
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80': `${domain}/wp-content/uploads/robots/warehouse-robot.jpg`,
    'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?w=800&q=80': `${domain}/wp-content/uploads/robots/robot-dog.jpg`,
    'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&q=80': `${domain}/wp-content/uploads/robots/hexapod-robot.jpg`,
    'https://images.unsplash.com/photo-1581092583537-20d51876f3c7?w=800&q=80': `${domain}/wp-content/uploads/robots/drone.jpg`,
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80': `${domain}/wp-content/uploads/robots/ai-interview.jpg`,
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80': `${domain}/wp-content/uploads/robots/window-washer.jpg`
};

// Функция для замены изображений
function replaceImages() {
    document.querySelectorAll('img').forEach(img => {
        const src = img.getAttribute('src');
        if (imageMappings[src]) {
            img.setAttribute('src', imageMappings[src]);
        }
    });
}

// Запускаем после загрузки страницы
document.addEventListener('DOMContentLoaded', replaceImages);