const navlinks = document.querySelector(".nav-links");

function onToggleMenu(e) {
  e.name = e.name === "close" ? "menu" : "close";
  navlinks.classList.toggle("top-[6%]");
}

function togglemenu(event) {
  const nav = document.querySelector(".navs");
  event.name = event.name === "close" ? "menu" : "close";
  nav.classList.toggle("left-[-100%]");
  nav.classList.toggle("top-[6%]");
}

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});