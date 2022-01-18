import Chart from 'chart.js/auto';

const chartCanvases = document.querySelectorAll('.chart__canvas');
chartCanvases.forEach($canvas => {
  const chart = new Chart($canvas, {
    type: 'doughnut',
    data: {
      datasets: [{
          data: [82, 16, 1, 1],
          backgroundColor: ['#1DBCDE', '#50E243', '#AA2020', '#D5B02F'],
          offset: 5,
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
})