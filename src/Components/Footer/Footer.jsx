import React, { useState } from "react";
import "./Footer.css";
import user_icon from "../../assets/user_icon.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [email, setEmail] = useState(""); // store user input

  const handleSubscribe = async () => {
    if (!email) {
      toast.warning("Please enter a valid email address.");
      return;
    }

    // prepare data
    const formData = {
      access_key: import.meta.env.VITE_WEB3FORMS_KEY, // use your env key
      subject: "New Subscriber from Portfolio Footer",
      email: email,
      message: `New subscription request from: ${email}`,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (result.success) {
        toast.success("🎉 Thank you for subscribing!");
        setEmail(""); // reset field
      } else {
        toast.error("❌ Something went wrong: " + result.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("⚠️ An error occurred. Please try again later.");
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/Shweta_Khedkar_Resume.pdf"; // path in public folder
    link.download = "Shweta_Khedkar_Resume.pdf";
    link.click();
  };

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <p>
            I’m a Full Stack Developer and Cybersecurity student from India,
            passionate about building secure and scalable solutions.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="User Icon" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="footer-subscribe" onClick={handleSubscribe}>
            Subscribe
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2025 Shweta Khedkar. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p onClick={handleDownloadCV} style={{ cursor: "pointer" }}>
            📄 Download CV
          </p>
          <p>Connect with me</p>
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
};

export default Footer;
