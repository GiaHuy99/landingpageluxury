import React, { useState, useId } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ProjectCard.css";

const PROJECT_TITLE = "GMS Sea";

const PROJECT_IMAGES = [
    "/images/project/gMSLake/handled_IMG_3058_1080_1920_80.jpg",
    "/images/project/gMSLake/mobile_file_2024-08-22_01-57-18 (3).jpg",
    "/images/project/gMSLake/mobile_file_2024-08-23_04-36-00 (7).jpg",
    "/images/project/gMSSea/0ec4532547d7f089a9c614.jpg",
    "/images/project/gMSSea/29c33e088557300969463.jpg",
    "/images/project/gMSSea/68c90312b84d0d13545c14.jpg",
    "/images/project/gMSSea/269cf9474218f746ae0911.jpg",
    "/images/project/gMSSea/780fd3df6880ddde849113.jpg",
    "/images/project/gMSSea/0962b4b50feabab4e3fb18.jpg",
    "/images/project/gMSSea/2093b55d0e02bb5ce2137.jpg",
    "/images/project/gMSSea/2225bdfe06a1b3ffeab010.jpg",
    "/images/project/gMSSea/2683d6566d09d857811815.jpg",
    "/images/project/gMSSea/7202ced87587c0d9999617.jpg",
    "/images/project/gMSSea/97916cce553ce262bb2d7.jpg",
    "/images/project/gMSSea/a9089ea6a654110a48458.jpg",
    "/images/project/gMSSea/fc610684bddb088551ca6.jpg",
    "/images/project/gMSSea/Picture1.jpg",
    "/images/project/gMSSea/Picture2.jpg",
    "/images/project/gMSSea/Picture3.jpg",
    "/images/project/gMSSea/Picture4.png",
    "/images/project/gMSSea/Picture5.jpg",
    "/images/project/gMSSea/Picture6.jpg",
    "/images/project/gMSSea/Picture8.jpg",
    "/images/project/gMSSea/Picture13.jpg",
    "/images/project/gMSSea/Picture16.jpg",
    "/images/project/gMSSea/Picture17.jpg",
    "/images/project/gMSSea/Picture19.jpg",
    "/images/project/gMSSea/Picture20.jpg",
];

const UNITS = "50 distinct units";
const TENURE = "Leasehold";
const PRICE = "IDR 2.64B ($160K)*";
const HANDOVER = "Q4 2027";
const ROI = "15-16%";
const SIZES = "55.6 – 162.5 m²";

const GMSSea: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [activeImage, setActiveImage] = useState(PROJECT_IMAGES[0]);

    const id = useId().replace(/:/g, "");

    const handleOpenModal = () => {
        setActiveImage(PROJECT_IMAGES[0]);
        setShowModal(true);
    };

    return (
        <div className="project-card">
            <h1 className="project-title">{PROJECT_TITLE}</h1>

            {/* SLIDER */}
            <div className="image-slider-container">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    navigation={{ nextEl: `.next-${id}`, prevEl: `.prev-${id}` }}
                    pagination={{ el: `.pagination-${id}`, clickable: true }}
                >
                    {/* CHỈ LẤY 3 ẢNH ĐẦU TIÊN */}
                    {PROJECT_IMAGES.slice(0, 3).map((img, i) => (
                        <SwiperSlide key={i}>
                            <img
                                src={img}
                                alt={`${PROJECT_TITLE} ${i + 1}`}
                                className="project-image"
                                onClick={handleOpenModal}
                                style={{ cursor: "pointer" }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="badges">
                    <span className="badge">{UNITS}</span>
                    <span className="badge leasehold">{TENURE}</span>
                </div>

                {/* --- NÚT ĐIỀU HƯỚNG MỚI (SVG + Shadow) --- */}
                {/* Prev Button */}
                <div className={`custom-nav-btn prev-${id} nav-prev`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </div>
                {/* Next Button */}
                <div className={`custom-nav-btn next-${id} nav-next`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </div>

                <div className={`swiper-pagination pagination-${id}`}></div>
            </div>

            {/* INFO BOX */}
            <div className="info-box">
                <div className="info-row">
                    <div className="info-item">
                        <span className="label">Starting price</span>
                        <span className="value">{PRICE}</span>
                    </div>
                    <div className="info-item">
                        <span className="label">Handover</span>
                        <span className="value">{HANDOVER}</span>
                    </div>
                </div>

                <div className="info-row">
                    <div className="info-item">
                        <span className="label">Annual ROI</span>
                        <span className="value highlight">{ROI}</span>
                    </div>
                    <div className="info-item">
                        <span className="label">Unit sizes</span>
                        <span className="value">{SIZES}</span>
                    </div>
                </div>

                <p className="note">*All payments in PayOS</p>

                <button className="cta-button" onClick={handleOpenModal}>
                    See Gallery Details
                </button>
            </div>

            {/* MODAL GALLERY */}
            {showModal && (
                <div className="gallery-overlay" onClick={() => setShowModal(false)}>
                    <div className="gallery-popup" onClick={(e) => e.stopPropagation()}>
                        <div className="gallery-header">
                            <h3>{PROJECT_TITLE} - Gallery</h3>
                            <button className="gallery-close-btn" onClick={() => setShowModal(false)}>×</button>
                        </div>

                        <div className="gallery-content">
                            <div className="main-image-wrapper">
                                <img src={activeImage} alt="Main View" className="gallery-main-img" />
                            </div>

                            <div className="sub-images-grid">
                                {PROJECT_IMAGES.map((img, index) => (
                                    <div
                                        key={index}
                                        className={`sub-image-item ${activeImage === img ? 'active' : ''}`}
                                        onClick={() => setActiveImage(img)}
                                    >
                                        <img src={img} alt={`Detail ${index}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GMSSea;