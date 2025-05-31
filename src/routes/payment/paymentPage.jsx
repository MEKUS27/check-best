import React, { useState } from 'react';
import './paymentPage.scss';

function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }
    if (paymentMethod === 'credit') {
      console.log('Submitted Credit Card Data:', formData);
      alert('Credit Card information submitted!');
    } else {
      console.log('Bank transfer selected. No form data needed.');
      alert('Please proceed to make the bank transfer.');
    }
  };

  return (
    <div className="paystack-payment">
      <h2>Choose Your Payment Method</h2>

      <div className="paystack-methods">
        <div
          className={`method-box ${paymentMethod === 'credit' ? 'active' : ''}`}
          onClick={() => setPaymentMethod('credit')}
        >
          <input
            type="radio"
            name="payment"
            value="credit"
            checked={paymentMethod === 'credit'}
            readOnly
          />
          <label>Pay with Credit Card</label>
        </div>

        <div
          className={`method-box ${paymentMethod === 'bank' ? 'active' : ''}`}
          onClick={() => setPaymentMethod('bank')}
        >
          <input
            type="radio"
            name="payment"
            value="bank"
            checked={paymentMethod === 'bank'}
            readOnly
          />
          <label>Pay with Bank Transfer</label>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="paystack-form">
        {paymentMethod === 'credit' && (
          <>
            <div className="bank-info-box">
                Credit Card Payment Feature is not avaliable at the moment. Please Pay with Bank Transfer. Thanks! 😊
            </div>
          </>
        )}

        {paymentMethod === 'bank' && (
          <div className="bank-info-box">
            <p><strong>Bank Name:</strong> GTBank</p>
            <p><strong>Account Name:</strong> CHECK-BEST INTERNATIONAL LTD</p>
            <p><strong>Account Number:</strong> 0123456789</p>
            <p className="note">Please transfer the exact amount and send the transfer receipt to the admin Thanks.</p>
          </div>
        )}

        {/* {paymentMethod && (
          <button type="submit" className="paystack-btn">
            Submit Payment
          </button>
        )} */}
      </form>
    </div>
  );
}

export default PaymentPage;
