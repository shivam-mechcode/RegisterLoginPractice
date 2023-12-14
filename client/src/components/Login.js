import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [details, setDetails] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3002/login", details)
            .then(res => { const id = res.data.id; navigate('/main/'+id) })
            .catch(err=> console.log(err))
    }

  return (
    <div className="register-container">
          <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          // value={this.state.email}
            onChange={e => setDetails({...details, email: e.target.value})}
          
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          // value={this.state.password}
          onChange={e => setDetails({...details, password: e.target.value})}
          
        />
        
        {/* {error && <div className="error-message">{error}</div>} */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
