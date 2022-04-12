//TESTING WITH JASMINE

/****** 
Valid time input: any string with a number
****** /

//test start
//*************  Test to pass ************/
describe("getTimerTime Function Test To Pass", function () {
  it("should return only number(s) '3' extracted from a timer statement string of '3S'", function () {
    var timeIn = "3s";
    expect(getTimerTime(timeIn)).toMatch(/^[0-9]*$/);
  });

  it("should return only number(s) '1' extracted from a timer statement string of '1Min'", function () {
    var timeIn = "1Min";
    expect(getTimerTime(timeIn)).toMatch(/^[0-9]*$/);
  });

  it("should return only number(s) '10' extracted from a timer statement string of '10Min'", function () {
    var timeIn = "10Min";
    expect(getTimerTime(timeIn)).toMatch(/^[0-9]*$/);
  });

  it("should return only number(s) '15' extracted from a timer statement string of '15Min'", function () {
    var timeIn = "15Min";
    expect(getTimerTime(timeIn)).toMatch(/^[0-9]*$/);
  });

  it("should return only number(s) '30' extracted from a timer statement string of '30Min'", function () {
    var timeIn = "30Min";
    expect(getTimerTime(timeIn)).toMatch(/^[0-9]*$/);
  });

  it("should return only number(s) '1' extracted from a timer statement string of '1Hour'", function () {
    var timeIn = "1Hour";
    expect(getTimerTime(timeIn)).toMatch(/^[0-9]*$/);
  });
});

//*************  Test to fail ************/

describe("getTimerTime Function Test To Fail", function () {
  it("should return Boolean false for a timer statement string of 'One Hour'", function () {
    var timeIn = "One Hour";
    expect(getTimerTime(timeIn)).toEqual(false);
  });

  it("should return Boolean false for a string without any number -- 'World Peace'", function () {
    var timeIn = "World Peace";
    expect(getTimerTime(timeIn)).toEqual(false);
  });

  it("should return Boolean false for a timer statement string of 'timer'", function () {
    var timeIn = "timer";
    expect(getTimerTime(timeIn)).toEqual(false);
  });

  it("should return Boolean false for null", function () {
    var timeIn = null;
    expect(getTimerTime(timeIn)).toEqual(false);
  });

  it("should return Boolean false for a timer statement string started with 0: '0 Min'", function () {
    var timeIn = "0 Min";
    expect(getTimerTime(timeIn)).toEqual(false);
  });
});

//*************  Boundary Test ************/

describe("getTimerTime Function Boundary testing", function () {
  it("should return only number(s) '99999' extracted from a timer statement string of '99999 Hours'", function () {
    var timeIn = "99999 Hours";
    expect(getTimerTime(timeIn)).toMatch(/^[0-9]*$/);
  });

  it("should return ‘1’ for timer ='-1S'", function () {
    var timeIn = "-1S";
    expect(getTimerTime(timeIn)).toMatch(/^[0-9]*$/);
  });
}); //test end
