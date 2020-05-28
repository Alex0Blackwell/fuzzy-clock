/* makes fuzzy time */
class Time {
  constructor() {
    this.date = new Date();
  }

  /** gets the fuzzy time, this means: n o'clock, quarter past, half past,
   * quarter to */
  get getFuzzyTime() {
    this.hours = this.date.getHours();
    this.mins = this.date.getMinutes();

    let res = "";

    if(this.mins < 7)
      res = `${this.hours} O'clock`;
    else if(this.mins < 22)
      res = `Quarter past ${this.hours}`;
    else if(this.mins < 37)
      res = `Half past ${this.hours}`;
    else if(this.mins < 52)
      res = `Quarter to ${this.hours+1}`;
    else if(this.mins <= 60)
      res = `${this.hours+1} O'clock`

    return res;
  }
}

module.exports = Time;
