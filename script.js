setInterval(animate, 1000);

function animate() {
   let date = new Date();

   const secDiv = document.getElementById('sec');
   let sec = date.getSeconds() / 60;
   secDiv.style.transform = "rotate(" + (sec * 360) + "deg)";

   const minDiv = document.getElementById('min');
   let min = (date.getMinutes() + sec) / 60;
   minDiv.style.transform = "rotate(" + (min * 360) + "deg)";

   const hourDiv = document.getElementById('hour');
   let hour = (date.getHours() + min) / 12;
   hourDiv.style.transform = "rotate(" + (hour * 360) + "deg)";
}

animate();