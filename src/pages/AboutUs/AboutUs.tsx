import Navbar from "../components/Navbar";
import AboutGarden from "./components/AboutItems";
import AboutItems from "./components/AboutGarden";

import bemutatkozo from "../../assets/images/bemutatkozo.png";
import bemutatokep from "../../assets/images/bemutatokep.jpg";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <AboutGarden bemutatkozo={bemutatkozo} />
      <AboutItems bemutatokep={bemutatokep} />
    </>
  );
}