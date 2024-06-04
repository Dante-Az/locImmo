import React, { useState } from 'react';

function SignupForm() {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = event => {
    event.preventDefault();

    const newErrors = {};

    if (!username) newErrors.username = 'Username is required.';
    if (!firstName) newErrors.firstName = 'First name is required.';
    if (!lastName) newErrors.lastName = 'Last name is required.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // If there are no errors, submit the form...
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        {errors.username && <p>{errors.username}</p>}
      </label>
      <label>
        First Name:
        <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
        {errors.firstName && <p>{errors.firstName}</p>}
      </label>
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
        {errors.lastName && <p>{errors.lastName}</p>}
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignupForm;