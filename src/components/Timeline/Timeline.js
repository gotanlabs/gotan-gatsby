import React, { useState, useEffect, useRef } from "react";
import "./Timeline.scss";


const Timeline = ({ setObserver, callback, blocks, title }) => {

  
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");
  const [description1, setDescription1] = useState("");
  const [description2, setDescription2] = useState("");
  const [description3, setDescription3] = useState("");

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const divRef = useRef(null);

  const someCallback = () => {
    setMessage1(blocks[0].title);
    setDescription1(blocks[0].title);
    callback();
  };

  const someCallback2 = () => {
    setMessage2(blocks[1].title);
    setDescription2(blocks[1].title);
  };

  const someCallback3 = () => {
    setMessage3(blocks[2].title);
    setDescription3(blocks[2].title);
  };

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
  }, []);

  return (
    <div className="wrapper container">
      <div ref={divRef} className="absolute-div">
        <h4 className="sticky-div">{title}</h4>
      </div>
      <div id="timeline1" ref={timeline1} className="timeline" />
      <div className="circleWrapper">
        <div id="circle1" ref={circle1} className="circle">
          1
        </div>
        <div className="message body-large">{message1}</div>
        <div className="description">{description1}</div>
      </div>
      <div id="timeline2" ref={timeline2} className="timeline" />
      <div className="circleWrapper">
        <div id="circle2" ref={circle2} className="circle">
          2
        </div>
        <div className="message body-large">{message2}</div>
        <div className="description">{description2}</div>
      </div>
      <div id="timeline3" ref={timeline3} className="timeline" />
      <div className="circleWrapper">
        <div id="circle3" ref={circle3} className="circle">
          3
        </div>
        <div className="message body-large">{message3}</div>
        <div className="description">{description3}</div>
      </div>
    </div>
  );
};


export default Timeline;
