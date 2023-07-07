import React, { useState, useEffect, useRef } from "react";
import "./Timeline.scss";
import { PortableText } from "@portabletext/react";

const Timeline = ({ setObserver,  blocks, title }) => {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");
  const [message4, setMessage4] = useState("");
  const [message5, setMessage5] = useState("");
  const [message6, setMessage6] = useState("");
  const [message7, setMessage7] = useState("");
  const [message8, setMessage8] = useState("");
  const [description1, setDescription1] = useState("");
  const [description2, setDescription2] = useState("");
  const [description3, setDescription3] = useState("");
  const [description4, setDescription4] = useState("");
  const [description5, setDescription5] = useState("");
  const [description6, setDescription6] = useState("");
  const [description7, setDescription7] = useState("");
  const [description8, setDescription8] = useState("");


  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const timeline4 = useRef(null);
  const timeline5 = useRef(null);
  const timeline6 = useRef(null);
  const timeline7 = useRef(null);
  const timeline8 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circle4 = useRef(null);
  const circle5 = useRef(null);
  const circle6 = useRef(null);
  const circle7 = useRef(null);
  const circle8 = useRef(null);


  const someCallback = () => {
    setMessage1(blocks[0].title);
    setDescription1(blocks[0]._rawContent);
    // callback();
  };

  const someCallback2 = () => {
    setMessage2(blocks[1].title);
    setDescription2(blocks[1]._rawContent);
  };

  const someCallback3 = () => {
    setMessage3(blocks[2].title);
    setDescription3(blocks[2]._rawContent);
  };
  const someCallback4 = () => {
    setMessage4(blocks[3].title);
    setDescription4(blocks[3]._rawContent);
  };
  const someCallback5 = () => {
    setMessage5(blocks[4].title);
    setDescription5(blocks[4]._rawContent);
  };
  const someCallback6 = () => {
    setMessage6(blocks[5].title);
    setDescription6(blocks[5]._rawContent);
  };
  const someCallback7 = () => {
    setMessage7(blocks[6].title);
    setDescription7(blocks[6]._rawContent);
  };
  const someCallback8 = () => {
    setMessage8(blocks[7].title);
    setDescription8(blocks[7]._rawContent);
  };


  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(timeline4.current);
    setObserver(timeline5.current);
    setObserver(timeline6.current);
    setObserver(timeline7.current);
    setObserver(timeline8.current);
    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
    setObserver(circle4.current, someCallback4);
    setObserver(circle5.current, someCallback5);
    setObserver(circle6.current, someCallback6);
    setObserver(circle7.current, someCallback7);
    setObserver(circle8.current, someCallback8);
  }, []);

  return (
    <div className="wrapper container">
      <div className="absolute-div">
        <h4 className="sticky-div">{title}</h4>
      </div>
      <div id="timeline1" ref={timeline1} className="timeline1" />
      <div className="circleWrapper">
        <div id="circle1" ref={circle1} className="circle">
          1
        </div>
        <div className="message body-large">
          {message1} <PortableText value={description1} />
        </div>
      </div>
      <div id="timeline2" ref={timeline2} className="timeline" />
      <div className="circleWrapper">
        <div id="circle2" ref={circle2} className="circle">
          2
        </div>
        <div className="message body-large">
          {message2}
          <PortableText value={description2} />
        </div>
      </div>
      <div id="timeline3" ref={timeline3} className="timeline" />
      <div className="circleWrapper">
        <div id="circle3" ref={circle3} className="circle">
          3
        </div>
        <div className="message body-large">
          {message3} <PortableText value={description3} />
        </div>
      </div>
      <div id="timeline4" ref={timeline4} className="timeline" />
      <div className="circleWrapper">
        <div id="circle4" ref={circle4} className="circle">
          4
        </div>
        <div className="message body-large">
          {message4} <PortableText value={description4} />
        </div>
      </div>
      <div id="timeline5" ref={timeline5} className="timeline" />
      <div className="circleWrapper">
        <div id="circle5" ref={circle5} className="circle">
          5
        </div>
        <div className="message body-large">
          {message5} <PortableText value={description5} />
        </div>
      </div>
      <div id="timeline6" ref={timeline6} className="timeline" />
      <div className="circleWrapper">
        <div id="circle6" ref={circle6} className="circle">
          6
        </div>
        <div className="message body-large">
          {message6} <PortableText value={description6} />
        </div>
      </div>
      <div id="timeline7" ref={timeline7} className="timeline" />
      <div className="circleWrapper">
        <div id="circle7" ref={circle7} className="circle">
          7
        </div>
        <div className="message body-large">
          {message7} <PortableText value={description7} />
        </div>
      </div>
      <div id="timeline8" ref={timeline8} className="timeline" />
      <div className="circleWrapper">
        <div id="circle8" ref={circle8} className="circle">
          8
        </div>
        <div className="message body-large">
          {message8}
          <PortableText value={description8} />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
