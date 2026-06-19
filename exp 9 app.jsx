import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};

    if (name.trim() === "") {
      formErrors.name = "Name is required";
    }

    if (!email.includes("@")) {
      formErrors.email = "Email is invalid";
    }

    if (password.length < 6) {
      formErrors.password =
        "Password must be at least 6 characters";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      const newUser = {
        name,
        email,
        password,
      };

      setUsers([...users, newUser]);

      setSuccess("Registration successful!");

      setName("");
      setEmail("");
      setPassword("");
      setErrors({});
    } else {
      setSuccess("");
    }
  };

  return (
    <div className="container">

      <h2>Registration Form</h2>

      {success && (
        <p className="success">
          {success}
        </p>
      )}

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Name:</label>

          <input
            type="text"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          {errors.name && (
            <p className="error">
              {errors.name}
            </p>
          )}
        </div>

        <div className="form-group">
          <label>Email:</label>

          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          {errors.email && (
            <p className="error">
              {errors.email}
            </p>
          )}
        </div>

        <div className="form-group">
          <label>Password:</label>

          <input
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          {errors.password && (
            <p className="error">
              {errors.password}
            </p>
          )}
        </div>

        <button type="submit">
          Register
        </button>

      </form>

      <h3>Registered Users</h3>

      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
