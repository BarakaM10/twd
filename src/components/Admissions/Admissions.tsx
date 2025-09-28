'use client';

import { 
  Phone, 
  Clock, 
  FileText, 
  Users, 
  Calendar, 
  CheckCircle, 
  GraduationCap, 
  Heart, 
  BookOpen, 
  Award,
  UserCheck,
  CreditCard,
  MessageSquare
} from 'lucide-react';
import styles from './Admissions.module.css';

export default function AdmissionsSection() {
  const requirements = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Required Documents",
      items: [
        "Birth Certificate (Original & Copy)",
        "Passport Photos (4 copies)",
        "Immunization Card",
        "Previous School Report (if any)",
        "Parent/Guardian ID Copy"
      ]
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Age Requirements",
      items: [
        "Nursery: 3 years old",
        "Kindergarten: 4 years old", 
        "Pre-Primary: 5 years old",
        "Must be toilet trained",
        "Basic communication skills"
      ]
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Fees & Payment",
      items: [
        "Application Fee: UGX 50,000",
        "Tuition varies by program",
        "Payment plans available",
        "Sibling discounts offered",
        "Scholarship opportunities"
      ]
    }
  ];

  const features = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Qualified Teachers",
      description: "Our experienced educators are passionate about early childhood development"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Small Class Sizes",
      description: "Maximum 15 children per class ensuring personalized attention"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Christian Values",
      description: "Nurturing character development through Christian principles and love"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Holistic Curriculum",
      description: "Comprehensive program addressing all areas of child development"
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Submit Application",
      description: "Complete our online application form with all required information and submit necessary documents."
    },
    {
      number: "2", 
      title: "School Visit & Interview",
      description: "Schedule a visit to tour our facilities and meet with our admissions team for a friendly interview."
    },
    {
      number: "3",
      title: "Enrollment Confirmation",
      description: "Receive acceptance notification and complete enrollment process with fee payment and orientation."
    }
  ];

  const galleryImages = [
    { src: "/wd.jpg", alt: "Happy children in classroom learning activities" },
    { src: "/wd2.jpg", alt: "Students participating in outdoor play time" },
    { src: "/wd3.jpg", alt: "Creative arts and crafts session" },
    { src: "/wd4.jpg", alt: "Reading corner with engaged students" }
  ];

  const handleApplyClick = () => {
    // This would typically navigate to the form page
    // For demo purposes, we'll just scroll to a form section or show an alert
    alert("This would navigate to the application form page");
  };

  return (
    <div className={styles.wrapper}>

      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.mainTitle}>Join Our Learning Family</h1>
            <p className={styles.heroDescription}>
              Begin your child's educational journey with us at The White Doves Kindergarten. 
              We provide a nurturing Christian environment where every child can grow, learn, 
              and develop their unique talents in preparation for a bright future.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>Why Choose Our Programs?</h2>
          <div className={styles.features}>
            {features.map((feature, index) => (
              <div
                key={index}
                className={styles.feature}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={styles.featureIcon}>
                  {feature.icon}
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Requirements Section */}
        <section className={styles.requirementsSection}>
          <h2 className={styles.sectionTitle}>Admission Requirements</h2>
          <p className={styles.subtitle}>Everything you need to know for a smooth application process</p>
          
          <div className={styles.requirementsGrid}>
            {requirements.map((requirement, index) => (
              <div 
                key={index}
                className={styles.requirementCard}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className={styles.requirementIcon}>
                  {requirement.icon}
                </div>
                <h3>{requirement.title}</h3>
                <ul className={styles.requirementList}>
                  {requirement.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className={styles.processSection}>
          <h2 className={styles.sectionTitle}>Application Process</h2>
          <p className={styles.subtitle}>Simple steps to secure your child's place in our school</p>
          
          <div className={styles.processSteps}>
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className={styles.processStep}
                style={{ animationDelay: `${index * 0.4}s` }}
              >
                <div className={styles.stepNumber}>
                  {step.number}
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

       
      </div>
    </div>
  );
}