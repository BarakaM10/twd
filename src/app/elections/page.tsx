'use client';

import { NavTop } from '../../components/Header/NavTop';
import { Footer } from "../../components/Footer/Footer";
import Elections from '../../components/Elections/Elections';


export default function Home() {
  return (
    <div>
      <NavTop />
      <Elections />
      <Footer />
    </div>
  );
}
