import Chart from 'chart.js/auto';

fetch('https://canvasjs.com/services/data/datapoints.php')
 .then(res => res.json())
 .then(data => console.log(data));




const textEl = document.getElementById('firstHeading')

const newEl = document.createElement('div')

newEl.innerHTML = 'hello';

textEl.after(newEl);
