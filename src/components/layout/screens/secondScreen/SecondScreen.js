import React from "react";
import "./SecondScreen.css";
import Day from "../../../../assets/images/day.png";
import Night from "../../../../assets/images/night.png";
import ClockHome from "../../../../assets/images/clockhome.png";
import Clock from "../../../../assets/images/clock.png";
import Home from "../../../../assets/images/home.png";

const SecondScreen = () => {
  return (
    <div className="container-2">
      <div className="paragraph">
        <p className="text-1">
          Can you figure out the definition of setting from the following
          examples?
        </p>
        <p className="text-2">(take a minute to think about this)</p>
      </div>
      <div className="image">
        <img src={Day} alt="Sunny Day" id="day" />
        <div>
          <img src={Night} alt="Terrifying Night" id="night" />
        </div>
      </div>
      <div className="caption">
        <span id="day-caption">Sunny day at a beach</span>
        <span id="night-caption">
          A cold rainy night in a haunted house in October
        </span>
      </div>
      <div className="paragraph-2">
        <p>So, what do you think the definition of setting is?</p>
      </div>
      <div className="paragraph-3">
        <p id="quest-2">Any guesses? </p>
        <p id="para-hr">
          <hr />
        </p>
        <p id="hint">Hint:</p>
        <img src={ClockHome} alt="Clock and Home" />
      </div>
      <div className="paragraph-4">
        <p>
          Setting is the time {' '} 
          <img src={Clock} alt="Clock" /> {' '} 
          and place {' '} 
          <img src={Home} alt="Home" /> {' '} 
          of a story. It often answers the <br />
          questions: when? and where?
        </p>
      </div>
      <div className="paragraph-5">
        <p>
          The time of the story could be in the past, future, day, night, summer
          or winter. A story may take place in a school, a mall, a desert, an
          airplane or in a variety of other places.
        </p>
      </div>
    </div>
  );
};

export default SecondScreen;
