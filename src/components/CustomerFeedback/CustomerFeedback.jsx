// src/components/CustomerFeedback/CustomerFeedback.js
import React from 'react';
import './CustomerFeedback.css';

const feedbacks = [
  {
    name: 'Jenny Wilson',
    rating: 4,
    comment: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.'
  },
  {
    name: 'Dianne Russell',
    rating: 5,
    comment: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.'
  },
  {
    name: 'Devon Lane',
    rating: 5,
    comment: 'Normally wings are wings, but theirs are lean, meaty and tender, and perfectly cooked.'
  }
];

const CustomerFeedback = () => {
  return (
    <div className="customer-feedback">
      <h2>Customer's Feedback</h2>
      {feedbacks.map((feedback, index) => (
        <div key={index} className="feedback-item">
          <div className="feedback-header">
            <span className="customer-name">{feedback.name}</span>
            <span className="rating">
              {'★'.repeat(feedback.rating)}{'☆'.repeat(5 - feedback.rating)}
            </span>
          </div>
          <p className="comment">{feedback.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerFeedback;