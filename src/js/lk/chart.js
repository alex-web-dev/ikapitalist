import Chart from 'chart.js/auto';

Chart.defaults.elements.bar.borderWidth = 2;
Chart.defaults.plugins.legend.align = 'start';
Chart.defaults.plugins.legend.labels.color = '#4D5A65';
Chart.defaults.plugins.legend.labels.padding = 12;
Chart.defaults.plugins.legend.labels.boxWidth = 7;
Chart.defaults.plugins.legend.labels.boxHeight = 7;
Chart.defaults.plugins.legend.labels.font = {
  size: 15
};

const simpleChartCanvases = document.querySelectorAll('.chart__canvas');
simpleChartCanvases.forEach($canvas => {
  const chart = new Chart($canvas, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [82, 16, 1, 1],
        backgroundColor: ['#1DBCDE', '#50E243', '#AA2020', '#D5B02F'],
        offset: 5,
        borderDash: [10, 5]
      }]
    },
    options: {
      layout: {
        padding: 0
      },
      cutout: 62,
      animation: false,
    }
  });
});

const analysisChartsData = [
  {
    parentClass: 'chart-branch',
    labels: ["Промышленность", "Услуги", "IT технологии"],
    data: [5333333, 5333333, 5333334],
    backgroundColor: ['#E89040', '#E937C2', '#F5C038'],
    labelsClass: 'chart-analysis__labels_branch',
    labelsParentClass: 'chart-analysis',
  },
  {
    parentClass: 'chart-purpose',
    labels: ["Развитие", "Покупка", "ЗП сотрудникам"],
    data: [5333333, 5333333, 5333334],
    backgroundColor: ['#E89040', '#E937C2', '#38C370'],
    labelsClass: 'chart-analysis__labels_purpose',
    labelsParentClass: 'chart-analysis',
  },
  {
    parentClass: 'chart-tools',
    labels: ["Займ", "Облигации", "Доля в бизнесе"],
    data: [5333333, 5333333, 5333334],
    backgroundColor: ['#1DBCDE', '#C74FE4', '#E44F4F'],
    labelsClass: 'chart-analysis__labels_tools',
    labelsParentClass: 'chart-analysis',
  },
  {
    parentClass: 'chart-deals',
    labels: ["Активных", "Реструктуризация", "В просрочке", "В дефолте", "Завершенных"],
    data: [12, 3, 1, 0, 4],
    backgroundColor: ['#38C370', '#379CD4', '#E1AB1F', '#E44F4F', '#C74FE4'],
    labelsClass: 'chart-deals__labels',
    labelsParentClass: 'chart-deals',
    showValue: true
  },
];

analysisChartsData.forEach(chartData => {
  const $chartCanvas = document.querySelector(`.${chartData.parentClass}`);

  if ($chartCanvas) {
    const chart = new Chart($chartCanvas, {
      type: 'doughnut',
      data: {
        labels: chartData.labels,
        datasets: [{
          data: chartData.data,
          backgroundColor: chartData.backgroundColor,
          offset: 5,
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            boxPadding: 5
          }
        },
        layout: {
          padding: {
            left: 20,
            right: 20,
          },
        },
        cutout: 67,
        animation: false,
      },
      plugins: [{
        beforeInit: function (chart, args, options) {
          if (chart.canvas.classList.contains(chartData.parentClass)) {
            const ul = document.createElement('ul');
            ul.className = `${chartData.labelsParentClass}__labels-list`;
    
            chart.data.labels.forEach((label, i) => {
              let $value = `<span class="chart-deals__label-value">${ chart.data.datasets[0].data[i] }</span>`;

              ul.innerHTML += `
                <li class="${chartData.labelsParentClass}__label">
                  <span class="${chartData.labelsParentClass}__label-point" style="background-color: ${ chart.data.datasets[0].backgroundColor[i] }">
                  </span>
                  <span class="${chartData.labelsParentClass}__label-name">${label}</span>
                  ${chartData.showValue ? $value : ''}
                </li>
              `;
            });
    
            return document.querySelector(`.${chartData.labelsClass}`).appendChild(ul);
          }
          
          return;
        }
      }]
    });
  }
});

const $forecastChart = document.querySelector('.chart-forecast');
if ($forecastChart) {
  const chartForecast = new Chart($forecastChart, {
    type: 'line',
    data: {
      labels: ['1 окт.', '2 окт.', '3 окт.', 'Вчера', 'Сегодня', 'Завтра'],
      color: '#ffffff',
      datasets: [{
        data: [0, 120000, 200000, 500000, 421934, 530000],
        color: '#ffffff',
        borderColor: '#ffffff',
        pointBackgroundColor: '#ffffff',
        pointHoverBackgroundColor: '#ffffff',
        pointHoverBorderColor: '#ffffff',
        pointHoverBorderWidth: 20,
        borderWidth: 3,
        hoverBorderWidth: 25,
        fill: {
          target: 'origin',
          above: 'rgb(255, 255, 255, 0.1)',
          below: 'rgb(255, 255, 255, 0.1)',
        }
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          padding: {
            top: 12,
            right: 16,
            bottom: 12,
            left: 12
          },
          backgroundColor: '#ffffff',
          titleColor: 'rgba(60, 60, 67, 0.6)',
          titleAlign: 'right',
          rtl: true,
          bodyColor: '#112E49',
          xAlign: 'center',
          yAlign: 'bottom',
          footerColor: '#112E49',
          caretPadding: 20,
          caretSize: 8,
          bodyAlign: 'center',
          bodyFont: {
            size: 24,
            weight: 700
          }
        }
      },
      scales: {
        y: {
          max: 1400000,
          beginAtZero: true,
          weight: 2,
          ticks: {
            color: 'rgba(255, 255, 255, 0.5)',
            font: {
              size: 14
            }
          }
        },
        x: {
          ticks: {
            color: 'rgba(255, 255, 255, 0.5)',
            font: {
              size: 14
            }
          }
        },
      },
      animation: false,
      elements: {
        line: {
          tension: 0.5
        }
      }
    }
  });
}