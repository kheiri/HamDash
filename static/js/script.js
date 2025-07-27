document.addEventListener('DOMContentLoaded', function () {
    // Login form validation
    const loginForm = document.querySelector('form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            const email = document.querySelector('#email-address');
            const password = document.querySelector('#password');
            let messages = [];

            if (email && (email.value === '' || email.value == null)) {
                messages.push('ایمیل یا نام کاربری الزامی است');
            }

            if (password && password.value.length < 8) {
                messages.push('رمز عبور باید حداقل 8 کاراکتر باشد');
            }

            if (messages.length > 0) {
                e.preventDefault();
                alert(messages.join('\n'));
            }
        });
    }

    // Toggle password visibility
    const togglePassword = document.querySelector('#toggle-password');
    const password = document.querySelector('#password');
    if (togglePassword && password) {
        togglePassword.addEventListener('click', function (e) {
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }

    // Load content via fetch for dashboard
    const mainContent = document.querySelector('main .container');
    const navLinks = document.querySelectorAll('nav a');

    const loadContent = (url) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                if(mainContent) {
                    mainContent.innerHTML = data;
                }
                if (url.includes('dashboard-overview.html')) {
                    initializeCharts();
                }
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    };

    // Initial load for dashboard
    if (mainContent) {
        loadContent('dashboard-overview.html');
    }

    if(navLinks) {
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const url = e.currentTarget.getAttribute('href');
                if (url && url !== '#') {
                    loadContent(url);
                }
            });
        });
    }


    const initializeCharts = () => {
        const salesChartCtx = document.getElementById('sales-chart');
        if(salesChartCtx) {
            new Chart(salesChartCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                    datasets: [{
                        label: 'میزان درآمد',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: '#2563EB',
                        tension: 0.1
                    }]
                }
            });
        }


        const usersChartCtx = document.getElementById('users-chart');
        if(usersChartCtx) {
            new Chart(usersChartCtx, {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                    datasets: [{
                        label: 'میزان فعالیت',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        backgroundColor: '#F97316',
                        borderColor: '#F97316',
                        borderWidth: 1
                    }]
                }
            });
        }

        const scansChartCtx = document.getElementById('scans-chart');
        if(scansChartCtx) {
            new Chart(scansChartCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                    datasets: [{
                        label: 'میزان اسکن‌شده',
                        data: [20, 40, 30, 50, 60, 45, 70],
                        fill: false,
                        borderColor: '#8B5CF6',
                        tension: 0.1
                    }]
                }
            });
        }
    }

    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if(themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark');
            const icon = themeToggle.querySelector('i');
            icon.classList.toggle('fa-moon');
            icon.classList.toggle('fa-sun');
        });
    }

    // Framer Motion Animation for login page
    const formContainer = document.querySelector('.w-full.max-w-md');
    if (formContainer && window.framerMotion) {
        const { motion } = window.framerMotion;
        motion(formContainer, {
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 }
        });

        const logo = document.querySelector('img');
        if(logo) {
            motion(logo, {
                initial: { scale: 1 },
                animate: { scale: 1.05 },
                transition: { duration: 1, repeat: Infinity, repeatType: 'reverse' }
            });
        }
    }

    // Card slider
    const slider = document.getElementById('slider');
    if(slider) {
        const prev = document.getElementById('prev');
        const next = document.getElementById('next');
        let index = 0;
        const slides = slider.children;
        const slideWidth = slides[0].clientWidth;

        next.addEventListener('click', () => {
            index = (index - 1 + slides.length) % slides.length;
            slider.style.transform = `translateX(${index * slideWidth}px)`;
        });

        prev.addEventListener('click', () => {
            index = (index + 1) % slides.length;
            slider.style.transform = `translateX(${index * slideWidth}px)`;
        });
    }
});
