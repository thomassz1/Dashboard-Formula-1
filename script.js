
  const canvas = document.getElementById("performance-chart");

  new Chart(canvas, {
    type: "line",

    data: {
      labels: ["BHR", "SAU", "AUS", "JPN",
               "CHN", "MIA", "EMI", "MON",
               "CAN", "ESP", "AUT", "GBR"
],

      datasets: [{
        label: "Pontos (exemplo)",
        data: [12, 15, 18, 19, 20, 20, 19, 16, 18, 16, 18, 21],
        borderColor: "#ff1e2d",
        backgroundColor: "#ff1e2d",
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6
      }]
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
            display: false
        }
      },

      scales: {
        x: {
            ticks: {
                color: "#afb4be"
            },
            grid: {
                color: "#24272d"
            }
        },
        
        y: {
          min: 0,
          max: 25,

          afterBuildTicks: function(eixo) {
            eixo.ticks = [
                {value: 0},
                {value: 6},
                {value: 12},
                {value: 18},
                {value: 25}
            ];
          },
          ticks: {
            color: "#afb4be",
            autoSkip: false
          },
          
          grid: {
            color: "#24272d"
          }
        }
      }
    }
  });