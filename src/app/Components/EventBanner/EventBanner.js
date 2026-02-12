'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import styles from './EventBanner.module.css';

export default function EventBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [crackers, setCrackers] = useState([]);

  useEffect(() => {
    // Show banner after a short delay for smooth entrance
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    // Auto-close after 10 seconds
    const closeTimer = setTimeout(() => {
      handleClose();
    }, 10500);

    // Create realistic cracker effects - multiple types
    const crackerInterval = setInterval(() => {
      const crackerTypes = ['rocket', 'sparkler', 'flowerpot', 'chakra'];
      const randomType = crackerTypes[Math.floor(Math.random() * crackerTypes.length)];
      
      const newCracker = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        type: randomType,
        delay: Math.random() * 0.3,
        color: ['#ff6b35', '#ffd700', '#ff1493', '#00ff00', '#00bfff', '#ff4500', '#9400d3'][Math.floor(Math.random() * 7)],
      };
      setCrackers((prev) => [...prev, newCracker]);
      
      // Remove cracker after animation
      setTimeout(() => {
        setCrackers((prev) => prev.filter((c) => c.id !== newCracker.id));
      }, 3000);
    }, 250);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(closeTimer);
      clearInterval(crackerInterval);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      {/* Realistic Cracker Effects */}
      {crackers.map((cracker) => (
        <div
          key={cracker.id}
          className={`${styles.cracker} ${styles[cracker.type]}`}
          style={{
            left: `${cracker.left}%`,
            animationDelay: `${cracker.delay}s`,
            '--cracker-color': cracker.color,
          }}
        >
          {cracker.type === 'rocket' && (
            <>
              <div className={styles.rocketTrail}></div>
              <div className={styles.rocketBurst}></div>
            </>
          )}
          {cracker.type === 'sparkler' && (
            <div className={styles.sparklerEffect}></div>
          )}
          {cracker.type === 'flowerpot' && (
            <div className={styles.flowerpotSparks}></div>
          )}
          {cracker.type === 'chakra' && (
            <div className={styles.chakraSpin}></div>
          )}
        </div>
      ))}

      <div className={styles.banner}>
        {/* Close Button */}
        <button 
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Close banner"
        >
          <X size={28} />
        </button>

        {/* Marigold Flower Border */}
        <div className={styles.flowerBorder}>
          <div className={styles.flowerBorderTop}>
            🌼🌺🌼🌻🌼🌺🌼🌻🌼🌺🌼🌻🌼🌺🌼🌻🌼🌺🌼🌻🌼🌺🌼🌻🌼🌺🌼
          </div>
        </div>

        {/* Poster Content - 3 Column Layout */}
        <div className={styles.posterLayout}>
          {/* Left Image - Temple */}
          <div className={styles.leftImage}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/koil-1.png"
                alt="Sri Dharma Sastha Temple"
                fill
                className={styles.posterImg}
                priority
              />
            </div>
          </div>

          {/* Center Text Content */}
          <div className={styles.centerContent}>
            <div className={styles.decorativeFrame}>
              <div className={styles.frameTop}>❈</div>
              
              <div className={styles.eventText}>
                <h2 className={styles.mainEvent}>
                  12ஆம் ஆண்டு<br />
                  மகா கும்பாபிஷேகம்
                </h2>
                
                <div className={styles.andText}>மற்றும்</div>
                
                <h3 className={styles.subEvent}>
                  சாஸ்தா கலையரங்கம்<br />
                  திறப்பு விழா
                </h3>
                
                <div className={styles.dateText}>
                  நாள்: <span className={styles.dateHighlight}>25-03-2026</span>
                </div>
                
                <p className={styles.inviteText}>
                  அனைவரும் கலந்து கொண்டு விழாவை<br />
                  சிறப்பிக்குமாறு அன்புடன்<br />
                  அழைக்கப்படுகிறீர்கள்.
                </p>
              </div>
              
              <div className={styles.frameBottom}>❈</div>
            </div>
          </div>

          {/* Right Image - Community Hall */}
          <div className={styles.rightImage}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/hall-2.jpg"
                alt="Sastha Kalai Arangam"
                fill
                className={styles.posterImg}
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom Flower Border */}
        <div className={styles.flowerBorder}>
          <div className={styles.flowerBorderBottom}>
            🌼🌺🌼🌻🌼🌺🌼🌻🌼🌺🌼🌻🌼🌺🌼🌻🌼🌺🌼🌻🌼🌺🌼🌻🌼🌺🌼
          </div>
        </div>
      </div>
    </div>
  );
}
