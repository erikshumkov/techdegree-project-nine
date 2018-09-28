var ctx = document.getElementById("areaChart").getContext('2d');
var ctx2 = document.getElementById("dailyTraffic").getContext('2d');
var ctx3 = document.getElementById("mobileDoughnut").getContext('2d');

var areaChartTraffic = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
            lineTension: 0,
            backgroundColor: 'rgba(116, 119, 191, 0.3)',
            borderColor: 'rgba(116, 119, 191,1)',
            pointBackgroundColor: 'white',
            pointBorderWidth: 1.5,
            borderWidth: 0.5
        }]
    },
    options: {
        legend: {
          display: false,
        },
        plugins: {
            filler: {
                propagate: true
            }
        },
        scales: {
            xAxes: [{
              type: 'category',
              labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
            }],
            yAxes: [{
                ticks: {
                    beginAtZero:false,
                    maxTicksLimit: 5,
                    min: 250,
                    max: 2500,
                    stepSize: 500
                }
            }]
        }
    }
});

var dailyTrafficChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            data: [75, 100, 175, 125, 225, 205, 105],
            lineTension: 0,
            backgroundColor: 'rgba(116, 119, 191, 1)',
            borderColor: 'rgba(116, 119, 191,1)',
            borderWidth: 0.5
        }]
    },
    options: {
        legend: {
          display: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var mobileDoughnutChart = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ["Desktop", "Tablets", "Phones"],
        datasets: [{
            data: [65, 18, 17],
            lineTension: 0,
            backgroundColor: ['rgba(116, 119, 191, 1)',
                              'rgba(129,201,143,1)',
                              'rgba(116,177,191,1)'
                             ],
            borderColor: ['rgba(116, 119, 191, 1)',
                          'rgba(129,201,143,1)',
                          'rgba(116,177,191,1)'
                         ],
            borderWidth: 0.5
        }]
    },
    options: {
        legend: {
          display: true,
          position: 'right'
        }
    }
});
