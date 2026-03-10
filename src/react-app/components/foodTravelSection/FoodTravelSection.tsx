// FoodTravelSection.tsx
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "./FoodTravelSection.css";

// Bộ ảnh Travel
const travelGallery = [
    { src: "/images/food&&travel/explore-stunning-nature-of-ha-long-bay-1200x675.png", alt: "Vịnh Hạ Long" },
    { src: "/images/food&&travel/explore-stunning-nature-of-ha-long-bay-1200x675.png", alt: "Hang Sửng Sốt" },
    { src: "/images/food&&travel/explore-stunning-nature-of-ha-long-bay-1200x675.png", alt: "Đảo Ti Tốp" },
    { src: "/images/food&&travel/explore-stunning-nature-of-ha-long-bay-1200x675.png", alt: "Bình minh trên vịnh" },
];

// Bộ ảnh Food
const foodGallery = [
    { src: "/images/food&&travel/vietnames-cuisine-1200x675.webp", alt: "Phở bò truyền thống" },
    { src: "/images/food&&travel/vietnames-cuisine-1200x675.webp", alt: "Bánh mì Sài Gòn" },
    { src: "/images/food&&travel/vietnames-cuisine-1200x675.webp", alt: "Bún chả Hà Nội" },
    { src: "/images/food&&travel/vietnames-cuisine-1200x675.webp", alt: "Bánh xèo miền Tây" },
];

const FoodTravelSection: React.FC = () => {
    const [travelOpen, setTravelOpen] = useState(false);
    const [foodOpen, setFoodOpen] = useState(false);

    return (
        <>
            <section className="food-travel-section">
                {/* Card Travel – Click toàn bộ khung */}
                <div
                    className="image-card clickable-card"
                    onClick={() => setTravelOpen(true)}
                >
                    <img
                        src="/images/food&&travel/explore-stunning-nature-of-ha-long-bay-1200x675.png"
                        alt="Beautiful Travel Destinations"
                    />
                    {/* Tiêu đề nhỏ nhẹ nhàng ở góc */}
                    <div className="card-label">
                        <h3>Beautiful Travel Destinations</h3>
                        <p>Click to discovery →</p>
                    </div>
                </div>

                {/* Card Food – Click toàn bộ khung */}
                <div
                    className="image-card clickable-card"
                    onClick={() => setFoodOpen(true)}
                >
                    <img
                        src="/images/food&&travel/vietnames-cuisine-1200x675.webp"
                        alt="Delicious Vietnamese Cuisine"
                    />
                    <div className="card-label">
                        <h3>Delicious Vietnamese Cuisine</h3>
                        <p>Click to discovery →</p>
                    </div>
                </div>
            </section>

            {/* Lightbox Travel */}
            <Lightbox
                open={travelOpen}
                close={() => setTravelOpen(false)}
                slides={travelGallery}
                plugins={[Zoom, Captions]}
                captions={{ descriptionTextAlign: "center" }}
            />

            {/* Lightbox Food */}
            <Lightbox
                open={foodOpen}
                close={() => setFoodOpen(false)}
                slides={foodGallery}
                plugins={[Zoom, Captions]}
                captions={{ descriptionTextAlign: "center" }}
            />
        </>
    );
};

export default FoodTravelSection;