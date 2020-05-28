const Time = require('./time.js');

test("sets date to current time", () => {
  let time = new Time;
  let res = time.getFuzzyTime;

  expect(time.hours).toBeGreaterThanOrEqual(1);
  expect(time.hours).toBeLessThanOrEqual(12);

  expect(time.mins).toBeGreaterThanOrEqual(0);
  expect(time.mins).toBeLessThanOrEqual(60);

  expect(res.length).toBeGreaterThan(0);
})
