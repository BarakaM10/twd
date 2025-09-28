import React, { useState, useEffect } from 'react';
import styles from './Live.module.css';
import Timer from '../Timer/Timer';

// Sample data structure - replace with your actual data source
const votingData = [
  {
    position: "Head Prefect",
    candidates: [
      { name: "Kasingwire James", votes: 225 },
      { name: "Kawala Harris", votes: 140 },
      { name: "Werikhe Fahad", votes: 120 }
    ],
    totalVotes: 485,
    expectedVotes: 500,
    completion: 70
  },
  {
    position: "Deputy Head Prefect",
    candidates: [
      { name: "Nakato Sarah", votes: 180 },
      { name: "Mugisha Peter", votes: 165 },
      { name: "Namuli Grace", votes: 95 }
    ],
    totalVotes: 440,
    expectedVotes: 500,
    completion: 88
  },
  {
    position: "Sports Prefect",
    candidates: [
      { name: "Okello Samuel", votes: 210 },
      { name: "Asiimwe Rita", votes: 190 },
      { name: "Kato Moses", votes: 85 }
    ],
    totalVotes: 485,
    expectedVotes: 500,
    completion: 97
  }
];

interface CircularProgressProps {
  percentage: number;
  size?: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ percentage, size = 60 }) => {
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className={styles.circularProgress}>
      <svg width={size} height={size} className={styles.progressSvg}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          className={styles.progressBackground}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          className={styles.progressForeground}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <div className={styles.progressText}>
        {percentage}%
      </div>
    </div>
  );
};

const Live: React.FC = () => {
  // Calculate totals
  const totalVoters = 500;
  const countedVotes = votingData.reduce((sum, position) => sum + position.totalVotes, 0) / votingData.length;
  const turnout = Math.round((countedVotes / totalVoters) * 100);

  return (
    <div className={styles.liveSection}>
      <div className={styles.heading}>
        <Timer />
      </div>

      <div className={styles.liveHeader}>
        <div className={styles.Total}>
          <span className={styles.description}>Total Voters</span>
          <span className={styles.totalVoters}>{totalVoters}</span>
        </div>
        <div className={styles.Voters}>
          <span className={styles.description}>Counted Votes</span>
          <span className={styles.voters}>{Math.round(countedVotes)}</span>
        </div>
        <div className={styles.Turnout}>
          <span className={styles.description}>Turnout</span>
          <span className={styles.turnout}>{turnout}%</span>
        </div>
      </div>

      {/* Tally Sections */}
      {votingData.map((position, index) => {
        // Sort candidates by votes in descending order
        const sortedCandidates = [...position.candidates].sort((a, b) => b.votes - a.votes);
        
        return (
          <div key={index} className={styles.tallyContainer}>
            <div className={styles.tallyHeader}>
              <div className={styles.position}>
                <h2 className={styles.post}>{position.position}</h2>
                <p className={styles.voteSubtitle}>{position.totalVotes} Votes counted</p>
              </div>
              <CircularProgress percentage={position.completion} />
            </div>
            
            <div className={styles.tallyCounts}>
              {sortedCandidates.map((candidate, candidateIndex) => {
                const isLeading = candidateIndex === 0;
                const votePercentage = position.totalVotes > 0 ? Math.round((candidate.votes / position.totalVotes) * 100) : 0;
                
                return (
                  <div
                    key={candidateIndex}
                    className={`${styles.tallyCounter} ${isLeading ? styles.leading : styles.regular}`}
                  >
                    <div className={styles.candidateInfo}>
                      {isLeading && (
                        <div className={styles.rankBadge}>
                          <span className={styles.rankNumber}>1</span>
                        </div>
                      )}
                      <div className={styles.candidateDetails}>
                        <span className={`${styles.name} ${isLeading ? styles.leading : styles.regular}`}>
                          {candidate.name}
                        </span>
                        <div className={styles.votePercentage}>{votePercentage}%</div>
                      </div>
                    </div>
                    
                    <div className={styles.voteSection}>
                      {/* Vote bar */}
                      <div className={styles.voteBar}>
                        <div
                          className={`${styles.voteProgress} ${isLeading ? styles.leading : styles.regular}`}
                          style={{ width: `${votePercentage}%` }}
                        />
                      </div>
                      
                      <span className={`${styles.tallyCount} ${isLeading ? styles.leading : styles.regular}`}>
                        {candidate.votes}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Live;