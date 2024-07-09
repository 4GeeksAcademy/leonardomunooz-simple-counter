let seconds = 0;
let counterMinutes = 0;
let counterHours = 0;
let counterDays = 0;


seconds++;
 if (seconds === 10) { 
   
    counterMinutes = counterMinutes + 1;
    seconds = 0;
  }
  if (counterMinutes === 10) {
    counterHours = counterHours + 1;
    counterMinutes = 0;
  }
  if (counterHours === 10) {
    counterDays = counterDays + 1;
    counterHours = 0;
  }
//   console.log(`${counterHours}:${counterMinutes}: ${seconds}`);


export {seconds,counterMinutes,counterHours,counterDays};