// ============================================
// РОБОТЫ И РОБОТИЗАЦИЯ - JAVASCRIPT
// Интерактивность и функциональность
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // ФИЛЬТРАЦИЯ КОНТЕНТА
    // ============================================
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Удаляем активный класс со всех кнопок
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Добавляем активный класс к нажатой кнопке
            this.classList.add('active');
            
            // Получаем значение фильтра
            const filterValue = this.getAttribute('data-filter');
            
            // Находим все карточки контента
            const contentCards = document.querySelectorAll('.content-card');
            
            contentCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.style.display = 'block';
                    // Анимация появления
                    card.style.animation = 'fadeInUp 0.5s ease-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // ============================================
    // FAQ АККОРДЕОН
    // ============================================
    
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Закрываем все остальные элементы
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Переключаем текущий элемент
            item.classList.toggle('active');
        });
    });
    
    // ============================================
    // РЕЙТИНГ ЗВЕЗДАМИ (для формы отзывов)
    // ============================================
    
    const stars = document.querySelectorAll('.star');
    let selectedRating = 0;
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            selectedRating = parseInt(this.getAttribute('data-rating'));
            updateStars(selectedRating);
        });
        
        star.addEventListener('mouseenter', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            updateStars(rating);
        });
    });
    
    // Восстановление выбранного рейтинга при уходе мыши
    const starsContainer = document.querySelector('.star')?.parentElement;
    if (starsContainer) {
        starsContainer.addEventListener('mouseleave', function() {
            updateStars(selectedRating);
        });
    }
    
    function updateStars(rating) {
        stars.forEach(star => {
            const starRating = parseInt(star.getAttribute('data-rating'));
            if (starRating <= rating) {
                star.textContent = '★';
                star.style.color = '#f59e0b';
            } else {
                star.textContent = '☆';
                star.style.color = '#94a3b8';
            }
        });
    }
    
    // ============================================
    // ОБРАБОТКА ФОРМ
    // ============================================
    
    // Форма отправки проекта
    const projectForm = document.getElementById('project-form');
    if (projectForm) {
        projectForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Спасибо! Ваш проект отправлен на модерацию. Мы свяжемся с вами в ближайшее время.');
            this.reset();
        });
    }
    
    // Форма вопроса
    const questionForm = document.getElementById('question-form');
    if (questionForm) {
        questionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Спасибо за ваш вопрос! Мы ответим вам в течение 24 часов.');
            this.reset();
        });
    }
    
    // Форма отзыва
    const reviewForm = document.getElementById('review-form');
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (selectedRating === 0) {
                alert('Пожалуйста, выберите оценку');
                return;
            }
            alert('Спасибо за ваш отзыв! Он будет опубликован после модерации.');
            this.reset();
            selectedRating = 0;
            updateStars(0);
        });
    }
    
    // ============================================
    // ПЛАВНАЯ ПРОКРУТКА К ЯКОРЯМ
    // ============================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // ============================================
    // АНИМАЦИЯ ПРИ ПРОКРУТКЕ
    // ============================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out';
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);
    
    // Наблюдаем за карточками контента
    document.querySelectorAll('.content-card, .tile-card').forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });
    
    // ============================================
    // ПОИСК ПО FAQ
    // ============================================
    
    const searchInput = document.querySelector('input[placeholder*="Поиск"]');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const faqItems = document.querySelectorAll('.faq-item');
            
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question span').textContent.toLowerCase();
                const answer = item.querySelector('.faq-answer-content').textContent.toLowerCase();
                
                if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                    item.style.display = 'block';
                    
                    // Подсвечиваем найденные элементы
                    if (searchTerm.length > 2) {
                        item.style.background = 'rgba(37, 99, 235, 0.05)';
                    } else {
                        item.style.background = '';
                    }
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
    
    // ============================================
    // КНОПКИ "КУПИТЬ" / "ПОДРОБНЕЕ"
    // ============================================
    
    document.querySelectorAll('.btn-primary, .btn-outline').forEach(button => {
        button.addEventListener('click', function(e) {
            // Если это не ссылка и не форма
            if (!this.href && this.type !== 'submit') {
                e.preventDefault();
                const cardTitle = this.closest('.content-card')?.querySelector('.card-title')?.textContent;
                if (cardTitle) {
                    alert(`Функция в разработке.\n\nВы выбрали: ${cardTitle}\n\nСкоро здесь будет полная информация о продукте!`);
                }
            }
        });
    });
    
    // ============================================
    // СЧЕТЧИКИ (для статистики на главной)
    // ============================================
    
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + '+';
            }
        }, 16);
    }
    
    // Запускаем анимацию счетчиков при загрузке
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const text = stat.textContent;
        const number = parseInt(text.replace(/\D/g, ''));
        if (number) {
            stat.textContent = '0+';
            setTimeout(() => {
                animateCounter(stat, number);
            }, 500);
        }
    });
    
    // ============================================
    // УВЕДОМЛЕНИЯ
    // ============================================
    
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 20px 30px;
            background: ${type === 'success' ? '#10b981' : '#ef4444'};
            color: white;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            animation: slideInRight 0.3s ease-out;
            font-weight: 600;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // ============================================
    // LAZY LOADING ДЛЯ ИЗОБРАЖЕНИЙ
    // ============================================
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
    
    // ============================================
    // КНОПКА "НАВЕРХ"
    // ============================================
    
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%);
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        display: none;
        z-index: 1000;
        box-shadow: 0 4px 16px rgba(37, 99, 235, 0.3);
        transition: all 0.3s ease;
    `;
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    scrollToTopBtn.addEventListener('mouseenter', () => {
        scrollToTopBtn.style.transform = 'scale(1.1)';
    });
    
    scrollToTopBtn.addEventListener('mouseleave', () => {
        scrollToTopBtn.style.transform = 'scale(1)';
    });
    
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    
    // ============================================
    // ДОПОЛНИТЕЛЬНЫЕ АНИМАЦИИ CSS
    // ============================================
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    console.log('🤖 Секция "Роботы и роботизация" загружена успешно!');
});
</script>