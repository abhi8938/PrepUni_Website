import React, { useState } from "react";

import BrandText from "../components/BrandText";
import axios from "axios";

const bodyText = `Be the first to hear exciting news and updates from us about `;
const send_request = async (email, message) => {
  const headers = {
    "Content-Type": "application/json",
  };
  const data = {
    email,
    interests: message,
  };
  return axios
    .post("https://us-central1-prepuni.cloudfunctions.net/sendEmail", data, {
      headers,
    })
    .then((response) => response)
    .catch((error) => error);
};

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [load, setLoad] = useState(false);

  const sendMessage = async () => {
    //TODO: email, message should not be empty
    if (email.length < 1 || message.length < 1)
      return alert("Empty email or message");
    setLoad(true);
    const response = await send_request(email, message);
    if (response.status === 200) {
      setEmail("");
      setMessage("");
      alert("your message is sent successfully");
    } else if (response.status === 201) {
      alert("Error", response.data.message);
    }
    setLoad(false);
  };

  return (
    <div className={"main"}>
      <div className={"row section-container"}>
        <div className={"col"}>
          <text className={"heading"}>Sound interesting?</text>
          <text className={"sub_heading"}>Sign up for updates!</text>
          <text className={"body"}>
            {bodyText}
            <BrandText />.
          </text>
          <text className={"body"}>
            (Don't worry that's all we'll email you about)
          </text>
          <text className={"email"}>
            <span style={{ color: "#000" }}>info@</span>
            <span style={{ color: "#f3983e" }}>Prep</span>
            Uni
            <span style={{ color: "#000" }}>.in</span>
          </text>
        </div>
        <div className={"col card"}>
          <div className={"input_container"}>
            <text className={"section_heading"}>Your email address</text>
            <input
              value={email}
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
              value={message}
              className="input_text"
              name="message"
              type="email"
              placeholder="Please enter your interests"
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />
          </div>
          <button
            disabled={load === true}
            className={"button"}
            onClick={sendMessage}
          >
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
