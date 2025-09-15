import Navbar from "../components/Navbar";
import AboutGarden from "./components/AboutGarden";
import AboutItems from "./components/AboutItems";

import bemutatkozo from "../../assets/images/bemutatkozo.png";
import bemutatokep from "../../assets/images/bemutatokep.jpg";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <AboutItems bemutatkozo={bemutatkozo} />
      <AboutGarden bemutatokep={bemutatokep} />
    </>
  );
}