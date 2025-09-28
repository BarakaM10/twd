'use client';
import { Footer } from "../components/Footer/Footer";
import { NavTop } from "../components/Header/NavTop";
import Hero from "../components/Hero";
import { About } from "../components/About/About";
import { Marquee } from "../components/Marquee/Marquee";
import { EventsSection } from "../components/EventsSection/EventsSection";
import { Gallery } from "../components/Gallery/Gallery";
import { Gallery1 } from "../components/Gallery1/Gallery1";
import { Divider, Container } from '@mantine/core';
import { Contact } from "../components/Contact/Contact";
import { useRouter } from 'next/navigation';

const events = [
    'PTA Meeting on July 10th',
    'Midterm Exams start August 1st',
    'Sports Day: September 5th',
    'New Library Opening Soon!',
  ];

const eventsSection = [
  {
    name: "PTA Meeting",
    date: "July 10th",
    details: "Parents and teachers meet to discuss student progress and school updates.",
  },
  {
    name: "Midterm Exams",
    date: "August 1st",
    details: "All classes will have their midterm exams. Timetable will be shared soon.",
  },
  {
    name: "Sports Day",
    date: "September 5th",
    details: "A day full of fun and sports activities for all students.",
  },
];

const photos = [
  { src: "/child.jpg", alt: "Sports Day", title: "Sports Day", category: "sports" },
  { src: "/child1.jpg", alt: "Science Fair", title: "Science Fair", category: "events" },
  { src: "/child3.jpg", alt: "Classroom Activity", title: "Classroom Activity", category: "students" },
  { src: "/child5.jpg", alt: "Art Exhibition", title: "Art Exhibition", category: "events" },
  { src: "/child4.png", alt: "Art Exhibition", title: "Art Exhibition", category: "events" },
  { src: "/sports2.jpg", alt: "Co-curricular", title: "Co-curricular", category: "sports" },
  { src: "/vd.jpg", alt: "Visitation", title: "Visitation", category: "campus" },
];

export default function Home() {
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    // Navigate to media page with category parameter
    router.push(`/media?category=${category}`);
  };

  return (
    <div>
      <NavTop/>
      <Hero />
      <Marquee events={events} />
      <Container size="xl">
        <Divider my="sm" size="xs" color="#d9d9d9" />
      </Container>
      <About />
      <Container size="xl">
        <Divider my="sm" size="xs" color="#d9d9d9"  />
      </Container>
      <EventsSection events={eventsSection} />
      <Container size="xl">
        <Divider my="sm" size="xs" color="#d9d9d9" />
      </Container>
      <Gallery1 onCategoryClick={handleCategoryClick} />
      <Contact />
      <Footer/>
    </div>
  );
}