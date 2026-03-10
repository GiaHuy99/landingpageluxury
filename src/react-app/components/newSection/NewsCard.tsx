import React from "react";
import "./NewsCard.css";

interface NewsCardProps {
    title: string;
    url: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, url }) => {
    return (
        <div className="news-card" onClick={() => window.open(url, "_blank")}>
            <h3 className="news-title">{title}</h3>
            <span className="news-read">Read more →</span>
        </div>
    );
};

export default NewsCard;
