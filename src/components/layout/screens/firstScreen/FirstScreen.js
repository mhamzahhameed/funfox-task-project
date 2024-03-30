import React from "react";
import "./FirstScreen.css";
import Baby from "../../../../assets/images/baby.png";
import Cloud1 from "../../../../assets/images/cloud1.png";
import Cloud2 from "../../../../assets/images/cloud2.png";
import Cloud3 from "../../../../assets/images/cloud3.png";
import Cloud4 from "../../../../assets/images/cloud4.png";
import Cloud5 from "../../../../assets/images/cloud5.png";
import Note from "../../../../assets/images/note.png";

const FirstScreen = () => {
  return (
    <div className="container-1">
      <div className="heading">
        <p>Elements of Story Writing</p>
      </div>
      <div className="first-paragraph">
        <p>
          Welcome to term 2 of Writers Club. Are you excited for this amazing
          journey?
          <br />
          Over the next week, we will be practicing the different elements of
          story writing.
          <br />
          Our aim is to make stories more interesting and exciting.
        </p>
      </div>
      <div className="second-paragraph">
        <p>
          There are <strong>five</strong> elements which make the foundation for
          story writing. An element is an essential part of something and <br />
          every fiction story has the same key elements:
        </p>
        <img src={Baby} alt="Baby" />
      </div>
      <div className="clouds">
        <img src={Cloud1} alt="text setting" id="cloud1" />
        <img src={Cloud2} alt="text character" id="cloud2" />
        <img src={Cloud3} alt="text plot" id="cloud3" />
        <img src={Cloud4} alt="text problem or conflict" id="cloud4" />
        <img src={Cloud5} alt="text resolution" id="cloud5" />
      </div>
      <div className="plane-text-2">
        <p>
          You must be familiar with some of these. If not, do not worry! we will
          cover all these elements as we go along.
        </p>
      </div>
      <div className="note">
        <img src={Note} alt="text note" />
        <p>
          For today’s lesson, we will try to understand and practicewriting <br />the
          setting for our stories.<br />The setting is an important element of every
          fiction story.
        </p>
      </div>
    </div>
  );
};

export default FirstScreen;
