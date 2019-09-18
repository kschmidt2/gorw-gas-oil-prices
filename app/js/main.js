// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }

// bolds the subhead if there is no headline
let subhead = document.getElementsByClassName("chart-subhead"),
    headline = document.getElementById("chart-head");
    if (!headline) {
        for(var i = 0; i < subhead.length; i++) {
            subhead[i].style.fontWeight = "600";
        }       
     }

Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const myChart = Highcharts.chart('chart-container', {
        chart: {
            type: 'line',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '1Hud66_g57ih4UP07Nis_t7MbPUg0_VSNRC8bUGNz3eY'
        },
        plotOptions: {
            series: {
                lineWidth: 1,
                // clip: false,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    fillColor: '#ffffff',
                    states: {
                        hover: {
                            fillColor: '#ffffff'
                        }
                    }
                }
            }
        },
        legend: {
            align: 'right',
            symbolRadius: 0,
            verticalAlign: 'top',
            x: 10,
            itemMarginTop: -10
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                },
            },
            tickLength: 5,
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            tickAmount: 4
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            valueDecimals: 1,
            valueSuffix: '%',
                        formatter: function() {
                var d = new Date(this.point.x); // The 0 there is the key, which sets the date to the epoch

                console.log(d, this.point.x, this.point.y);
            }
        },
        annotations: [{
            labels: [{
                point: {
                    x: 1567814400000, // timestamp
                    y: -9.857323587, // value
                    xAxis: 0, // yAxis INDEX
                    yAxis: 0 // xAxis INDEX
                },
                text: 'Attacks in <br> Saudi Arabia',
                y: -30,
                shape: 'connector',
                x: 0   
            }],
            shapes: [{
                point: {
                    x: 1567814400000, // timestamp
                    y: -9.857323587, // value
                    xAxis: 0, // yAxis INDEX
                    yAxis: 0 // xAxis INDEX
                  },
                type: 'circle',
                r: 5
            }, {
                point: {
                    x: 1567814400000, // timestamp
                    y: -20.79487179, // value
                    xAxis: 0, // yAxis INDEX
                    yAxis: 0 // xAxis INDEX
                  },
                type: 'circle',
                r: 5
            }],
        }],
        responsive: {
            rules: [{
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                chart: {
                  spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -18,
                    itemDistance: 12
                },
                tooltip: {
                    enabled: false
                },
              }
            }]
        }
    });
});