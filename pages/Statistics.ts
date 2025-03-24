import { Chart, registerables } from 'chart.js';

// Register all the required Chart.js components
Chart.register(...registerables);

export function renderStatistics(): void {
  const app = document.getElementById("app");
  if (app) {
    app.innerHTML = `
      <h1>Visitor Statistics</h1>
      <canvas id="statsChart" width="400" height="200"></canvas>
    `;
    const ctx = (document.getElementById("statsChart") as HTMLCanvasElement).getContext("2d");
    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May'],
          datasets: [{
            label: 'Visitors',
            data: [50, 75, 150, 100, 200],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: { beginAtZero: true }
          }
        }
      });
    }
  }
}
