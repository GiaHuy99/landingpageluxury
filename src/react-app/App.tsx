import Header from "./components/header/Header.tsx";
import AboutSection from "./components/aboutSection/AboutSection.tsx";
import IntroduceSection from "./components/introduceSection/IntroduceSection.tsx";
// import FoodTravelSection from "./components/foodTravelSection/FoodTravelSection.tsx";
import InvestSection from "./components/investSection/InvestSection.tsx";
import ProjectsCard from "./components/projectHouse/ProjectsCard.tsx";
import NewsSection from "./components/newSection/NewsSection.tsx";
import ContactSection from "./components/contact/ContactSection.tsx";
import Footer from "./components/footer/Footer.tsx";
import FloatingMenu from "./components/menu/FloatingMenu.tsx";
import ImageSlider from "./components/ImageGallery/ImageGallery.tsx";

function App() {
	return (
		<>
			<FloatingMenu />
			<div id="header"><Header /></div>
			<div id="about"><AboutSection /></div>
			<div id="introduce"><IntroduceSection /></div>
			{/*<div id="foodtravel"><FoodTravelSection /></div>*/}
			<div id="gallery"><ImageSlider /></div>
			<div id="invest"><InvestSection /></div>
			<div id="projects"><ProjectsCard/></div>
			<div id="news"><NewsSection /></div>
			<div id="contact"><ContactSection/></div>
			<div id="footer"><Footer/></div>
		</>
	);
}
export default App;
