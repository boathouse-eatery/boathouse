import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Menus } from "./pages/Menus";
import { LiveMusic } from "./pages/LiveMusic";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="menus" element={<Menus />} />
          <Route path="menus/kids" element={<Menus />} />
          <Route path="menus/desserts" element={<Menus />} />
          <Route path="live-music" element={<LiveMusic />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
