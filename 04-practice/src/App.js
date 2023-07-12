 
import React from 'react';
 
 

// eslint-disable-next-line
const concepts = [
  {
    title: 'Standard',
    price: '$10/per month',
 
    description:
      'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
    button_text:'Try for free',
    details: '90 days free trail'
    },
  {
    title: 'Pro',
    price: '$20/per month',
 
    description:
      'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
      details: '90 days free trail'
    },
  {
    title: 'Business',
    price: '$30/per month',
 
    description:
      'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
      details: '90 days free trail'
    },
];

function App() {
  return (
    <div>
      <header>
         <h1>A Plan for every business`s needs</h1>
        <p>Choose the plan that works best for you and your team.</p>
      </header>
      <ul id="concepts">
        <li className="concept">
          <h2>{concepts[0].title} </h2>
          <p>{concepts[0].price} </p>
          <p>{concepts[0].description}</p>
          {/* <img src={concepts[0].image} alt={concepts[0].title} /> */}
          <button type="button">{concepts[0].button_text}</button>
          <p>{concepts[0].details}</p>
          <ul>
            <li>50 payments per month for free</li>
            <li>3 files</li>
            <li>30-day revision history</li>
          </ul>
        </li>
 
        <li className="concept">
          <h2>{concepts[1].title} </h2>
          <p>{concepts[1].price} </p>
          <p>{concepts[1].description}</p>
          {/* <img src={concepts[0].image} alt={concepts[0].title} /> */}
          <button type="button">{concepts[0].button_text}</button>
          <p>{concepts[1].details}</p>
          <ul>
            <li>50 payments per month for free</li>
            <li>3 files</li>
            <li>30-day revision history</li>
          </ul>
        </li>
 
        <li className="concept">
          <h2>{concepts[2].title} </h2>
          <p>{concepts[2].price} </p>
          <p>{concepts[2].description}</p>
          {/* <img src={concepts[0].image} alt={concepts[0].title} /> */}
          <button type="button">{concepts[0].button_text}</button>
          <p>{concepts[2].details}</p>
          <ul>
            <li>50 payments per month for free</li>
            <li>3 files</li>
            <li>30-day revision history</li>
          </ul>
        </li>
      </ul>
      
    </div>
  );
}

export default App;
