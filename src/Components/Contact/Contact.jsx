import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // ✅ Validation: check if all fields are filled
    if (!name || !email || !message) {
      toast.warning("⚠️ Please fill in all the fields before submitting.");
      return;
    }

    // ✅ Add access key
    const formData = new FormData(form);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        toast.success("🎉 Message sent successfully!");
        form.reset();
      } else {
        toast.error("❌ Error: " + res.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("⚠️ Something went wrong. Please try again later.");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="title-box">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            💼 Let’s Connect! I’m actively seeking opportunities to kickstart my
            career in the tech industry. Recruiters and employers can reach out
            to me for roles in Full Stack Development, Software Development, and
            Cybersecurity. I’m passionate about building scalable solutions,
            securing systems, and contributing to innovative projects.
            <br />
            <br />
            <span>
              📧 Available for collaborations, internships, and full-time
              positions. Feel free to get in touch – I’d be excited to discuss
              how I can add value to your team!
            </span>
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>shwetajkhedkar2001@gmail.com</p>
            </div>
            <div className="contact-detail">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="github-icon"
              >
                <path d="M12 1C5.925 1 1 5.925 1 12c0 4.867 3.157 8.986 7.54 10.435.551.102.752-.24.752-.53 0-.262-.01-1.134-.015-2.056-3.066.666-3.713-1.477-3.713-1.477-.5-1.267-1.223-1.606-1.223-1.606-.999-.684.076-.67.076-.67 1.104.078 1.684 1.135 1.684 1.135.982 1.684 2.576 1.198 3.203.916.1-.711.384-1.197.698-1.472-2.448-.279-5.02-1.224-5.02-5.448 0-1.204.43-2.188 1.135-2.958-.114-.278-.49-1.396.108-2.912 0 0 .923-.296 3.02 1.13a10.52 10.52 0 0 1 2.75-.37c.933.004 1.87.126 2.75.37 2.095-1.426 3.017-1.13 3.017-1.13.6 1.516.224 2.634.11 2.912.707.77 1.134 1.754 1.134 2.958 0 4.235-2.577 5.166-5.033 5.439.395.342.746 1.017.746 2.052 0 1.482-.014 2.677-.014 3.044 0 .293.2.636.757.528C19.846 20.984 23 16.865 23 12c0-6.075-4.925-11-11-11z"></path>
              </svg>
              <p>
                <a
                  href="https://github.com/shweta-khedkar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/shweta-khedkar
                </a>
              </p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />{" "}
              <p>Pune, Maharashtra, India.</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label>Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
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

export default Contact;
