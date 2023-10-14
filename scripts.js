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
