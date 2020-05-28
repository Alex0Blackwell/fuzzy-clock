const Time = require('./time.js');

main = () => {
  let el = document.getElementById("time")
  let time = new Time;
  el.innerHTML = time.getFuzzyTime;

  // since this is fuzzy time it's ok if we're off by a minute
  setInterval(function() {
    time = new Time;
    el.innerHTML = time.getFuzzyTime;
    console.log("second");
  }, 60000);
}


main()
