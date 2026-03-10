import { MapPin, Facebook, Mail, Phone, ArrowUpRight } from "lucide-react";
import "./Footer.css";

export default function Footer() {
    const lat = 10.7731250789515;
    const lng = 106.66987705413209;

    return (
        <footer className="footer">
            <div className="footer-container">

                {/* 1. BRAND SECTION (Logo lớn ở giữa) */}
                <div className="footer-brand">
                    <h2 className="brand-title">LuxuryEstate</h2>
                    <span className="brand-slogan">The Pinnacle of Modern Living</span>
                </div>

                {/* Đường kẻ phân cách sang trọng */}
                <div className="footer-divider"></div>

                {/* 2. INFO GRID (Chia 3 cột) */}
                <div className="footer-grid">

                    {/* Cột 1: Địa chỉ */}
                    <div className="footer-col">
                        <h4 className="col-title">Headquarters</h4>
                        <a
                            href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link address-link"
                        >
                            <MapPin size={18} className="icon" />
                            <span>
                                11 Su Van Hanh St, Ward 12,<br />
                                Dist 10, HCMC, Vietnam
                            </span>
                        </a>
                    </div>

                    {/* Cột 2: Liên hệ cá nhân */}
                    <div className="footer-col">
                        <h4 className="col-title">Contact Us</h4>
                        <div className="contact-group">
                            <a href="tel:0984768725" className="footer-link">
                                <Phone size={18} className="icon" />
                                <span>(+84) 984 768 725 (Zalo)</span>
                            </a>
                            <a href="mailto:giahuytran13072002@gmail.com" className="footer-link">
                                <Mail size={18} className="icon" />
                                <span>nunu@gmail.com</span>
                            </a>
                        </div>
                    </div>

                    {/* Cột 3: Mạng xã hội */}
                    <div className="footer-col">
                        <h4 className="col-title">Connect</h4>
                        <a
                            href="https://www.facebook.com/profile.php?id=100073975727341&locale=vi_VN"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link social-link"
                        >
                            <Facebook size={18} className="icon" />
                            <span>Facebook Official</span>
                            <ArrowUpRight size={14} className="arrow-icon" />
                        </a>
                    </div>
                </div>

                {/* 3. BOTTOM BAR (Bản quyền) */}
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} LuxuryEstate. All rights reserved.</p>
                    <div className="legal-links">
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}