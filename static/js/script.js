const chartData = {
    daily: {
        labels: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه'],
        activity: [12, 19, 3, 5, 2, 3, 9],
        income: [100, 150, 80, 120, 90, 110, 130],
        scans: [20, 30, 15, 25, 18, 22, 28],
    },
    weekly: {
        labels: ['هفته اول', 'هفته دوم', 'هفته سوم', 'هفته چهارم'],
        activity: [50, 60, 45, 70],
        income: [500, 600, 450, 700],
        scans: [100, 120, 90, 140],
    },
    monthly: {
        labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
        activity: [300, 400, 350, 500, 450, 600],
        income: [3000, 4000, 3500, 5000, 4500, 6000],
        scans: [600, 800, 700, 1000, 900, 1200],
    }
};

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
    const createChart = (ctx, type, labels, data, label, borderColor, backgroundColor) => {
        return new Chart(ctx, {
            type: type,
            data: {
                labels: labels,
                datasets: [{
                    label: label,
                    data: data,
                    fill: false,
                    borderColor: borderColor,
                    backgroundColor: backgroundColor,
                    tension: 0.1
                }]
            }
        });
    };

    const activityCtx = document.getElementById('activityChart')?.getContext('2d');
    const incomeCtx = document.getElementById('incomeChart')?.getContext('2d');
    const scanCtx = document.getElementById('scanChart')?.getContext('2d');

    let activityChart, incomeChart, scanChart;

    if (activityCtx && incomeCtx && scanCtx) {
        activityChart = createChart(activityCtx, 'line', chartData.daily.labels, chartData.daily.activity, 'میزان فعالیت', '#2563EB');
        incomeChart = createChart(incomeCtx, 'bar', chartData.daily.labels, chartData.daily.income, 'میزان درآمد', '#F97316', '#F97316');
        scanChart = createChart(scanCtx, 'line', chartData.daily.labels, chartData.daily.scans, 'میزان اسکن‌شده', '#8B5CF6');

        const updateCharts = (period) => {
            activityChart.data.labels = chartData[period].labels;
            activityChart.data.datasets[0].data = chartData[period].activity;
            activityChart.update();

            incomeChart.data.labels = chartData[period].labels;
            incomeChart.data.datasets[0].data = chartData[period].income;
            incomeChart.update();

            scanChart.data.labels = chartData[period].labels;
            scanChart.data.datasets[0].data = chartData[period].scans;
            scanChart.update();
        };

        document.querySelectorAll('select').forEach(select => {
            select.addEventListener('change', (e) => {
                updateCharts(e.target.value);
            });
        });
    }
});
