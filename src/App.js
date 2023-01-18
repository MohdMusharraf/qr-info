import './App.css';
import React, {useState} from 'react';

function App() {

  const [user, setUser] = useState({
    name: '',
    enail: '',	
    twitter: '',
    linkedin: '',
    github: '',
  });

  let name;
  let value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]: value});
  }

  const PostData = async (e) => {
    e.preventDefault();

    const {name, email, twitter, linkedin, github} = user;

    const res = await fetch('/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, twitter, linkedin, github
      })
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successful");
      
    }
    setUser({name: '',email: '', twitter: '', linkedin: '', github: ''});
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>QR-INFO</h1>
        <div className="form">
        <form method="POST">
          <input type="text" name="name" placeholder="Enter Name"
            value={user.name}
            onChange={handleInputs}
          />
          <input type="text" name='email' placeholder="Enter Email"
            value={user.email}
            onChange={handleInputs}
          />
          <input type="text" name='twitter' placeholder="Enter Twitter URL" 
            value={user.twitter}
            onChange={handleInputs}
          />
          <input type="text" name='linkedin' placeholder="Enter LinkedIn URL" 
            value={user.linkedin}
            onChange={handleInputs}
          />
          <input type="text" name='github' placeholder="Enter GitHub URL" 
            value={user.github}
            onChange={handleInputs}
          />

          <button onClick={PostData}>Generate QR</button>
        </form>
        </div>
      </header>
    </div>
  );
}

export default App;
