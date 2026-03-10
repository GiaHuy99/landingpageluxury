import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import "./ContactSection.css";
import emailjs from "@emailjs/browser";

const ContactSection: React.FC = () => {
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false); // ⭐ NEW

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const payload = {
            full_name: fullName,
            phone_number: phone,
        };

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT,
                payload,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                setSent(true);       // ⭐ SHOW SUCCESS UI
                setLoading(false);

                setTimeout(() => {
                    setSent(false);
                    setFullName("");
                    setPhone("");
                }, 3000);
            })
            .catch((err) => {
                console.error(err);
                alert("Failed to send message!");
                setLoading(false);
            });
    };

    return (
        <section className="contact-section">
            <div className="contact-container">

                {/* LEFT IMAGE */}
                <div className="contact-image-box">
                    <img src="/images/contact/image.png" alt="contact" />
                </div>

                {/* RIGHT FORM */}
                <div className="contact-form-box">
                    <h2>Get in Touch</h2>
                    <p>Leave your information and we will contact you shortly.</p>

                    {sent ? (
                        <div className="success-message">
                            <h3>Thank you!</h3>
                            <p>We will contact you within 5 minutes.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Your full name"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="input-group">
                                <label>Phone Number</label>
                                <PhoneInput
                                    defaultCountry="vn"
                                    value={phone}
                                    onChange={(phone) => setPhone(phone)}
                                    className="phone-input-modern"
                                />
                            </div>

                            <button type="submit" className="contact-btn" disabled={loading}>
                                {loading ? "Sending..." : "Connect Now"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
