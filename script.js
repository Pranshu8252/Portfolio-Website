document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const thankYouMessage = document.getElementById('thankYouMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Simulate form submission
        setTimeout(() => {
            form.reset();
            thankYouMessage.classList.remove('hidden');
        }, 500); // Simulate server processing time
    });
});
