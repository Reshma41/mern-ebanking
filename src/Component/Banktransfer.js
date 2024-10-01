import React, { useState } from 'react';

function Banktransfer() {
  const [accountNumber, setAccountNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleTransfer = async (e) => {
    e.preventDefault();

    const transferDetails = {
      accountNumber,
      bankName,
      amount,
    };

    try {
      const response = await fetch('https://your-api-endpoint.com/transfer', {
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
      <h2>Bank Transfer</h2>
      <form onSubmit={handleTransfer}>
        <div>
          <label>Account Number:</label>
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Bank Name:</label>
          <input
            type="text"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            required
          />
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

export default Banktransfer;
