import React from 'react';

import './about.css';

import aa from '../images/img/about/banner.png'
import vid from '../images/img/about/1.mp4'

const AboutUs = () => {
  return (
    <div className="about-us">
      
      <img src={aa} className='about-us-image' />
      <h1>About Us</h1>

      <p>Welcome to our e-commerce store! We strive to provide high-quality products and exceptional customer service.</p>
      <p>Our team is passionate about delivering an outstanding online shopping experience. Whether you're looking for clothing, electronics, or home decor, we have a wide range of products to suit your needs.</p>
      <p>Shop with confidence and enjoy the convenience of secure payments and fast shipping. If you have any questions or need assistance, please don't hesitate to reach out to our customer support team.</p>
       <p>Thank you for choosing us as your preferred online shopping destination. Happy shopping!</p>

      <h2>Our Story</h2>
      <p>Our company was founded with the vision of revolutionizing the online shopping experience. Since our inception, we have been dedicated to offering a wide range of products, competitive prices, and a user-friendly platform.</p>
      <p>With a team of experienced professionals and a customer-centric approach, we have grown into one of the leading e-commerce destinations worldwide.</p>

      <h2>Our Mission</h2>
      <p>At our core, we are committed to delivering a seamless and enjoyable shopping journey for our customers. We aim to provide a diverse selection of products, ensuring that everyone finds something they love.</p>
      <p>Additionally, we prioritize fast and reliable shipping, secure payment options, and exceptional customer support. Your satisfaction is our top priority.</p>

      <h2>Our Values</h2>
      <p>We operate on a set of core values that guide our business:</p>
      <ul>
        <li>Integrity: We uphold the highest ethical standards and treat our customers, partners, and employees with respect.</li>
        <li>Quality: We source and deliver products of the highest quality, meeting the expectations of our discerning customers.</li>
        <li>Innovation: We constantly seek innovative solutions to improve our platform, enhance the user experience, and stay ahead of market trends.</li>
        <li>Community: We believe in building strong relationships with our customers and the wider community, supporting causes that align with our values.</li>
      </ul>

      <video controls width="100%">
      <source src='../images/img/about/1.mp4' type="video/mp4"/>
      Sorry, your browser doesn't support videos.
    </video>
      <p>Thank you for choosing us as your preferred online shopping destination. We appreciate your trust and look forward to serving you.</p>
      <p>Happy shopping!</p>
      {/* <img src={image3} alt="Image 3" className="about-us-image" /> */}
    </div>
    // <>
    // <img src={aa}/>
    // </>
  )
};

export default AboutUs;

