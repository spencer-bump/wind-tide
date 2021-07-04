
// componentDidMount() {

export const startWeatherApiCallInterval = () => {
  const currentTime = new Date().getTime();  //current unix timestamp
  const execTime = new Date().setHours(20,0,0,0);  //API call time = today at 20:00
  let timeLeft;
  if(currentTime < execTime) {
    //it's currently earlier than 20:00
    timeLeft = execTime - currentTime;
  } else {
    //it's currently later than 20:00, schedule for tomorrow at 20:00
    timeLeft = execTime + 86400000 - currentTime
  }
  setTimeout(function() {
    setInterval(function() {

      //your code

    }, 86400000);  //repeat every 24h
  }, timeLeft);  //wait until 20:00 as calculated above
}
