function secondsToMinutes(seconds){
    return (seconds / 60) ;
}

function minutesToHours(minutes){
    return Math.floor((minutes / 60));
}

let minutos = secondsToMinutes(1020);
console.log(minutos);