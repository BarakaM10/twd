import React, { useState, useEffect } from 'react';
import { Crown, Users, Trophy, Sparkles, Star, Award, Medal, TrendingUp } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import styles from './Elections.module.css';

interface Candidate {
  name: string;
  votes: number;
}

interface Position {
  title: string;
  winner: Candidate;
  otherCandidates: Candidate[];
  image: string;
  barGradientClass: string;
  overlayGradientClass: string;
  textGradientClass: string;
}

const Elections = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const headPrefect: Position = {
    title: "Head Prefect",
    winner: { name: "Kato Paul", votes: 1247 },
    otherCandidates: [
      { name: "Ssimbwa Bright", votes: 982 },
      { name: "Naluwujja Hope", votes: 743 },
      { name: "Nambi Allen", votes: 621 }
    ],
    image: "/hp.jpg",
    barGradientClass: styles.barGradientHeadPrefect,
    overlayGradientClass: styles.overlayGradientHeadPrefect,
    textGradientClass: styles.textGradientHeadPrefect
  };

  const headBoyGirl: Position[] = [
    {
      title: "Head Boy",
      winner: { name: "Bananuka James", votes: 1156 },
      otherCandidates: [
        { name: "Kivumbi Steven", votes: 834 },
        { name: "Adeke Kenneth", votes: 672 }
      ],
      image: "/e1.jpg",
      barGradientClass: styles.barGradientHeadBoy,
      overlayGradientClass: styles.overlayGradientHeadBoy,
      textGradientClass: styles.textGradientHeadBoy
    },
    {
      title: "Head Girl",
      winner: { name: "Butele Viola", votes: 1203 },
      otherCandidates: [
        { name: "Akampurira Edna", votes: 896 },
        { name: "Katwesigye Jane", votes: 645 }
      ],
      image: "/e4.jpg",
      barGradientClass: styles.barGradientHeadGirl,
      overlayGradientClass: styles.overlayGradientHeadGirl,
      textGradientClass: styles.textGradientHeadGirl
    }
  ];

  const ggg : Position[] = [
    {
      title: "Sports Prefect",
      winner: { name: "Katwesigye Jane", votes: 892 },
      otherCandidates: [
        { name: "Butele Viola", votes: 567 },
        { name: "Akampurira Edna", votes: 432 }
      ],
      image: "/e3.jpg",
      barGradientClass: styles.barGradientSports,
      overlayGradientClass: styles.overlayGradientSports,
      textGradientClass: styles.textGradientSports
    },
    {
      title: "Sanitation Prefect",
      winner: { name: "Kaweesa Steven", votes: 1034 },
      otherCandidates: [
        { name: "Akampurira Edna", votes: 678 },
        { name: "Butele Viola", votes: 523 }
      ],
      image: "/e2.avif",
      barGradientClass: styles.barGradientAcademic,
      overlayGradientClass: styles.overlayGradientAcademic,
      textGradientClass: styles.textGradientAcademic
    },
    {
      title: "Entertainment Prefect",
      winner: { name: "Akampurira Edna", votes: 756 },
      otherCandidates: [
        { name: "Kaweesa Steven", votes: 589 },
        { name: "Adeke Kenneth", votes: 445 }
      ],
      image: "/e5.jpg",
      barGradientClass: styles.barGradientEntertainment,
      overlayGradientClass: styles.overlayGradientEntertainment,
      textGradientClass: styles.textGradientEntertainment
    },
    {
      title: "Discipline Prefect",
      winner: { name: "Adeke Kenneth", votes: 923 },
      otherCandidates: [
        { name: "Kaweesa Steven", votes: 612 },
        { name: "Butele Viola", votes: 478 }
      ],
      image: "/e6.avif",
      barGradientClass: styles.barGradientDiscipline,
      overlayGradientClass: styles.overlayGradientDiscipline,
      textGradientClass: styles.textGradientDiscipline
    }
  ];

  const renderCandidates = (candidates: Candidate[]) => (
    <div className={styles.candidatesContainer}>
      {candidates.map((candidate, index) => (
        <div key={index} className={styles.candidateItem}>
          <span className={styles.candidateName}>{candidate.name}</span>
          <span className={styles.voteBadge}>
            {candidate.votes.toLocaleString()} votes
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <div className={styles.heroSection}>

        <div className={styles.marqueeInner}>
          <div className={styles.heroContent}>
            <div className={`${styles.heroInner} ${isVisible ? styles.visible : ''}`}>
              <div className={styles.trophyContainer}>
                <Trophy className={styles.trophyIcon} />
              </div>
              <h1 className={styles.heroTitle}>
                Election Results 2025</h1>
              <p className={styles.heroSubtitle}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString('Congratulations to all our winners and participants!')
                      .pauseFor(200)
                      // .deleteAll()
                      .start()
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mainContainer}>
        {/* Head Prefect Section */}
        <div className={`${styles.sectionContainer} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.headPrefectCard}>
            <div className={`${styles.colorBar} ${headPrefect.barGradientClass}`}></div>
            <div className={styles.cardContent}>
              <div className={styles.imageContainer}>
                  <img 
                    src={headPrefect.image} 
                    alt={headPrefect.winner.name}
                    className={styles.cardImage}
                  />
              </div>
              
              <div className={styles.textContainer}>
                <div className={styles.titleContainer}>
                  <h2 className={styles.positionTitle}>
                    {headPrefect.title}
                  </h2>
                </div>
                
                <h3 className={`${styles.winnerName} ${headPrefect.textGradientClass}`}>
                  {headPrefect.winner.name}
                </h3>
                
                <div className={styles.voteContainer}>
                  <Trophy className={styles.trophyIconSmall} />
                  <span className={styles.voteCount}>
                    {headPrefect.winner.votes.toLocaleString()} votes
                  </span>
                </div>
                
                <div className={styles.otherCandidates}>
                  <h4 className={styles.otherCandidatesTitle}>
                    <Users className={styles.usersIconSmall} />
                    Other Candidates
                  </h4>
                  {renderCandidates(headPrefect.otherCandidates)}
                </div>
              </div>
            </div>
          </div>
        </div>
              

        {/* Head Boy and Head Girl Section */}
        <div className={`${styles.sectionContainer} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.sectionHeader}>
          </div>
          
          <div className={styles.headBoyGirlGrid}>
            {headBoyGirl.map((position, index) => (
              <div 
                key={index}
                className={`${styles.headPositionCard} ${isVisible ? styles.visible : ''} ${hoveredCard === index ? styles.hoveredCard : ''}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`${styles.colorBar} ${position.barGradientClass}`}></div>
                <div className={styles.cardContentSmall}>
                  <div className={styles.headPositionContent}>
                      <div className={styles.smallImageContainer}>
                        <img 
                          src={position.image} 
                          alt={position.winner.name}
                          className={`${styles.smallCardImage} ${hoveredCard === index ? styles.imageHover : ''}`}
                        />
                      </div>                    
                    <div className={styles.headPositionText}>
                      <h3 className={styles.headPositionTitle}>
                        {position.title}
                      </h3>
                      <h4 className={`${styles.headWinnerName} ${position.textGradientClass}`}>
                        {position.winner.name}
                      </h4>
                      <div className={styles.headVoteContainer}>
                        <Trophy className={styles.smallTrophyIcon} />
                        <span className={styles.headVoteCount}>
                          {position.winner.votes.toLocaleString()} votes
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.headOtherCandidates}>
                    <h5 className={styles.headOtherTitle}>Other Candidates:</h5>
                    {renderCandidates(position.otherCandidates)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elections;