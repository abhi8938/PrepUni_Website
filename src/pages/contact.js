import "../css/base.css";

import React, { useEffect, useState } from "react";

import axios from "axios";

const bodyText = `This coming soon landing page is creative, but also very targeted in
          its objectives. The doodles at the top are cute,
          but the copy accompanying them is what really matters. `;
const send_request = async (email, message) => {
  const headers = {
    "Content-Type": "application/json",
  };
  const data = {
    email,
    code: message,
    type: "RESET",
  };
  return axios
    .post("http://localhost:5001/prepuni/us-central1/sendCode", data, {
      headers,
    })
    .then((response) => response)
    .catch((error) => error);
};

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("text", email, message);
  }, [email, message]);

  const sendMessage = async () => {
    //TODO: email, message should not be empty
    if (email.length < 3 || message.length < 3)
      return alert("Empty email or message");
    const response = await send_request(email, message);
    if (response.status === 200) {
      alert("your message is sent successfully");
    } else if (response.status === 201) {
      alert("Error", response.data.message);
    }
  };

  return (
    <div className={"main"}>
      <div className={"row section-container"}>
        <div className={"col"}>
          <text className={"heading"}>Sound interesting?</text>
          <text className={"sub_heading"}>Sign up for updates!</text>
          <text className={"body"}>{bodyText}</text>
        </div>
        <div className={"col card"}>
          <div className={"input_container"}>
            <text className={"section_heading"}>Your email address</text>
            <input
              className="input_text"
              name="email"
              type="email"
              placeholder="name@example.com"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className={"input_container"}>
            <text className={"section_heading"}>Interests</text>
            <input
              className="input_text"
              name="message"
              type="email"
              placeholder="Please enter your interests"
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />
          </div>
          <button className={"button"} onClick={sendMessage}>
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
