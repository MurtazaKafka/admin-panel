const ctx = document.getElementById('myChart').getContext('2d');
const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Brown'],
        datasets: [{
            label: '# Value of Stock Assets',
            data: [400, 580, -180, 250, -450, 573, -390],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(165, 42, 42, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(165, 42, 42, 1)'
            ],
            borderWidth: 3
        }]
    },
    options: {
        animation: {
            onComplete: () => {
                delayed = true;
              },
            fadeIn: {
                duration: 1000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: ["Jun", "Jul", "Aug", "Sep"],
      datasets: [{ 
          data: [947, 3002, 2700, 267],
          label: "Visited",
          borderColor: "#8e5ea2",
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          fill: false
        }, { 
          data: [1408, 547, 1175, 2234],
          label: "Logged In",
          borderColor: "#3cba9f",
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          fill: false
        }, { 
          data: [182, 172, 2312, 2433],
          label: "Active",
          borderColor: "#c45850",
          backgroundColor: 'rgba(165, 42, 42, 0.2)',
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Internet Traffic Per Region',
        label: 'Internet Traffic Per Region'
      },
      animation: {
        tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
        }
      }
      
    }

    
  });


  new Chart(document.getElementById("bubble-chart"), {
    type: 'bubble',
    data: {
      labels: "Crypto",
      datasets: [
        {
          label: ["BTC"],
          backgroundColor: "rgba(255,221,50,0.2)",
          borderColor: "rgba(255,221,50,1)",
          data: [{
            x: 275,
            y: 46,
            r: 15
          }]
        }, {
          label: ["ETH"],
          backgroundColor: "rgba(60,186,159,0.2)",
          borderColor: "rgba(60,186,159,1)",
          data: [{
            x: 101,
            y: 22,
            r: 13
          }]
        }, {
          label: ["USDT"],
          backgroundColor: "rgba(0,0,0,0.2)",
          borderColor: "#000",
          data: [{
            x: 99,
            y: 6,
            r: 15
          }]
        }, {
          label: ["USDC"],
          backgroundColor: "rgba(193,46,12,0.2)",
          borderColor: "rgba(193,46,12,1)",
          data: [{
            x: 2,
            y: 0.7,
            r: 15
          }]
        }, {
            label: ["BNB"],
            backgroundColor: "rgba(255,21,5,0.2)",
            borderColor: "rgba(255,21,5,1)",
            data: [{
              x: 200,
              y: 40,
              r: 13
            }]
          }, {
            label: ["BUSD"],
            backgroundColor: "rgba(60,186,19,0.2)",
            borderColor: "rgba(60,186,19,1)",
            data: [{
              x: 211,
              y: 32,
              r: 11
            }]
          }, {
            label: ["XPR"],
            backgroundColor: "rgba(255,100,2,0.2)",
            borderColor: "#000",
            data: [{
              x: 169,
              y: 16,
              r: 9
            }]
          }, {
            label: ["ADA"],
            backgroundColor: "rgba(193,46,12,0.2)",
            borderColor: "rgba(193,46,12,1)",
            data: [{
              x: 130,
              y: 20.7,
              r: 15
            }]
          }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }, scales: {
        yAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Happiness"
          }
        }],
        xAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "GDP (PPP)"
          }
        }]
      }
    }
});
