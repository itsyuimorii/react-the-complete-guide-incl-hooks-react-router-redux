
import React from 'react';



// eslint-disable-next-line
const concepts = [
  {
    title: 'Standard',
    price: '$10/per month',

    description:
      'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
    button_text: 'Try for free',
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
      'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event,components can share state.',
    details: '90 days free trail'
  },
];

function App() {
  return (
    <div>
      <header>
        <h1>Experience the Power of DataConnect Pro </h1>
        <p>The Ultimate Job Search App for Data-Driven Professionals</p>
      </header>
      <ul id="concepts">
        <li className="concept">
          <h2>{concepts[0].title} </h2>
          <h3>{concepts[1].price} </h3>
          <p>{concepts[0].description}</p>
          {/* <img src={concepts[0].image} alt={concepts[0].title} /> */}
          <div className="button-container">
            <button type="button">{concepts[0].button_text}</button>
           
          </div>
          <p>30 day free trail</p>
           <ul className ="details">
            <li>50 payments per month for free</li>
             <li>30-day revision history</li>
            <li>50 payments per month for free</li>

          </ul>
      
        </li>
        

        <li className="concept">
          <h2>{concepts[1].title} </h2>
         
          <h3>{concepts[1].price} </h3>
     
          <p>{concepts[1].description}</p>
          {/* <img src={concepts[0].image} alt={concepts[0].title} /> */}
          <div className="button-container">
            <button type="button">{concepts[0].button_text}</button>
          </div>
          <p>30 day free trail</p>
           <ul className ="details">
            <li>50 payments per month for free</li>
             <li>30-day revision history</li>
            <li>50 payments per month for free</li>

          </ul>
        </li>

        <li className="concept">
          <h2>{concepts[2].title} </h2>
          <h3>{concepts[1].price} </h3>
          <p>{concepts[2].description}</p>
          {/* <img src={concepts[0].image} alt={concepts[0].title} /> */}
          <div className="button-container">
            <button type="button">{concepts[0].button_text}</button>
          </div>
          <p>30 day free trail</p>
           <ul className ="details">
            <li>50 payments per month for free</li>
             <li>30-day revision history</li>
            <li>50 payments per month for free</li>
          </ul>
        </li>
      </ul>

    </div>
  );
}

export default App;
