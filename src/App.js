import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [data, setdata] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = data;
  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/oneeyehealer/google_sheets/TwOsMmxQmtOiiMKP?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [name, email, message, new Date().toLocaleString()],
          ]),
        }
      );
      await response.json();
      setdata({ ...data, name: "", email: "", message: "" });
    } catch (error) {}
  };
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <h3>Feedback Form</h3>
          <div class="form-group">
            <label for="" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="" htmlFor="message">
              Message
            </label>
            <input
              type="text"
              className="form-control"
              name="message"
              value={message}
              onChange={handleChange}
            />
          </div>
          <div class="text-center my-3">
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </form>
      </header>
    </div>
  );
};

export default App;
