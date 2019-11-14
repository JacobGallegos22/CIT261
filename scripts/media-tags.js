const c = document.getElementById("myCanvas"); // Get the canvas
const ctx = c.getContext("2d"); // Define the context
ctx.beginPath(); //Start your draw
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
