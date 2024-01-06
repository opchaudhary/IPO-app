// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import './LandingPage.css';


const LandingPage = () => {
  return (
    <div className='landing-page-container'>
      <header>
        <h1>Welcome to IPO Market Web</h1>
      </header>
      <section>
        <h3>
          Introducing our cutting-edge IPO Trading App – your gateway to a seamless and intuitive experience in navigating the dynamic world of Initial Public Offerings (IPOs). Our app is designed with simplicity and efficiency in mind, providing users with real-time access to upcoming IPOs, market trends, and comprehensive data for making informed investment decisions.
        </h3>
        <div className='para-content'>
          <p className='ipo-paragraph'>
            An initial public offering (IPO) marks a significant milestone for a private company as it transitions into the realm of publicly traded entities. This financial event involves the issuance of new shares to the public for the first time, allowing the company to raise capital by selling ownership stakes. The IPO process typically unfolds through an underwriting agreement with investment banks, which facilitate the sale of shares to institutional and retail investors.
          </p>
          <p className='ipo-paragraph'>
            The IPO market serves as a dynamic and essential component of the broader financial landscape, acting as a conduit for companies to access public capital and fuel their growth strategies. It provides an avenue for investors to participate in the early stages of a company's public journey, offering the potential for capital appreciation as the firm expands its operations and captures market share.
          </p>
          <p className='ipo-paragraph'>
            Investors keen on participating in an IPO often engage in the process of buying and selling shares through various platforms. The application for IPO shares involves investors submitting bids at specified prices, expressing their interest in acquiring a portion of the newly issued shares. This demand, in turn, helps determine the final IPO price and allocation of shares to successful bidders.
          </p>
          <h1>
            Get started today and take control of your investments. <Link to="/login">Login</Link>
          </h1>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
