
<div className="ui segment">
  <h3>{`Week Forecast ${showMoDay(data[0].time)} to ${showMoDayYr(data[lastDay].time)}`}</h3>
  <p>{daily.summary}</p>

  <div className="ui styled fluid accordion">
    <div className="title">
      <i className="dropdown icon"></i>
      Weekly Data
    </div>
    <div className="content">
      <div className="ui list">
        {
          data.map(day => {
            return (
              <div key={day.time}>
                <WindDailyListItem day={day} />
              </div>
            )
          })
        }
      </div>
    </div>
  </div>
</div>






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


