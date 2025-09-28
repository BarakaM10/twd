'use client';

import { NavTop } from '../../components/Header/NavTop';
import { Footer } from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";


export default function Home() {
  return (
    <div>
      <NavTop />
      <Form/>
      <Footer/>
    </div>
  );
}
