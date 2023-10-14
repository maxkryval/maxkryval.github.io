document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.add('hidden');
        });

        const contentName = e.target.getAttribute('data-content');
        const targetSection = document.getElementById(contentName);
        if (targetSection) {
            targetSection.classList.remove('hidden');
        }
    });
});

document.getElementById('contact-btn').addEventListener('click', function() {
    const form = document.getElementById('contact-form');
    if (form.classList.contains('hidden')) {
        form.classList.remove('hidden');
    } else {
        form.classList.add('hidden');
    }
});
