import React from "react";
import "./ImageGallery.css";

// Bạn thay đường dẫn ảnh thật của bạn vào đây
const imgSquare = "../../../public/images/ImageGallery/12.jpg"; // Ảnh 2048x2048
const imgRect = "../../../public/images/ImageGallery/23.jpg";   // Ảnh 1080x608

const ImageGallery: React.FC = () => {
    return (
        <section className="luxury-gallery-section">
            <div className="luxury-gallery-container">

                {/* KHỐI 1: Hình Chữ Nhật (Chiếm 2 phần) */}
                <div className="gallery-box rectangle-box">
                    <img src={imgRect} alt="Luxury Wide View" />
                    {/* Thêm text nhỏ lên ảnh nếu thích */}
                    <div className="box-overlay">
                        <span>Interior Design</span>
                    </div>
                </div>

                {/* KHỐI 2: Hình Vuông (Chiếm 1 phần) */}
                <div className="gallery-box square-box">
                    <img src={imgSquare} alt="Luxury Detail View" />
                    <div className="box-overlay">
                        <span>Architectural Detail</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ImageGallery;