document.addEventListener('DOMContentLoaded', function () {
    const togglePassword = document.querySelector('#toggle-password');
    const password = document.querySelector('#password');

    if (togglePassword) {
        togglePassword.addEventListener('click', function (e) {
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }

    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (e) {
            const email = document.querySelector('#email-address');
            const password = document.querySelector('#password');
            let messages = [];

            if (email.value === '' || email.value == null) {
                messages.push('ایمیل یا نام کاربری الزامی است');
            }

            if (password.value.length < 8) {
                messages.push('رمز عبور باید حداقل 8 کاراکتر باشد');
            }

            if (messages.length > 0) {
                e.preventDefault();
                alert(messages.join('\n'));
            }
        });
    }

    // Charts
    const salesChart = new Chart(document.getElementById('sales-chart'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Sales',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        }
    });

    const usersChart = new Chart(document.getElementById('users-chart'), {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Users',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        }
    });
});
