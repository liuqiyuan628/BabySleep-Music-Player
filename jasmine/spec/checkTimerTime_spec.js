//TESTING WITH JASMINE

/****** 
Valid timers include: 3s,1Min,10Min,15Min,30Min,1Hour.
Created a 1000 hours timer, the purpose of this timer is test to fail
****** /

//test start
//*************  Test to pass ************/
describe("checkTimerTime Function Test To Pass", function () {
  it("should return '3s Timer' for timer ='3s'", function () {
    var timer = "3s";
    expect(checkTimerTime(timer)).toEqual("3s Timer");
  });

  it("should return '1 minute timer' for timer ='1Min'", function () {
    var timer = "1Min";
    expect(checkTimerTime(timer)).toEqual("1 minute timer");
  });

  it("should return '10 minutes timer' for timer ='10Min'", function () {
    var timer = "10Min";
    expect(checkTimerTime(timer)).toEqual("10 minutes timer");
  });

  it("should return '15 minutes timer' for timer ='15Min'", function () {
    var timer = "15Min";
    expect(checkTimerTime(timer)).toEqual("15 minutes timer");
  });

  it("should return '30 minutes timer' for timer ='30Min'", function () {
    var timer = "30Min";
    expect(checkTimerTime(timer)).toEqual("30 minutes timer");
  });

  it("should return '60 minutes timer' for timer ='1Hour'", function () {
    var timer = "1Hour";
    expect(checkTimerTime(timer)).toEqual("60 minutes timer");
  });
});

//*************  Test to fail ************/

describe("checkTimerTime Function Test To Fail", function () {
  it("should return Boolean false for timer ='1000Hours'", function () {
    var timer = "1000Hours";
    expect(checkTimerTime(timer)).toEqual(false);
  });

  it("should return ‘Error! No such a timer’ for timer ='8Min'", function () {
    var timer = "8Min";
    expect(checkTimerTime(timer)).toEqual("Error! No such a timer");
  });

  it("should return ‘Error! No such a timer’ for timer ='45Min'", function () {
    var timer = "45Min";
    expect(checkTimerTime(timer)).toEqual("Error! No such a timer");
  });

  it("should return ‘Error! No such a timer’ for timer ='2Hour'", function () {
    var timer = "2Hour";
    expect(checkTimerTime(timer)).toEqual("Error! No such a timer");
  });
});

//*************  Boundary Test ************/

describe("checkTimerTime Function Boundary testing", function () {
  it("should return ‘Error! No such a timer’ for timer ='2S'", function () {
    var timer = "2S";
    expect(checkTimerTime(timer)).toEqual("Error! No such a timer");
  });

  it("should return ‘Error! No such a timer’ for timer ='4S'", function () {
    var timer = "4S";
    expect(checkTimerTime(timer)).toEqual("Error! No such a timer");
  });

  it("should return ‘Error! No such a timer’ for timer ='1 Minute'", function () {
    var timer = "1 Minute";
    expect(checkTimerTime(timer)).toEqual("Error! No such a timer");
  });

  it("should return ‘Error! No such a timer’ for timer ='15 Minutes'", function () {
    var timer = "15 Minutes";
    expect(checkTimerTime(timer)).toEqual("Error! No such a timer");
  });
}); //test end
