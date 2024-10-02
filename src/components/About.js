import React from 'react';
import './About.css'; // Optional: You can create a CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About This App</h1>
      <p>
        Welcome to the Text Case Converter! This application allows you to easily
        convert any text to uppercase or lowercase with just a few clicks.
      </p>
      
      <h2>Features</h2>
      <ul>
        <li>Convert text to uppercase with a single button click.</li>
        <li>Convert text to lowercase effortlessly.</li>
        <li>Clear/Copy your text input with one simple action.</li>
        <li>User-friendly interface for seamless experience.</li>
      </ul>

      <h2>How It Works</h2>
      <p>
        Simply enter your text into the input box and choose whether you want
        to convert it to uppercase or lowercase. Click the respective button,
        and your text will be transformed instantly!
      </p>

      <h2>Why Use This App?</h2>
      <p>
        This app is perfect for anyone who frequently works with text and
        needs to change the case for various reasons, such as formatting
        documents, coding, or just for fun!
      </p>

      <h2>Get Started</h2>
      <p>
        Ready to start converting text? Head back to the main page and
        start using the Text Case Converter!
      </p>
    </div>
  );
};

export default About;
