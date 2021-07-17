import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:5000";

const io = require("socket.io-client");
const socket = io("https://localhost:5000", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  }
});

function WeatherIo() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("darksky", data => {
      setResponse(data);
      // call fetch database
    });
  }, []);

  return (
    <p>
      It's {response}
    </p>
  );
}


export default WeatherIo;