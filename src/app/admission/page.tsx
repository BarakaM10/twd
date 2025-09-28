'use client';

import { Header } from "../../components/Header/Header";
import AdmissionsSection  from "../../components/Admissions/Admissions";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";

export default function admission(){
    return(
        <div>
            <Header/>
            <AdmissionsSection/>
            <Form/>
            <Footer/>
        </div>
    )
}