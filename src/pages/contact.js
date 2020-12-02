import React, { useEffect, useState } from "react";

import axios from "axios";

const bodyText =
  "Be the first to hear exciting news and updates from us about PrepUni.";
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
          <text className={"body"}>
            (Don't worry that's all we'll email you about)
          </text>
          <text className={"email"}>
            <span style={{ color: "#f3983e" }}>info@prep</span>
            uni.in
          </text>
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
      <text className={"copyright"}>
        Copyright Ⓒ 2020 Digital Luxe Services
      </text>
      <text className={"copyright"}>All rights reserved</text>
    </div>
  );
};

export default Contact;
