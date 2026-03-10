// src/components/ProjectsLayout.tsx
import React from "react";
import EmpireCity from "./EmpireCity";
import TheGrandHanoi from "./TheGrandHanoi";
import RegentPQ from "./RegentPQ";
import ParkHyattPQ from "./ParkHyattPQ"
import NoBu from "./NoBu";
import Metropole from "./Metropole";
import MandarinOriental from "./MandarinOriental";
import LotteThuThiem from "./LotteThuThiem";
import HausDaLat from "./HausDaLat";
import GranMeliaNhaTrang from "./GranMeliaNhaTrang";
import GMSLake from "./GMSLake";
import GMSSea from "./GMSSea"
import "./ProjectsLayout.css";

const ProjectsCard: React.FC = () => {
    return (
        <section className="projects-layout">
            <div className="projects-grid">
                <EmpireCity />
                <TheGrandHanoi />
                <RegentPQ />
                <ParkHyattPQ />
                <NoBu />
                <Metropole />
                <MandarinOriental />
                <LotteThuThiem />
                <HausDaLat />
                <GranMeliaNhaTrang />
                <GMSLake />
                <GMSSea/>
                {/* Muốn thêm House5, House6... chỉ cần thêm vào đây */}
            </div>
        </section>
    );
};

export default ProjectsCard;