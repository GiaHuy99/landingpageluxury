import {FaHome, FaInfo, FaNewspaper, FaPhone} from "react-icons/fa";
import "./FloatingMenu.css";
import {FiCompass} from "react-icons/fi";
import {MdLocationCity} from "react-icons/md";

export default function FloatingMenu() {

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="floating-menu">
      <button onClick={() => scrollTo("header")}><FaHome /></button>
      <button onClick={() => scrollTo("about")}><FaInfo /></button>
      <button onClick={() => scrollTo("foodtravel")}><FiCompass /></button>
      <button onClick={() => scrollTo("projects")}><MdLocationCity /></button>
      <button onClick={() => scrollTo("news")}><FaNewspaper /></button>
      <button onClick={() => scrollTo("contact")}><FaPhone /></button>
    </div>
  );
}
