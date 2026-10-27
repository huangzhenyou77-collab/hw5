// Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
Highcharts.chart('container', {
    chart: {
        type: 'spline'
    },
    title: {
        text: '台灣 韓國2016-2025入境觀光客人入比較'
    },
    subtitle: {
        text:
            'Source: ' +
            '<a href="https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature" ' +
            'target="_blank">Wikipedia.com</a>'
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],

        accessibility: {
            description: 'Months of the year'
        },
        crosshair: true
    },
    yAxis: {
        title: {
            text: '人數'
        },
        labels: {
            format: '{value}°'
        }
    },
    tooltip: {
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [
        {
            name: '台灣',
            marker: {
                symbol: 'square'
            },
            data: [
               10690279,
               10739601,
               11066707,
               11864105,
               1377861,
               140479,
               895962,
               6486951,
               7857686,
               8574547,
                {
                    y: 26.4,
                    marker: {
                        symbol:
                            'url(https://www.highcharts.com/samples/graphics/sun.png)'
                    },
                    accessibility: {
                        description:
                            'Sunny symbol, this is the warmest point in the ' +
                            'chart.'
                    }
                },
                22.8,
                17.5,
                12.1,
                7.6
            ]
        },
        {
            name: '韓國',
            marker: {
                symbol: 'diamond'
            },
            data: [
                {
                    y: 1.5,
                    marker: {
                        symbol:
                            'url(https://www.highcharts.com/samples/graphics/snow.png)'
                    },
                    accessibility: {
                        description:
                            'Snowy symbol, this is the coldest point in the ' +
                            'chart.'
                    }
                },
               17241823,
               13335758,
               15346879,
               17502756,
               2519118,
               967003,
               3198017,
               11031665,
               16369629,
               18936562,
            ]
        }
    ]
});
