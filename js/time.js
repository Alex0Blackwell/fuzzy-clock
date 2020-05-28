/* makes fuzzy time */
class Time {
  constructor() {
    this.date = new Date();
    this.mins = this.date.getMinutes();
    this.hrs = this.date.getHours();

    this.mornORafter = "morning";
    if(this.hrs > 12) {
      this.hrs -= 12
      this.mornORafter = "afternoon";
    }
  }

  /** gets the fuzzy time, this means: n o'clock, quarter past, half past,
   * quarter to */
  get hours() {
    return this.hrs;
  }

  get minutes() {
    return this.mins;
  }

  get getFuzzyTime() {

    let res = "";

    if(this.mins < 7)
      res = `${this.hrs} O'clock in the ${this.mornORafter}.`;
    else if(this.mins < 22)
      res = `Quarter past ${this.hrs} in the ${this.mornORafter}.`;
    else if(this.mins < 37)
      res = `Half past ${this.hrs} in the ${this.mornORafter}.`;
    else if(this.mins < 52)
      res = `Quarter to ${this.hrs+1} in the ${this.mornORafter}.`;
    else if(this.mins <= 60)
      res = `${this.hrs+1} O'clock in the ${this.mornORafter}.`

    return res;
  }
}

module.exports = Time;
