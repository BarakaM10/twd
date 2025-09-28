import { Box, Container, Grid, Text, Title, Button } from '@mantine/core';
import Image from 'next/image';
import styles from './About.module.css';

type AboutProps = {
  website?: {
    primary_color?: string;
    school_name?: string;
    about_school?: string;
  };
};

export function About({ website }: AboutProps) {
  const defaultAbout =
    'Esomelo is a one stop mobile first school management solution for all your school administration needs. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, placeat velit. Esse vel quas, accusamus voluptatem saepe alias. Aut consectetur, facilis vitae id corrupti suscipit! Numquam atque hic sequi suscipit!';

  return (
    <section>
    <Container className={styles.aboutContainer} size="lg">
      <Title order={2} mb="md" className={styles.heading}>
        About{' '}
        <Text
          span
          c={website?.primary_color || 'blue'}
          className={styles.schoolName}
        >
          {website?.school_name || 'Esomelo Primary School'}
        </Text>
      </Title>
      <div className={styles.featurette} id="about">
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <div className={styles.textCol}>
              <Text
                className={styles.lead}
                dangerouslySetInnerHTML={{
                  __html: website?.about_school || defaultAbout,
                }}
              />
              <Button className={styles.button1} variant="filled" size="md" radius="md">MORE ABOUT US</Button>
            </div>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <div className={styles.imageCol}>
              <Image
                src="/about.jpg"
                alt="About"
                width={420}
                height={350}
                className={styles.aboutImage}
              />
            </div>
          </Grid.Col>
        </Grid>
      </div>
    </Container>
    </section>
  );
}