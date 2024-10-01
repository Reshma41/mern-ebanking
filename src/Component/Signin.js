/*import React, { useState } from 'react';
import Signincss from './Signin.module.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Signin() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const changefn = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const sub = async (e) => {
    e.preventDefault();

    // Basic validation to ensure fields are not empty
    if (!data.email || !data.password) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:7000/api/User/login', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response.data);

      if (response.status === 200) {
        localStorage.setItem('authid', response.data._id);
        // Uncomment if needed: localStorage.setItem('authRole', response.data.Role);
        setData({ email: '', password: '' });
        alert('Login successfully');
        navigate('/Homepage');
      }
    } catch (error) {
      console.error('Login error:', error);
      // Show specific error messages based on the response
      if (error.response) {
        const { status, data } = error.response;
        if (status === 401) {
          alert(data.message || 'Invalid email or password');
        } else {
          alert('An error occurred: ' + (data.message || 'Unknown error'));
        }
      } else {
        alert('Failed to connect to the server. Please try again later.');
      }
    }
  };

  return (
    <div className={Signincss.div}>
      <h2 className={Signincss.h2}>Signin</h2>
      <form className={Signincss.form} onSubmit={sub}>
        <div>
          <input
            className={Signincss.input}
            name="email"
            type="text"
            placeholder="Enter email"
            onChange={changefn}
            value={data.email}
            required
          />
        </div>
        <div>
          <input
            className={Signincss.input}
            name="password"
            type="password"
            placeholder="Password"
            onChange={changefn}
            value={data.password}
            required
          />
        </div>
        <button className={Signincss.button} type="submit">
          Login
        </button>
        <p>
          Don't have an account? <Link to="/Signup">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Signin;*/
import React, { useState } from 'react';
import Signincss from './Signin.module.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Signin() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const changefn = (e) => {
    const { name, value } = e.target;

    // Convert email input to lowercase
    setData({ 
      ...data, 
      [name]: name === 'email' ? value.toLowerCase() : value 
    });
  };

  /*const sub = async (e) => {
    e.preventDefault();

    // Basic validation to ensure fields are not empty
    if (!data.email || !data.password) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:7000/api/User/login', { email: data.email, password: data.password }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response.data);

      if (response.status === 200) {
        localStorage.setItem('authid', response.data._id);
        // Uncomment if needed: localStorage.setItem('authRole', response.data.Role);
        setData({ email: '', password: '' });
        alert('Login successfully');
        navigate('/Homepage');
      }
    } catch (error) {
      console.error('Login error:', error);
      // Show specific error messages based on the response
      if (error.response) {
        const { status, data } = error.response;
        if (status === 401) {
          alert(data.message || 'Invalid email or password');
        } else {
          alert('An error occurred: ' + (data.message || 'Unknown error'));
        }
      } else {
        alert('Failed to connect to the server. Please try again later.');
      }
    }
  };*/
  // Function to handle form submission
const sub = async (e) => {
  e.preventDefault();

  // Basic validation to ensure fields are not empty
  if (!data.email || !data.password) {
    alert('Please fill in all fields');
    return;
  }

  try {
    // Make a POST request to the login endpoint
    const response = await axios.post(
      'http://localhost:7000/api/User/login', 
      { email: data.email, password: data.password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('Login response:', response.data);

    // Check if the response status is OK (200)
    if (response.status === 200) {
      localStorage.setItem('authid', response.data._id);
      setData({ email: '', password: '' });
      alert('Login successfully');
      navigate('/Homepage');
    }
  } catch (error) {
    console.error('Login error:', error);
    if (error.response) {
      const { status, data } = error.response;
      if (status === 401) {
        alert(data.message || 'Invalid email or password');
      } else {
        alert('An error occurred: ' + (data.message || 'Unknown error'));
      }
    } else {
      alert('Failed to connect to the server. Please try again later.');
    }
  }
};


  return (
    <div className={Signincss.div}>
      <h2 className={Signincss.h2}>Signin</h2>
      <form className={Signincss.form} onSubmit={sub}>
        <div>
          <input
            className={Signincss.input}
            name="email"
            type="text"
            placeholder="Enter email"
            onChange={changefn}
            value={data.email}
            required
          />
        </div>
        <div>
          <input
            className={Signincss.input}
            name="password"
            type="password"
            placeholder="Password"
            onChange={changefn}
            value={data.password}
            required
          />
        </div>
        <button className={Signincss.button} type="submit">
          Login
        </button>
        <p>
          Don't have an account? <Link to="/Signup">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Signin;
