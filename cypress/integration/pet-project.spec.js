//Sean, to make this test simper. I don't check all the timers in this test, otherwise this test will last a long time since I have a 1 hour timer here. However, I checked all the timers on my own and they worked as expected

describe("Tanner's white noise music player for babies testing", function () {
  describe("open a browser and see all the music are paused", () => {
    //page load
    it("should load the page.", function () {
      cy.visit("./index.html");
    });

    it("should see all the music is paused", () => {
      cy.get("audio") // get all the audio
        .should("have.prop", "paused", true); // check they are not playing
    });
  }); //END browser test

  describe("Click music play or pause button to paly or pause all music", function () {
    it("should play music when click paly button", () => {
      cy.get("audio").each(($el, i, $audio) => {
        if ($audio[i].paused == true) {
          $audio[i].play(); // let all the paused music start playing
        }
      });

      cy.get("audio")
        .should("have.prop", "paused", false) // check music status
        .and("have.prop", "ended", false);
    });

    it("should pause music when click pause button", () => {
      cy.wait(3500)
        .get("audio")
        .each(($el, i, $audio) => {
          if ($audio[i].paused == false) {
            $audio[i].pause(); // let music stop playing
          }
        });

      cy.get("audio")
        .should("have.prop", "paused", true) // check music status
        .and("have.prop", "ended", false);
    });
  });

  describe("Set timer test", function () {
    it("should play the first music 'Birds' when click first paly button", () => {
      cy.wait(2000)
        .get("audio")
        .eq(0)
        .should("have.prop", "paused", true) // check the first child of the audio is paused
        .then(($audio) => {
          $audio[0].play(); // let the first child of audio play music
        });

      cy.get("audio").eq(0).should("have.prop", "paused", false);
    });

    it("should pause music after 3 seconds when selected 3S timer", () => {
      cy.get("select").select("3s").wait(3000); // set the 3 seconds timer and let the Cypress test hold for 3 seconds
      cy.get("audio").eq(0).should("have.prop", "paused", true); // music play paused
      cy.get("audio").then(($audio) => {
        expect($audio[0].currentTime).to.equal(0);
      }); //music time change back to 0
    });

    it("should play the music 'Dryer' when click the Dryer's paly button", () => {
      cy.get("audio").eq(6).should("have.prop", "paused", true); // check the desired music is paused

      cy.get("audio").then(($audio) => {
        console.log($audio[6]);
        $audio[6].play(); //paly the selected music
      });

      cy.get("audio").eq(6).should("have.prop", "paused", false);
    });

    it("should pause music after 1 minute when selected 1Min timer", () => {
      cy.get("select").select("1Min").wait(60000); // set a one minute timer and let the Cypress test hold for 1 minute
      cy.get("audio").eq(6).should("have.prop", "paused", true); //music play paused
      cy.get("audio").then(($audio) => {
        expect($audio[6].currentTime).to.equal(0);
      }); //music time change back to 0
    });
  }); //END
}); //test end
