/**
 * CRM Dashboard Charts
 */
if (typeof echarts !== 'undefined') {
    // === CRM PIPELINE CHART ===
    const $pipelineDom = $('#pipelineChart');
    if ($pipelineDom.length) {
        const pipelineChart = echarts.init($pipelineDom[0]);
        const pipelineOption = {
            tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
            grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
            xAxis: { type: 'value', boundaryGap: [0, 0.01] },
            yAxis: { type: 'category', data: ['Proposal', 'Negotiation', 'Contact', 'New Lead'] },
            series: [{
                type: 'bar',
                data: [420, 580, 890, 1200],
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        { offset: 0, color: '#006fee' },
                        { offset: 1, color: '#00d4ff' }
                    ]),
                    borderRadius: [0, 4, 4, 0]
                }
            }]
        };
        pipelineChart.setOption(pipelineOption);
        $(window).on('resize', () => pipelineChart.resize());
    }

    // === CRM LEAD SOURCE CHART ===
    const $leadSourceDom = $('#leadSourceChart');
    if ($leadSourceDom.length) {
        const leadSourceChart = echarts.init($leadSourceDom[0]);
        const leadSourceOption = {
            tooltip: { trigger: 'item' },
            series: [{
                name: 'Source',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: { borderRadius: 10, borderColor: '#fff', borderWidth: 2 },
                label: { show: false, position: 'center' },
                emphasis: { label: { show: true, fontSize: '18', fontWeight: 'bold' } },
                data: [
                    { value: 1048, name: 'Google' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Ads' }
                ]
            }]
        };
        leadSourceChart.setOption(leadSourceOption);
        $(window).on('resize', () => leadSourceChart.resize());
    }
}
