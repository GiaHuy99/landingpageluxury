import React, { useState, useId } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ProjectCard.css";

const PROJECT_TITLE = "GMS Lake";

const PROJECT_IMAGES = [
    "/images/project/gMSLake/image.png",
    "/images/project/gMSLake/handled_IMG_1858_1080_1920_80.jpg",
    "/images/project/gMSLake/mobile_file_2024-08-22_01-57-18 (2).jpg",
    "/images/project/gMSLake/mobile_file_2024-08-22_01-57-18.jpg",
    "/images/project/gMSLake/mobile_file_2024-08-22_01-57-18 (4).jpg",
    "/images/project/gMSLake/mobile_file_2024-08-22_01-57-18 (1).jpg",
    "/images/project/gMSLake/mobile_file_2024-08-23_04-36-00 (7).jpg",
    "/images/project/gMSLake/1.jpg",
    "/images/project/gMSLake/4d03e3fe8e302a6e7321246.jpg",
    "/images/project/gMSLake/4fc97966d6a972f72bb8129.jpg",
    "/images/project/gMSLake/7e096a32f8fd5ca305ec105.jpg",
    "/images/project/gMSLake/8c8717728dbd29e370ac208.jpg",
    "/images/project/gMSLake/8da7d1260ee9aab7f3f827.jpg",
    "/images/project/gMSLake/26f5653a08f4acaaf5e5243.jpg",
    "/images/project/gMSLake/29b052318dfe29a070ef21.jpg",
    "/images/project/gMSLake/34dfec2d81e325bd7cf2245.jpg",
    "/images/project/gMSLake/48cac17c1eb3baede3a238.jpg",
    "/images/project/gMSLake/51d234cbaf040b5a5215178.jpg",
    "/images/project/gMSLake/207df1fd2e328a6cd32325.jpg",
    "/images/project/gMSLake/263b2ebaf175552b0c6422.jpg",
    "/images/project/gMSLake/322e8c101edfba81e3ce111.jpg",
    "/images/project/gMSLake/354f7ff8a03704695d2639.jpg",
    "/images/project/gMSLake/429f892056eff2b1abfe34.jpg",
    "/images/project/gMSLake/582da003cdcd699330dc258.jpg",
    "/images/project/gMSLake/44957d14a2db06855fca28.jpg",
    "/images/project/gMSLake/366185a4e86a4c34157b244.jpg",
    "/images/project/gMSLake/a8713feeae210a7f5330112.jpg",
    "/images/project/gMSLake/ca7122f1fd3e5960002f29.jpg",
    "/images/project/gMSLake/Can1+.jpg",
    "/images/project/gMSLake/Can.jpg",
    "/images/project/gMSLake/Can03Lakephongtam.jpeg",
    "/images/project/gMSLake/Can03phongkhach.jpeg",
    "/images/project/gMSLake/Can03phongngu.jpeg",
    "/images/project/gMSLake/cb46bff0603fc4619d2e37.jpg",
    "/images/project/gMSLake/cbfa9e7b41b4e5eabca523.jpg",
    "/images/project/gMSLake/MH_BS2066 1- watermarked.jpg",
    "/images/project/gMSLake/MHBS4161- watermarked.jpg",
    "/images/project/gMSLake/5475d40844c7e099b9d6109.jpg",
    "/images/project/gMSLake/6531b7ddde137a4d2302265.jpg",
    "/images/project/gMSLake/612522ea4b24ef7ab635260.jpg",
    "/images/project/gMSLake/2783847bedb549eb10a4264.jpg",
    "/images/project/gMSLake/24899196f8585c060549269.jpg",
    "/images/project/gMSLake/0078498820468418dd57266.jpg",
    "/images/project/gMSLake/ba3cac1fc1d1658f3cc0259.jpg",
    "/images/project/gMSLake/ce32d294485bec05b54a181.jpg",
    "/images/project/gMSLake/d7b0e28b7044d41a8d55106.jpg",
    "/images/project/gMSLake/d162c9545b9bffc5a68a123.jpg",
    "/images/project/gMSLake/dee325dab715134b4a04110.jpg",
    "/images/project/gMSLake/Hinhhoboi.jpg",
    "/images/project/gMSLake/Hinhrapchieuphim.jpg",
    "/images/project/gMSLake/d7b0e28b7044d41a8d55106.jpg",
    "/images/project/gMSLake/d7b0e28b7044d41a8d55106.jpg",
];

const UNITS = "50 distinct units";
const TENURE = "Leasehold";
const PRICE = "IDR 2.64B ($160K)*";
const HANDOVER = "Q4 2027";
const ROI = "15-16%";
const SIZES = "55.6 – 162.5 m²";

const GMSLake: React.FC = () => {
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

export default GMSLake;