import React, { useState } from 'react';

function Online() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handlePayment = async (e) => {
    e.preventDefault();

    const paymentDetails = {
      cardNumber,
      expiryDate,
      cvv,
      amount,
    };

    try {
      const response = await fetch('https://your-api-endpoint.com/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentDetails),
      });

      if (response.ok) {
        setMessage('Payment successful!');
      } else {
        setMessage('Payment failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Online Payment</h2>
      <form onSubmit={handlePayment}>
        <div>
          <label>Card Number:</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Expiry Date:</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
            required
          />
        </div>
        <div>
          <label>CVV:</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
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
        <button type="submit">Pay Now</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Online;
