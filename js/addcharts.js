Chart.defaults.global.defaultFontColor = 'white';

window.onresize = () => reSize();

// Change chart font size depending on the window width.
function reSize() {
  if (window.innerWidth < 1023) {
    Chart.defaults.global.defaultFontSize = 12;
  }

  if (window.innerWidth >= 1024) {
    Chart.defaults.global.defaultFontSize = 14;
  }

  if (window.innerWidth >= 1200) {
    Chart.defaults.global.defaultFontSize = 17;
  }
};

reSize();

var firstChart = document.querySelector("#firstChart").getContext('2d');
var ctx2 = document.getElementById("dailyTraffic").getContext('2d');
var ctx3 = document.getElementById("mobileDoughnut").getContext('2d');

var chartOne = new Chart(firstChart, {
    type: 'line',
    data: {
        datasets: [{
            data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
            lineTension: 0,
            backgroundColor: 'rgba(116, 119, 191, 0.3)',
            borderColor: 'rgba(116, 119, 191,1)',
            pointBackgroundColor: 'black',
            pointBorderWidth: 1.8,
            pointRadius: 4,
            pointHoverBorderColor: 'rgba(116, 119, 191,0.7)',
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
              gridLines: {
                  color: 'rgba(255, 255, 255, .2)'
              },
              type: 'category',
              labels: ["1-4", "5-9", "10-14", "15-19", "20-24", "25-29", "30-34", "35-39", "40-44", "45-49", "50-52"]
            }],
            yAxes: [{
                gridLines: {
                    color: 'rgba(255, 255, 255, .2)'
                },
                ticks: {
                    beginAtZero:false,
                    maxTicksLimit: 5,
                    min: 500,
                    max: 2500,
                    stepSize: 500,
                    stacked: true
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
            backgroundColor: 'rgba(116, 119, 191, 0.8)',
            hoverBackgroundColor: 'rgba(116, 119, 191, 1)',
            borderColor: 'rgba(116, 119, 191,1)',
            borderWidth: 0.5
        }]
    },
    options: {
        legend: {
          display: false
        },
        scales: {
            xAxes: [{
                gridLines: {
                    color: 'rgba(255, 255, 255, .3)'
            }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: 50,
                    max: 300,
                    min: 0
                },
                gridLines: {
                    color: 'rgba(255, 255, 255, .3)'
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
            backgroundColor: ['rgba(116, 119, 191, 0.7)',
                              'rgba(129, 201, 143, 0.7)',
                              'rgba(116, 177, 191, 0.7)'
                             ],
            hoverBackgroundColor: ['rgba(116, 119, 191, 0.9)',
                                   'rgba(129, 201, 143, 0.9)',
                                   'rgba(116, 177, 191, 0.9)'
                                 ],
            borderWidth: 0
        }]
    },
    options: {
        legend: {
          display: true,
          position: 'right'
        },
        rotation: -25
    }
});


const hour = document.querySelector("#hour3");
const day = document.querySelector("#day3");
const week = document.querySelector("#week3");
const month = document.querySelector("#month3");
const clickMenu = document.querySelector(".switch-toggle");

clickMenu.addEventListener("click", (event) => {

  if(event.target.tagName == "INPUT") {
    if(hour.checked) {

        chartOne.destroy();
        chartOne = new Chart(firstChart, {
            type: 'line',
            data: {
                datasets: [{
                    data: [10, 10, 60, 30, 10, 10, 50, 20, 15, 19, 10, 28, 40, 70, 50, 20, 17, 10, 11, 20, 15, 23, 24, 25],
                    lineTension: 0,
                    backgroundColor: 'rgba(116, 119, 191, 0.3)',
                    borderColor: 'rgba(116, 119, 191,1)',
                    pointBackgroundColor: 'black',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverBorderColor: 'rgba(116, 119, 191,0.7)',
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
                      gridLines: {
                          color: 'rgba(255, 255, 255, .2)'
                      },
                      type: 'category',
                      labels: ["00:00 AM", "01:00 AM", "02:00 AM", "03:00 AM", "04:00 AM", "05:00 AM", "06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "13:00 PM", "14:00 PM", "15:00 PM", "16:00 PM", "17:00 PM", "18:00 PM", "19:00 PM", "20:00 PM", "21:00 PM", "22:00 PM", "23:00 PM"],
                    }],
                    yAxes: [{
                        gridLines: {
                            color: 'rgba(255, 255, 255, .2)'
                        },
                        ticks: {
                            beginAtZero:true,
                            min: 0,
                            max: 300,
                            stepSize: 50,
                            stacked: true
                        }
                    }]
                }
            }
        });
    }

    if(day.checked) {
      chartOne.destroy();

      chartOne = new Chart(firstChart, {
          type: 'line',
          data: {
              datasets: [{
                  data: [100, 175, 125, 225, 205, 105, 75],
                  lineTension: 0,
                  backgroundColor: 'rgba(116, 119, 191, 0.3)',
                  borderColor: 'rgba(116, 119, 191,1)',
                  pointBackgroundColor: 'black',
                  pointBorderWidth: 1.8,
                  pointRadius: 4,
                  pointHoverBorderColor: 'rgba(116, 119, 191,0.7)',
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
                    gridLines: {
                        color: 'rgba(255, 255, 255, .2)'
                    },
                    type: 'category',
                    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  }],
                  yAxes: [{
                      gridLines: {
                          color: 'rgba(255, 255, 255, .2)'
                      },
                      ticks: {
                          beginAtZero:true,
                          min: 0,
                          max: 300,
                          stepSize: 50,
                          stacked: true
                      }
                  }]
              }
          }
      });
    }

    if(week.checked) {

        chartOne.destroy();

        chartOne = new Chart(firstChart, {
            type: 'line',
            data: {
                datasets: [{
                    data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
                    lineTension: 0,
                    backgroundColor: 'rgba(116, 119, 191, 0.3)',
                    borderColor: 'rgba(116, 119, 191,1)',
                    pointBackgroundColor: 'black',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverBorderColor: 'rgba(116, 119, 191,0.7)',
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
                      gridLines: {
                          color: 'rgba(255, 255, 255, .2)'
                      },
                      type: 'category',
                      labels: ["1-4", "5-9", "10-14", "15-19", "20-24", "25-29", "30-34", "35-39", "40-44", "45-49", "50-52"],
                    }],
                    yAxes: [{
                        gridLines: {
                            color: 'rgba(255, 255, 255, .2)'
                        },
                        ticks: {
                            beginAtZero:false,
                            maxTicksLimit: 5,
                            min: 500,
                            max: 2500,
                            stepSize: 500,
                            stacked: true
                        }
                    }]
                }
            }
        });
    }

    if(month.checked) {
        chartOne.destroy();

        chartOne = new Chart(firstChart, {
            type: 'line',
            data: {
                datasets: [{
                    data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 1000],
                    lineTension: 0,
                    backgroundColor: 'rgba(116, 119, 191, 0.3)',
                    borderColor: 'rgba(116, 119, 191,1)',
                    pointBackgroundColor: 'black',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverBorderColor: 'rgba(116, 119, 191,0.7)',
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
                      gridLines: {
                          color: 'rgba(255, 255, 255, .2)'
                      },
                      type: 'category',
                      labels: ["January", "Febuary", "Mars", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    }],
                    yAxes: [{
                        gridLines: {
                            color: 'rgba(255, 255, 255, .2)'
                        },
                        ticks: {
                            beginAtZero:true,
                            min: 0,
                            max: 2500,
                            stepSize: 500,
                            stacked: true
                        }
                    }]
                }
            }
        });
    }
  }

});
