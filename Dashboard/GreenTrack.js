// Chart.js setup
const ctx = document.getElementById('electricityChart').getContext('2d');
const electricityChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Electricity Usage (kWh)',
      data: [],
      borderColor: '#2e7d32',
      fill: false
    }]
  }
});

// Simulate live metrics
function simulateMetrics() {
  const electricity = (Math.random() * 100).toFixed(2);
  const water = (Math.random() * 500).toFixed(1);
  const waste = (Math.random() * 20).toFixed(1);

  document.querySelector('#electricity .value').textContent = `${electricity} kWh`;
  document.querySelector('#water .value').textContent = `${water} L`;
  document.querySelector('#waste .value').textContent = `${waste} kg`;

  electricityChart.data.labels.push(new Date().toLocaleTimeString());
  electricityChart.data.datasets[0].data.push(parseFloat(electricity));
  electricityChart.update();
}

setInterval(simulateMetrics, 5000);
simulateMetrics();

// Admin login (placeholder logic)
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;

  alert(`Logged in as ${email}`);
});