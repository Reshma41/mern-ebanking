import React, { useState } from 'react';

function Selftransfer() {
  const [fromAccount, setFromAccount] = useState('');
  const [toAccount, setToAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleTransfer = async (e) => {
    e.preventDefault();

    const transferDetails = {
      fromAccount,
      toAccount,
      amount,
    };

    try {
      const response = await fetch('https://your-api-endpoint.com/self-transfer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transferDetails),
      });

      if (response.ok) {
        setMessage('Transfer successful!');
      } else {
        setMessage('Transfer failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Self Transfer</h2>
      <form onSubmit={handleTransfer}>
        <div>
          <label>From Account:</label>
          <select
            value={fromAccount}
            onChange={(e) => setFromAccount(e.target.value)}
            required
          >
            <option value="">Select Account</option>
            <option value="savings">Savings Account</option>
            <option value="checking">Checking Account</option>
            {/* Add more account options as needed */}
          </select>
        </div>
        <div>
          <label>To Account:</label>
          <select
            value={toAccount}
            onChange={(e) => setToAccount(e.target.value)}
            required
          >
            <option value="">Select Account</option>
            <option value="savings">Savings Account</option>
            <option value="checking">Checking Account</option>
            {/* Add more account options as needed */}
          </select>
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit">Transfer</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Selftransfer;