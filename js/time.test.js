const Time = require('./time.js');

test("makes sure hours and minutes are valid numbers", () => {
  let time1 = new Time;
  console.log(time1.hours);

  expect(time1.hours).toBeGreaterThanOrEqual(1);
  expect(time1.hours).toBeLessThanOrEqual(12);

  expect(time1.mins).toBeGreaterThanOrEqual(0);
  expect(time1.mins).toBeLessThanOrEqual(60);
});

test("makes sure morning/afternoon is setting and returning", () => {
  let time = new Time;
  let res = time.getFuzzyTime;

  expect(res.length).toBeGreaterThan(0);
  expect(time.mornORafter.length).toBeGreaterThan(0);
});
