import React, { useState } from 'react';
import styles from './SchoolEvents.module.css';

type Event = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
};

type DateInfo = {
  day: number;
  month: string;
  weekday: string;
  fullDate: string;
};

const SchoolEvents = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date(2025, 6)); 

  const events: Event[] = [
    {
      id: 1,
      title: "Trip to the Zoo",
      date: "2025-07-05",
      time: "8:00 AM - 12:00 PM",
      location: "National Zoo",
      description: "Educational field trip to explore wildlife and nature"
    },
    {
      id: 2,
      title: "Repurpose Initiatives",
      date: "2025-07-06",
      time: "9:30 AM - 11:30 AM",
      location: "School Auditorium",
      description: "Sustainability workshop on creative repurposing"
    },
    {
      id: 3,
      title: "Engineer Best-of-breed Web-readiness",
      date: "2025-07-06",
      time: "6:00 PM - 9:30 PM",
      location: "Tech Center",
      description: "Advanced web development and engineering seminar"
    },
    {
      id: 4,
      title: "Annual Sports Day",
      date: "2025-07-10",
      time: "8:00 AM - 4:00 PM",
      location: "Main Stadium",
      description: "Inter-house sports competition and celebration"
    },
    {
      id: 5,
      title: "Science Fair",
      date: "2025-07-15",
      time: "10:00 AM - 6:00 PM",
      location: "Science Building",
      description: "Student science projects and innovations showcase"
    },
    {
      id: 6,
      title: "Cultural Festival",
      date: "2025-07-20",
      time: "5:00 PM - 10:00 PM",
      location: "School Grounds",
      description: "Celebration of diverse cultures and traditions"
    },
    {
      id: 7,
      title: "Cultural Festival",
      date: "2025-08-01",
      time: "5:00 PM - 10:00 PM",
      location: "School Grounds",
      description: "Celebration of diverse cultures and traditions"
    }
  ];

  const formatDate = (dateString: string): DateInfo => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      weekday: date.toLocaleDateString('en-US', { weekday: 'short' }),
      fullDate: date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' }),
    };
  };

  const navigateMonth = (direction: number) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() + direction);
    setCurrentMonth(newMonth);
  };

  const getFilteredEvents = (): Event[] => {
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getMonth() === currentMonth.getMonth() &&
             eventDate.getFullYear() === currentMonth.getFullYear();
    });
  };

  const filteredEvents = getFilteredEvents();

  return (
    <div className={styles.container}>
      {/* Date Filter */}
      <div className={styles.dateFilter}>
        <button className={styles.navButton} onClick={() => navigateMonth(-1)}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15,18 9,12 15,6"></polyline>
          </svg>
        </button>

        <div className={styles.currentMonth}>
          <div className={styles.monthYear}>
            {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </div>
          <div className={styles.eventCount}>
            <span>{filteredEvents.length}</span> events
          </div>
        </div>

        <button className={styles.navButton} onClick={() => navigateMonth(1)}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9,18 15,12 9,6"></polyline>
          </svg>
        </button>
      </div>

      {/* Timeline */}
      <div className={styles.timeline}>
        {filteredEvents.map((event, index) => {
          const dateInfo = formatDate(event.date);

          return (
            <div
              key={event.id}
              className={styles.timelineItem}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className={styles.dateCircle}>
                <div className={styles.dateDay}>{dateInfo.day}</div>
                <div className={styles.dateMonth}>{dateInfo.month}</div>
              </div>
              <div className={styles.timelineDot}></div>
              <div className={styles.eventCard}>
                <h3 className={styles.eventTitle}>{event.title}</h3>
                <p className={styles.eventDescription}>{event.description}</p>
                <div className={styles.eventDetails}>
                  <div className={styles.eventDetail}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12,6 12,12 16,14"></polyline>
                    </svg>
                    {event.time}
                  </div>
                  <div className={styles.eventDetail}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {event.location}
                  </div>
                </div>
                <div className={styles.eventAction}>
                  <div className={styles.eventDateSmall}>
                    {dateInfo.fullDate} • {dateInfo.weekday}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SchoolEvents;