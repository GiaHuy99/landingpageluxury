// FullImageOverlaySection.tsx
import React from "react";
import "./InvestSection.css";

const InvestSection: React.FC = () => {
    return (
        <section className="full-image-overlay-section">
            {/* Ảnh nền full */}
            <div className="background-image-wrapper">
                <img
                    src="/images/invest/2026-01-29 094746.png"
                    alt="Việt Nam tuyệt đẹp"
                    className="background-image"
                />
                <div className="overlay"></div>
            </div>

            {/* Nội dung đè lên ảnh */}
            <div className="content-container">
                {/* Bên trái: Title + Text */}
                <div className="text-content">
                    <h1 className="main-title">
                        Property ownership<br />
                        Redefining the way of living
                    </h1>
                    <p className="main-description">
                        Where every square meter is a work of art.
                        Where architecture blends seamlessly with nature, interiors are crafted with exquisite detail,
                        and five-star amenities are reserved exclusively for the elite.
                        This is not just a place to live — it is a statement of your status and refined taste.
                    </p>
                    {/*<button className="cta-button">Bắt đầu hành trình →</button>*/}
                </div>

                {/* Bên phải: 4 khung nổi */}
                <div className="stats-grid">
                    <div className="stat-box">
                        <h3>500+</h3>
                        <p>Luxury clientele</p>
                    </div>
                    <div className="stat-box">
                        <h3>98%</h3>
                        <p>Absolute satisfaction</p>
                    </div>
                    <div className="stat-box">
                        <h3>30+</h3>
                        <p>Project delivered on schedule</p>
                    </div>
                    <div className="stat-box">
                        <h3>5★</h3>
                        <p>World-class operational standards</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InvestSection;