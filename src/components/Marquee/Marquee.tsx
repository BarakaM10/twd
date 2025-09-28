import { Box, Text, Group } from '@mantine/core';
import styles from './Marquee.module.css';

type MarqueeProps = {
  events: string[];
};

export function Marquee({ events }: MarqueeProps) {
  return (
    <section>
      <Box className={styles.marqueeWrapper}>
        <Group gap="0" className={styles.marqueeContent}>
          <Text fw={700} c="white" className={styles.heading}>
            <span>UPCOMING EVENTS</span>
          </Text>
          <div className={styles.marquee}>
            <div className={styles.marqueeInner}>
              {events.map((event, idx) => (
                <Text key={idx} span mx="md" c="dark" className={styles.marqueeText}>
                  {event}
                </Text>
              ))}
              {events.map((event, idx) => (
                <Text key={`duplicate-${idx}`} span mx="md" c="dark" className={styles.marqueeText}>
                  {event}
                </Text>
              ))}
            </div>
          </div>
        </Group>
      </Box>
    </section>
  );
}