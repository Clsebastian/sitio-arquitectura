import '../css/main.css';
import { createIcons, icons } from 'lucide';

// Initialize Lucide Icons
createIcons({ icons });

// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const closeBtn = document.getElementById('close-menu-btn');
const menu = document.getElementById('mobile-menu');
const links = document.querySelectorAll('.mobile-link');

function toggleMenu() {
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
    document.body.classList.toggle('overflow-hidden');
}

if (btn) btn.addEventListener('click', toggleMenu);
if (closeBtn) closeBtn.addEventListener('click', toggleMenu);

links.forEach(link => {
    link.addEventListener('click', toggleMenu);
});

// Hero Carousel Logic
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentSlide = 0;
const slideInterval = 5000; // 5 seconds

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.remove('opacity-0');
            slide.classList.add('opacity-100');
        } else {
            slide.classList.remove('opacity-100');
            slide.classList.add('opacity-0');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Event Listeners for Carousel
if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetTimer();
    });
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetTimer();
    });
}

// Auto Play
let autoPlay = setInterval(nextSlide, slideInterval);

function resetTimer() {
    clearInterval(autoPlay);
    autoPlay = setInterval(nextSlide, slideInterval);
}
