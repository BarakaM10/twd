import { Container, Grid, Text, TextInput, Textarea, Button, Stack } from '@mantine/core';
import { IconPhone, IconMail, IconMapPin } from '@tabler/icons-react';
import classes from './Contact.module.css';

const SchoolLogo = ({ size = 30 }: { size?: number }) => (
  <img src="/esomelologo.png" alt="School Logo" width={size} height={size} />
);

export function Contact() {
  return (
    <section className={classes.contact}>
      <Container size="lg">
        <Text className={classes.mainTitle} ta="center" mb="xl">
          Contact <span>Information</span>
        </Text>
        
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="md">
              <div className={classes.infoRow}>
                <Container className={classes.inner}>
                  <div className={classes.logo}>
                    {<SchoolLogo size={200} /> }
                    {/* Put the download links here */}
                  </div>
                </Container>
                <div className={classes.contactInfo}>
                  <div className={classes.contactItem}>
                    <IconPhone size={20} className={classes.icon} />
                    <Text>Tel: +256000000000</Text>
                  </div>
                  <div className={classes.contactItem}>
                    <IconMail size={20} className={classes.icon} />
                    <Text>P.O.Box 0000 Kampala, Uganda</Text>
                  </div>
                  <div className={classes.contactItem}>
                    <IconMapPin size={20} className={classes.icon} />
                    <Text>Location: Kyanja, Kampala</Text>
                  </div>
                </div>
              </div>

              <div className={classes.formSection}>
                <Text className={classes.formTitle} mb="md">
                  Fill contact form
                </Text>
                
                <form className={classes.form}>
                  <TextInput
                    label="Name"
                    placeholder="e.g John Doe"
                    required
                    mb="sm"
                  />
                  
                  <Grid>
                    <Grid.Col span={6}>
                      <TextInput
                        label="Email address"
                        placeholder="e.g name@example.com"
                        required
                      />
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <TextInput
                        label="Phone number"
                        placeholder="e.g. 0771123456"
                        required
                      />
                    </Grid.Col>
                  </Grid>
                  
                  <Textarea
                    label="Message"
                    placeholder="Message here"
                    required
                    rows={4}
                    mt="sm"
                    mb="md"
                  />
                  
                  <Button type="submit" fullWidth>
                    Send Message
                  </Button>
                </form>
              </div>
            </Stack>
          </Grid.Col>
          
          <Grid.Col span={{ base: 12, md: 6 }}>
            <div className={classes.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7254972185265!2d32.5925928!3d0.3908319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db19104d87157%3A0x931d2dc657b25d5d!2sBodastage%20Solutions!5e0!3m2!1sen!2sug!4v1752645203331!5m2!1sen!2sug"
                className={classes.map}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Esomelo Primary School Location"
              />
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
}
