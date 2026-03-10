import React from "react";
import "./IntroduceSection.css";

const IntroduceSection: React.FC = () => {
    return (
        <section className="image-text-section">
            <div className="image-container">
                {/* Ảnh nền */}
                <img
                    src="/images/introduce/3cf4395a3f5e8200db4f20.jpg"
                    alt="Luxury Lifestyle"
                    className="section-image"
                />

                {/* Lớp phủ tối mờ để chữ nổi hơn */}
                <div className="dark-overlay"></div>

                {/* Khung nội dung hiệu ứng kính */}
                <div className="glass-content">
                    <p className="overlay-subtitle">
                        A perfect blend of modernity & culture
                    </p>
                    <h2 className="overlay-title">
                        Discover the Future <br/> with <span>LuxuryEstate</span>
                    </h2>
                    {/* Đường kẻ trang trí */}
                    <div className="decorative-line"></div>
                </div>
            </div>
        </section>
    );
};

export default IntroduceSection;