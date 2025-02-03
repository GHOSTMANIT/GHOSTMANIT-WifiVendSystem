document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.href = "login.html";
});

document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelectorAll('.content > div').forEach(div => div.classList.add('hidden'));
    document.querySelector(this.getAttribute('href')).classList.remove('hidden');
  });
});

const dailySalesCtx = document.getElementById('dailySalesChart').getContext('2d');
const overallSalesCtx = document.getElementById('overallSalesChart').getContext('2d');

const dailySalesChart = new Chart(dailySalesCtx, {
  type: 'line',
  data: {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
      label: 'Daily Sales',
      data: [12, 19, 3, 5, 2, 3, 7],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderWidth: 2,
      fill: true,
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const overallSalesChart = new Chart(overallSalesCtx, {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Overall Sales',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
