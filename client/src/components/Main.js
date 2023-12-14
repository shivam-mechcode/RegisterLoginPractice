import React, { useEffect, useState } from 'react';
import './main.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Main() {
    const [info, setInfo] = useState({
        name: "",
        email: "",
        number: ""
    })
    const { id } = useParams()
    useEffect(() => {
        axios.get('http://localhost:3002/main/'+id)
            .then(res => setInfo({ ...info, name: res.data.name }))
            .catch(err=> console.log(err)) 
    },[])
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h2>MyApp</h2>
      </div>
      <div className="navbar-right">
        <img src="" alt="Profile" className="profile-photo" />
        <span className="profile-name">{info.name}</span>
        <button className="logout-button">Logout</button>
      </div>
    </div>
  );
}

export default Main;
