'use client';

import { NavTop } from '../../components/Header/NavTop';
import AboutUs from "../../components/AboutUs/AboutUs";
import { Footer } from "../../components/Footer/Footer";


export default function Home() {
  return (
    <div>
      <NavTop />
      <AboutUs />
      <Footer/>
    </div>
  );
}