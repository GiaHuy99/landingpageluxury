import React from "react";
import NewsCard from "./NewsCard";
import "./NewsCard.css";

const NewsSection: React.FC = () => {
    const articles = [
        {
            title: "Vietnam Photos",
            url: "https://www.nationalgeographic.com/travel/article/vietnam-photos",
        },
        {
            title: "The Continuing Glow of Vietnam\n",
            url: "https://www.nationalgeographic.com/travel/article/the-continuing-glow-of-vietnam",
        },
        {
            title: "10 of the best places to visit in Vietnam",
            url: "https://www.lonelyplanet.com/articles/best-places-to-visit-in-vietnam",
        },

    ];

    return (
        <section className="news-section">
            <h2 className="news-header">News & Articles</h2>

            <div className="news-grid">
                {articles.map((item, index) => (
                    <NewsCard key={index} title={item.title} url={item.url} />
                ))}
            </div>
        </section>
    );
};

export default NewsSection;
