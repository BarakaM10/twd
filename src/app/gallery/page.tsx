'use client';

import { Header } from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GallerySection from "../../components/Gallery/Gallery";

export default function gallery(){
    return(
        <div>
            <Header/>
            <GallerySection/>
            <Footer/>
        </div>
    )
}