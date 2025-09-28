'use client' ;

import HeroSection from "../components/Hero/Hero";
import { Header } from "../components/Header/Header";
import AboutSection from "../components/About/About";
import Footer from "../components/Footer/Footer";

export default function About1(){
    const photos = [
  { src: "/child.jpg", alt: "Sports Day", title: "Sports Day", category: "sports" },
  { src: "/child1.jpg", alt: "Science Fair", title: "Science Fair", category: "events" },
  { src: "/child3.jpg", alt: "Classroom Activity", title: "Classroom Activity", category: "students" },
  { src: "/child5.jpg", alt: "Art Exhibition", title: "Art Exhibition", category: "events" },
  { src: "/child4.png", alt: "Art Exhibition", title: "Art Exhibition", category: "events" },
  { src: "/sports2.jpg", alt: "Co-curricular", title: "Co-curricular", category: "sports" },
  { src: "/vd.jpg", alt: "Visitation", title: "Visitation", category: "campus" },
];
    return (
        <div>
            <Header/>
            <HeroSection />
            <AboutSection />
            <Footer/>
        </div>
    );
}