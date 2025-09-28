import { Card, Text, Title, Group, Button, Container, Grid } from '@mantine/core';
import { IconCalendar, IconMapPin, IconClock } from '@tabler/icons-react';
import styles from './EventsSection.module.css';

type Event = {
  name: string;
  date: string;
  details: string;
  location?: string;
  time?: string;
};

type EventsSectionProps = {
  events: Event[];
};

export function EventsSection({ events }: EventsSectionProps) {
  return (
    <section className={styles.section}>
      <Container size="lg">
        <Title order={2} className={styles.heading}>
          Upcoming <span>Events</span>
        </Title>
        <Grid>
          {events.map((event, idx) => (
            <Grid.Col key={idx} span={{ base: 12, sm: 6, md: 4 }}>
              <Card shadow="md" radius="lg" className={styles.card}>
                <div className={styles.cardHeader}>
                  <Group gap="xs" mb="sm">
                    <div className={styles.iconWrapper}>
                      <IconCalendar size={20} className={styles.icon} />
                    </div>
                    <Text fw={600} className={styles.eventName}>{event.name}</Text>
                  </Group>
                </div>
                
                <div className={styles.cardContent}>
                  <div className={styles.eventInfo}>
                    <Group gap="xs" mb="xs">
                      <IconCalendar size={16} className={styles.smallIcon} />
                      <Text size="sm" className={styles.date}>
                        {event.date}
                      </Text>
                    </Group>
                    
                    {event.time && (
                      <Group gap="xs" mb="xs">
                        <IconClock size={16} className={styles.smallIcon} />
                        <Text size="sm" className={styles.time}>
                          {event.time}
                        </Text>
                      </Group>
                    )}
                    
                    {event.location && (
                      <Group gap="xs" mb="xs">
                        <IconMapPin size={16} className={styles.smallIcon} />
                        <Text size="sm" className={styles.location}>
                          {event.location}
                        </Text>
                      </Group>
                    )}
                  </div>
                </div>
                
                {/* <div className={styles.cardFooter}>
                  <Button variant="light" size="xs" radius="md" className={styles.cardButton}>
                    Learn More
                  </Button>
                </div> */}
              </Card>
            </Grid.Col>
          ))}
        </Grid>
        
        <div className={styles.buttonContainer}>
          <Button className={styles.button} variant="filled" size="md" radius="md">
            VIEW ALL EVENTS
          </Button>
        </div>
      </Container>
    </section>
  );
}