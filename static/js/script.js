document.addEventListener('DOMContentLoaded', function () {
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

    // Charts
    const activityChartCtx = document.getElementById('activityChart');
    if(activityChartCtx) {
        new Chart(activityChartCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'میزان فعالیت',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#2563EB',
                    tension: 0.1
                }]
            }
        });
    }

    const incomeChartCtx = document.getElementById('incomeChart');
    if(incomeChartCtx) {
        new Chart(incomeChartCtx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'میزان درآمد',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    backgroundColor: '#F97316',
                    borderColor: '#F97316',
                    borderWidth: 1
                }]
            }
        });
    }

    const scanChartCtx = document.getElementById('scanChart');
    if(scanChartCtx) {
        new Chart(scanChartCtx, {
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
});
