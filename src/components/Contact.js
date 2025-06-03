// src/components/Contact.js
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [apiData, setApiData] = useState(null);

  // Fetch API Data
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
        console.log("API Response:", response.data); // ✅ Check response in console
        setApiData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []); // Runs only once when the component loads

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    navigate("/"); // Navigate to another page after form submission
  };

  // Close Modal
  const closeModal = () => {
    setIsOpen(false);
    navigate("/");
  };

  return (
    <>
      {/* Render the modal only if it's open */}
      {isOpen && (
        <div className="lightbox-wrapper" id="contact">
          <div className="container">
            <div className="lightbox-close">
              <div className="close-btn" onClick={closeModal}>
                <span className="btn-line"></span>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="lightbox-content">
                  <div className="row">
                    <div className="col-12">
                      <div className="section-heading page-heading">
                        <p className="section-description">Feel free to contact me anytime</p>
                        <h2 className="section-title">Get in Touch</h2>
                        <div className="animated-bar"></div>
                      </div>
                    </div>
                  </div>
                  {/* Contact Section */}
                  <div className="contact-section single-section">
                    <div className="row">
                      {/* Contact Form */}
                      <div className="col-12 col-lg-7">
                        <form className="contact-form" onSubmit={handleSubmit}>
                          <h4 className="content-title">Message Me</h4>
                          <div className="row">
                            <div className="col-12 col-md-6 form-group">
                              <input
                                className="form-control"
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div className="col-12 col-md-6 form-group">
                              <input
                                className="form-control"
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div className="col-12 form-group">
                              <input
                                className="form-control"
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div className="col-12 form-group form-message">
                              <textarea
                                className="form-control"
                                name="message"
                                placeholder="Message"
                                rows="5"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                              ></textarea>
                            </div>
                            <div className="col-12 form-submit">
                              <button className="btn button-main button-scheme" type="submit">
                                Send Message
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      {/* Contact Info */}
                      <div className="col-12 col-lg-5">
                        <div className="contact-info">
                          <h4 className="content-title">Contact Info</h4>
                          <p className="info-description">Always available for freelance work if the right project comes along. Feel free to contact me!</p>
                          <ul className="list-unstyled list-info">
                            <li>
                              <div className="media align-items-center">
                                <span className="info-icon">
                                  <FontAwesomeIcon icon={faUser} />
                                </span>
                                <div className="media-body info-details">
                                  <h6 className="info-type">Name</h6>
                                  <span className="info-value">Sreevalli</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="media align-items-center">
                                <span className="info-icon">
                                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                                </span>
                                <div className="media-body info-details">
                                  <h6 className="info-type">Location</h6>
                                  <span className="info-value">Banswadi, Bangalore</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="media align-items-center">
                                <span className="info-icon">
                                  <FontAwesomeIcon icon={faPhone} />
                                </span>
                                <div className="media-body info-details">
                                  <h6 className="info-type">Call Me</h6>
                                  <span className="info-value">
                                    <a href="tel:9948225875">9948225875</a>
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="media align-items-center">
                                <span className="info-icon">
                                  <FontAwesomeIcon icon={faEnvelope} />
                                </span>
                                <div className="media-body info-details">
                                  <h6 className="info-type">Email Me</h6>
                                  <span className="info-value">
                                    <a href="mailto:valliwebworkz@gmail.com">valliwebworkz@gmail.com</a>
                                  </span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* API Data Display */}
                  <div className="api-data">
                    <h2>API Data:</h2>
                    {apiData ? (
                      <div>
                        <p><strong>Title:</strong> {apiData.title}</p>
                        <p><strong>Body:</strong> {apiData.body}</p>
                      </div>
                    ) : (
                      <p>Loading API Data...</p>
                    )}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;

   




