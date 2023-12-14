import React, { useState } from "react";
import "./registerStyle.css";
import axios from "axios";

const Register = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
  });
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .post('http://localhost:3002/register', value)
          .then((res) => console.log(res))
          .catch((err) => setError(err.response.data));
 }

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          // value={this.state.name}
                  onChange={(e) => { setError(''); setValue({ ...value, name: e.target.value }) }}
        />
        <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  // value={this.state.email}
                  onChange={(e) => { setError(''); setValue({ ...value, email: e.target.value }) }}
        />
        <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  // value={this.state.password}
                  onChange={(e) => { setError(''); setValue({ ...value, password: e.target.value }) }}
        />
        <input
                  type="text"
                  name="number"
                  placeholder="Number"
                  // value={this.state.number}
                  onChange={(e) => {setError(''); setValue({ ...value, number: e.target.value }) }}
              />
              {error && <div className="error-message">{error}</div>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
