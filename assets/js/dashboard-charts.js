// Check if echarts is available
if (typeof echarts !== 'undefined') {
    // === BAR CHART ===
    const barDom = document.getElementById('barChart');
    if (barDom) {
        const barChart = echarts.init(barDom);
        const barOption = {
            tooltip: { trigger: 'axis' },
            legend: { bottom: 0 },
            xAxis: {
                type: 'category',
                data: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min']
            },
            yAxis: { type: 'value' },
            series: [
                {
                    name: 'Aktif',
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar',
                    itemStyle: { color: '#4e73df' }
                },
                {
                    name: 'Tidak Aktif',
                    data: [60, 100, 90, 40, 50, 70, 60],
                    type: 'bar',
                    itemStyle: { color: '#e74a3b' }
                }
            ]
        };
        barChart.setOption(barOption);

        // Resize chart on window resize
        window.addEventListener('resize', () => {
            barChart.resize();
        });
    }

    // === PIE CHART ===
    const pieDom = document.getElementById('pieChart');
    if (pieDom) {
        const pieChart = echarts.init(pieDom);
        const pieOption = {
            tooltip: { trigger: 'item', formatter: '{b}: {c} ({d}%)' },
            legend: { bottom: 0 },
            series: [
                {
                    name: 'Status Pelanggan',
                    type: 'pie',
                    radius: '65%',
                    center: ['50%', '50%'],
                    data: [
                        { value: 1048, name: 'Aktif' },
                        { value: 735, name: 'Tidak Aktif' },
                        { value: 580, name: 'Pending' },
                        { value: 484, name: 'Banned' },
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        pieChart.setOption(pieOption);

        // Resize chart on window resize
        window.addEventListener('resize', () => {
            pieChart.resize();
        });
    }
} else {
    console.error('ECharts library not loaded.');
}
