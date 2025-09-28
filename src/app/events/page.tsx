'use client';

import styles from "./page.module.css";
import { NavTop } from '../../components/Header/NavTop';
import { Footer } from "../../components/Footer/Footer";
import SchoolEvents from "../../components/SchoolEvents/SchoolEvents";


export default function Home() {
  return (
    <div>
      <NavTop />
      <SchoolEvents/>
      <Footer />
    </div>
  ); 
}
