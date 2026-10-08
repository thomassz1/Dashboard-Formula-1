(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const menu = document.getElementById("main-menu");

  if (!menuButton || !menu) return;

  function setMenuOpen(isOpen) {
    menu.classList.toggle("is-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  }

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuButton.focus();
    }
  });
})();

const canvas = document.getElementById("performance-chart");

if (canvas && typeof Chart === "function") {
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
}
