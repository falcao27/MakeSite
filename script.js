// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('dots');

// Create dots
slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = 'w-3 h-3 rounded-full bg-white/50 hover:bg-white/75 transition-colors' + (index === 0 ? ' bg-white' : '');
    dot.onclick = () => goToSlide(index);
    dotsContainer.appendChild(dot);
});

// Initialize first slide
slides[0].classList.add('active');

function updateSlides() {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide].classList.add('active');

    // Update dots
    document.querySelectorAll('#dots button').forEach((dot, index) => {
        dot.classList.toggle('bg-white', index === currentSlide);
        dot.classList.toggle('bg-white/50', index !== currentSlide);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlides();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlides();
}

// Auto advance slides
setInterval(nextSlide, 4000);

// Category buttons functionality
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        // Add active class to clicked button
        button.classList.add('active');
        
        // Here you would typically filter products based on category
        const category = button.dataset.category;
        // Add your filtering logic here
    });
});

// Filter chips functionality
document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
        chip.classList.toggle('bg-pink-300');
        // Add your filtering logic here
    });
});