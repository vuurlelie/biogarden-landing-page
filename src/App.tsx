import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./pages/components/Layout";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Items from "./pages/Items/Items";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import NotFound from "./pages/components/NotFound";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/bemutatkozas" element={<AboutUs />} />
          <Route path="/termekeink" element={<Items />} />
          <Route path="/termekeink/:id" element={<ItemDetails />} /> {/* ← itt :id */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}