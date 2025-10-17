# 📁 Инструкция по загрузке изображений

## 🎯 Что скачал

Создал папку `robots-images/` с **14 изображениями** для роботов:

### 📸 Список изображений:
- `robot-vacuum.jpg` - Робот-пылесос (49KB)
- `arduino-robot.jpg` - Arduino робот (51KB)
- `industrial-robot.jpg` - Промышленный робот (66KB)
- `lawn-mower.jpg` - Газонокосилка (52KB)
- `robot-toy.jpg` - Робот-игрушка (65KB)
- `lego-robot.jpg` - LEGO робот (48KB)
- `diy-robot.jpg` - DIY робот (65KB)
- `window-cleaner.jpg` - Мойщик окон (52KB)
- `warehouse-robot.jpg` - Складской робот (68KB)
- `robot-dog.jpg` - Робот-собака (69KB)
- `hexapod-robot.jpg` - Hexapod робот (66KB)
- `drone.jpg` - Дрон (47KB)
- `ai-interview.jpg` - AI интервью (109KB)
- `robot-toy-alt.jpg` - Альт. робот-игрушка (66KB)

## 📦 Как скачать

**Архив готов:** `robots-images.zip` (890KB)

## 🚀 Как установить в WordPress

### Вариант 1: Через админ-панель
1. **Распакуй архив** на компьютере
2. **Зайди в WordPress:** Медиафайлы → Добавить новый
3. **Загрузи все изображения** из папки `robots-images`
4. **Запомни URL** каждого изображения (будет вида: `https://ideipro.ru/wp-content/uploads/2025/10/robot-vacuum.jpg`)

### Вариант 2: Через FTP
1. **Распакуй архив**
2. **Зайди по FTP** в папку: `/wp-content/uploads/robots/`
3. **Скопируй все файлы** из `robots-images/`

## 🔧 Обновление HTML

После загрузки изображений, замени в HTML файлах:

**Было:**
```html
<img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80" alt="Робот-пылесос">
```

**Стало:**
```html
<img src="https://ideipro.ru/wp-content/uploads/robots/robot-vacuum.jpg" alt="Робот-пылесос">
```

## 🎨 Соответствие изображений

| Unsplash URL | Локальный файл | Описание |
|-------------|---------------|----------|
| photo-1485827404703-89b55fcc595e | robot-vacuum.jpg | Робот-пылесос |
| photo-1563207153-f403bf289096 | arduino-robot.jpg | Arduino робот |
| photo-1518314916381-77a37c2a49ae | industrial-robot.jpg | Промышленный робот |
| photo-1589254065878-42c9da997008 | lawn-mower.jpg | Газонокосилка |
| photo-1593696140826-c58b021acf8b | robot-toy.jpg | Робот-игрушка |
| photo-1581092918056-0c4c3acd3789 | lego-robot.jpg | LEGO робот |
| photo-1581092160562-40aa08e78837 | diy-robot.jpg | DIY робот |
| photo-1558618666-fcd25c85cd64 | window-cleaner.jpg | Мойщик окон |
| photo-1581092160607-ee22621dd758 | warehouse-robot.jpg | Складской робот |
| photo-1546776310-eef45dd6d63c | robot-dog.jpg | Робот-собака |
| photo-1581092162384-8987c1d64718 | hexapod-robot.jpg | Hexapod робот |
| photo-1470225620780-dba8ba36b745 | drone.jpg | Дрон |
| photo-1677442136019-21780ecad995 | ai-interview.jpg | AI интервью |

## ✅ Проверка

После установки:
1. Открой любую страницу с роботами
2. Проверь, что все изображения загружаются
3. Проверь адаптивность на мобильных

## 🎯 Готово!

Теперь у тебя есть все изображения локально на сервере ideipro.ru. WordPress больше не будет блокировать их загрузку!