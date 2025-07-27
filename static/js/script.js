document.addEventListener('DOMContentLoaded', function () {
    const togglePassword = document.querySelector('#toggle-password');
    const password = document.querySelector('#password');

    if (togglePassword) {
        togglePassword.addEventListener('click', function (e) {
            // toggle the type attribute
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
            // toggle the eye / eye-slash icon
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

    // Framer Motion Animation
    const {
        motion
    } = window.framerMotion;
    const formContainer = document.querySelector('.w-full.max-w-md');
    motion(formContainer, {
        initial: {
            opacity: 0,
            y: -20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.5
        }
    });

    const logo = document.querySelector('img');
    motion(logo, {
        initial: {
            scale: 1
        },
        animate: {
            scale: 1.05
        },
        transition: {
            duration: 1,
            repeat: Infinity,
            repeatType: 'reverse'
        }
    });
});
