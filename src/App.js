import React from 'react';
import './App.css'; // Assuming you have some basic styles defined here

const plans = [
  {
    name: 'FREE',
    price: '$0/month',
    features: [
      'Single User',
      '50GB Storage',
      'Unlimited Public Projects',
      'Community Access',
    ],
    disabledFeatures: [
      'Unlimited Private Projects',
      'Dedicated Phone Support',
      'Free Subdomain',
      'Monthly Status Reports',
    ],
  },
  {
    name: 'PLUS',
    price: '$9/month',
    features: [
      '5 Users',
      '50GB Storage',
      'Unlimited Public Projects',
      'Community Access',
      'Unlimited Private Projects',
      'Dedicated Phone Support',
      'Free Subdomain',
    ],
    disabledFeatures: [
      'Monthly Status Reports',
    ],
  },
  {
    name: 'PRO',
    price: '$49/month',
    features: [
      'Unlimited Users',
      '50GB Storage',
      'Unlimited Public Projects',
      'Community Access',
      'Unlimited Private Projects',
      'Dedicated Phone Support',
      'Free Subdomain',
      'Monthly Status Reports',
    ],
    disabledFeatures: [],
  },
];

const App = () => {
  return (
    <div className="App">
      <div className="pricing-table">
        {plans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <h2>{plan.name}</h2>
            <h3>{plan.price}</h3>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index} className="enabled">{feature}</li>
              ))}
              {plan.disabledFeatures.map((feature, index) => (
                <li key={index} className="disabled">{feature}</li>
              ))}
            </ul>
            <button>BUTTON</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
