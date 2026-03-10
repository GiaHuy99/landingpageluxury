import React, { useState, useEffect } from "react";
import "./Header.css";

// Bạn thay đường dẫn ảnh của bạn vào đây.
// Kể cả ảnh kích thước khác nhau cũng không sao.
const images = [
    "/images/hero/0a6562c864ccd99280dd22.jpg",
    "/images/hero/1aa8147a8eb52aeb73a4191.jpg",
    "/images/hero/4d15b0b1b7b50aeb53a45.jpg",
    "/images/hero/60b207e826c69698cfd74.jpg",
    "/images/hero/mobile_file_2024-08-07_05-39-16.jpg"

];

const Header: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Tự động chuyển ảnh sau 5 giây
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header className="header-container">
            {/* --- PHẦN SLIDESHOW --- */}
            <div className="slideshow-wrapper">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`slide-item ${index === currentIndex ? "active" : ""}`}
                        style={{ backgroundImage: `url(${img})` }}
                    ></div>
                ))}
                {/* Lớp phủ đen mờ để chữ luôn dễ đọc */}
                <div className="overlay"></div>
            </div>

            {/* --- LOGO --- */}
            <div className="header-logo">LuxuryEstate</div>

            {/* --- NỘI DUNG CHÍNH --- */}
            <div className="header-content">
                <h1 className="header-title">
                    Premium Real Estate
                </h1>
                <p className="header-subtitle">
                    Find your dream home today
                </p>
            </div>
        </header>
    );
};

export default Header;