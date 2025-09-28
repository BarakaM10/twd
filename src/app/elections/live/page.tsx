'use client';

import { NavTop } from '../../../components/Header/NavTop';
import { Footer } from "../../../components/Footer/Footer";
import Live from "../../../components/Live/Live";


export default function Home() {
  return (
    <div>
      <NavTop />
      <Live />
      <Footer/>
    </div>
  );
}
