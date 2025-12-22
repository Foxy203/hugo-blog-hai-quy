// Dark/Light mode toggle functionality
(function () {
    const toggleButton = document.getElementById('theme-toggle');
    const themeIcon = toggleButton?.querySelector('.theme-icon');
    const lightHighlight = document.getElementById('light-highlight');

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Apply the theme on page load
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeIcon) themeIcon.textContent = '☀️';
        if (lightHighlight) lightHighlight.disabled = true;
    } else {
        if (lightHighlight) lightHighlight.disabled = false;
    }

    // Toggle theme on button click
    toggleButton?.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');

        let theme = 'light';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
            if (themeIcon) themeIcon.textContent = '☀️';
            if (lightHighlight) lightHighlight.disabled = true;
        } else {
            if (themeIcon) themeIcon.textContent = '🌙';
            if (lightHighlight) lightHighlight.disabled = false;
        }

        // Save theme preference
        localStorage.setItem('theme', theme);
    });
})();
