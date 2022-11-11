fetch('https://api.jaydendev.repl.co/fact')
  .then((response) => response.json())
  .then((data) => document.getElementById("search").placeholder = data.fact);