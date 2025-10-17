# 🖼️ Инструкция по установке изображений для WordPress

## 📋 Пошаговая инструкция

### Шаг 1: Создай папку для изображений
1. Зайди в админ-панель WordPress
2. **Медиафайлы → Библиотека**
3. Создай новую папку: `robots`
   - Если нет кнопки "создать папку", просто загрузи первое изображение с названием `robots/robot-vacuum.jpg`

### Шаг 2: Скачай и загрузи изображения
Скачай архив с изображениями и загрузи их в папку `robots`:

**Нужные изображения:**
- `robot-vacuum.jpg` - Робот-пылесос
- `arduino-robot.jpg` - Arduino робот
- `industrial-robot.jpg` - Промышленный робот
- `lawn-mower.jpg` - Газонокосилка
- `robot-toy.jpg` - Робот-игрушка
- `lego-robot.jpg` - LEGO робот
- `diy-robot.jpg` - DIY робот
- `window-cleaner.jpg` - Мойщик окон
- `warehouse-robot.jpg` - Складской робот
- `robot-dog.jpg` - Робот-собака
- `hexapod-robot.jpg` - Hexapod робот
- `drone.jpg` - Дрон
- `ai-interview.jpg` - AI интервью
- `window-washer.jpg` - Мойщик окон 2

### Шаг 3: Обнови HTML код
Замени в HTML файлах все ссылки на изображения:

**Было:**
```html
<img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80" alt="Робот-пылесос">
```

**Стало:**
```html
<img src="https://ideipro.ru/wp-content/uploads/robots/robot-vacuum.jpg" alt="Робот-пылесос">
```

### Шаг 4: Быстрое решение (если нет своих изображений)

**Вариант А: Использовать прямые ссылки Unsplash**
Добавь в CSS:
```css
img {
    max-width: 100%;
    height: auto;
    display: block;
}
```

**Вариант Б: Временное решение**
Добавь в head HTML:
```html
<style>
.card-image {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 18px;
    text-align: center;
}
</style>
```

## 🚀 Готовые решения

### Решение 1: Полный пакет с изображениями
Я могу создать архив с готовыми изображениями и обновлёнными HTML файлами.

### Решение 2: Только CSS-заглушки
Если хочешь запустить быстро без изображений - используй цветные заглушки.

### Решение 3: Сохранить Unsplash
Добавить в functions.php WordPress:
```php
add_filter('wp_http_headers', 'allow_unsplash_images');
function allow_unsplash_images($headers) {
    $headers['Access-Control-Allow-Origin'] = '*';
    return $headers;
}
```

## 🔧 Что выбрать?

| Вариант | Скорость | Надёжность | Трудозатраты |
|---------|----------|------------|--------------|
| Unsplash | ⚡ Быстро | 🔄 Средне | 🟢 Минимум |
| Свои картинки | 🐌 Медленно | 💎 Надёжно | 🔴 Максимум |
| CSS-заглушки | ⚡ Мгновенно | 💎 Надёжно | 🟡 Средне |

## 📞 Поддержка
Если что-то не работает - проверь:
1. Правильность путей к изображениям
2. Права доступа к папке uploads
3. Включена ли загрузка медиафайлов в WordPress