import { Button } from "@mui/material";
import React from "react";



import "./Contact.css";

export default function Contact() {
  return (
    <>
      

    
      <h1 className="bannnesd" > _____Contact Us_____ </h1>
      {/* <h1 className="bannnesd" > _____Contact For Any Queries_____ </h1> */}
      <div className="Contact_main">
        <div>
          <div className="Contact_from">
            <form>
              <h3  > _____Contact For Any Queries_____ </h3>
              <input name="Name" placeholder="Name" />
              <input name="Email" placeholder="Email" />
              <input name="Subject" placeholder="Subject" />
              <input name="Message" placeholder="Message" />
              <Button type="Submit"> Send Message </Button>
            </form>
          </div>
        </div>
        <div>
          <div className="Contact_detail">
            <div className="Contact_detail_1">
              <h2> Get In Touch </h2>
              <p>
                Justo sed diam ut sed amet duo amet lorem amet stet sea ipsum,
                sed duo amet et. Est elitr dolor elitr erat sit sit. Dolor diam
                et erat clita ipsum justo sed.
              </p>
            </div>
            <div className="Contact_detail_2">
              <h2> Store 1</h2>
              <p>123 Street, Gomtinagar , Lucknow</p>
              <p>happeningsoulsstore@gmail.com </p>
              <p>+012 345 67890</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
