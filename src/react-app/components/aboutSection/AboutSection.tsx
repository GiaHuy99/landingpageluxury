import React from "react";
import "./AboutSection.css";

const AboutSection: React.FC = () => {
    return (
        <section className="layer-section">
            <div className="layer-container">

                {/* 1. LỚP ẢNH NỀN (Nằm lùi về sau) */}
                <div className="layer-image-wrapper">
                    <img
                        src="/images/aboutSection/LIVINGROOM.jpg" /* Thay ảnh của bạn */
                        alt="Luxury Living"
                        className="layer-image"
                    />
                </div>

                {/* 2. LỚP THẺ CHỮ (Nổi lên trên và đè lên ảnh) */}
                <div className="layer-content-card">
                    <h4 className="layer-subtitle">The Green Philosophy</h4>
                    <h2 className="layer-title">
                        Architecture<br/>
                        <span>Embraced by Nature</span>
                    </h2>

                    <div className="layer-separator"></div>

                    <p className="layer-desc">
                        Escape the concrete jungle and step into a private sanctuary.
                        We blur the lines between indoors and the outdoors, creating a
                        seamless flow of natural light, fresh air, and lush greenery
                        right at your doorstep. A true oasis in the sky.
                    </p>

                    <a href="#more" className="layer-link">
                        Explore Our Story <span className="arrow">→</span>
                    </a>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;