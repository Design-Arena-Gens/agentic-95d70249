'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.35, 0.5], [0, 1, 0])
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.65, 0.8], [0, 1, 0])
  const opacity4 = useTransform(scrollYProgress, [0.75, 0.95], [0, 1])

  return (
    <div ref={containerRef} style={{ height: '400vh', position: 'relative' }}>
      {/* Scene 1: Making the bed */}
      <motion.section
        style={{ opacity: opacity1 }}
        className="scene"
      >
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="content-wrapper"
        >
          <div className="scene-content">
            <motion.div
              className="hands-bed"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="bed-visual">
                <div className="pillow"></div>
                <div className="blanket"></div>
                <div className="sheets"></div>
              </div>
            </motion.div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Start Fresh
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Making the bed with intention
            </motion.p>
          </div>
          <div className="light-overlay"></div>
        </motion.div>
      </motion.section>

      {/* Scene 2: Coffee */}
      <motion.section
        style={{ opacity: opacity2 }}
        className="scene"
      >
        <div className="content-wrapper">
          <div className="scene-content">
            <motion.div
              className="coffee-scene"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <div className="coffee-cup">
                <motion.div
                  className="steam"
                  animate={{
                    y: [-20, -60],
                    opacity: [0.6, 0],
                    scale: [1, 1.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
                <motion.div
                  className="steam steam-2"
                  animate={{
                    y: [-20, -60],
                    opacity: [0.5, 0],
                    scale: [1, 1.3]
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 0.5
                  }}
                />
                <div className="cup-body">
                  <div className="coffee-liquid"></div>
                </div>
                <div className="cup-handle"></div>
              </div>
              <div className="sunlight-rays"></div>
            </motion.div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Morning Warmth
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Golden hour in a cup
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Scene 3: Skincare */}
      <motion.section
        style={{ opacity: opacity3 }}
        className="scene"
      >
        <div className="content-wrapper">
          <div className="scene-content">
            <motion.div
              className="bathroom-scene"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <div className="skincare-shelf">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="bottle"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="bottle-cap"></div>
                    <div className="bottle-body"></div>
                    <div className="bottle-shine"></div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="water-droplets"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="droplet"
                    style={{ left: `${20 + i * 10}%` }}
                    animate={{
                      y: [0, 40],
                      opacity: [1, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.2,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Self Care Ritual
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Gentle cleansing, sparkling fresh
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Scene 4: Breakfast */}
      <motion.section
        style={{ opacity: opacity4 }}
        className="scene"
      >
        <div className="content-wrapper">
          <div className="scene-content">
            <motion.div
              className="breakfast-scene"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              <div className="breakfast-table">
                <motion.div
                  className="bowl"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bowl-rim"></div>
                  <div className="bowl-contents"></div>
                  <motion.div
                    className="milk-pour"
                    animate={{
                      height: ['0%', '100%'],
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                  />
                </motion.div>
                <div className="fruits">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`fruit fruit-${i}`}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: i * 0.15,
                        duration: 0.6
                      }}
                      animate={{
                        rotate: [0, 5, 0, -5, 0],
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Nourish
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              A beautiful start to the day
            </motion.p>
          </div>
        </div>
      </motion.section>

      <style jsx>{`
        .scene {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        .content-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .scene-content {
          text-align: center;
          z-index: 2;
        }

        h2 {
          font-size: 4rem;
          font-weight: 300;
          color: #6b5b5b;
          letter-spacing: 2px;
          margin: 2rem 0 1rem;
          text-shadow: 0 2px 10px rgba(255, 255, 255, 0.8);
        }

        p {
          font-size: 1.5rem;
          color: #9b8b8b;
          font-weight: 300;
          letter-spacing: 1px;
        }

        /* Bed Scene */
        .hands-bed {
          width: 400px;
          height: 300px;
          margin: 0 auto;
          position: relative;
        }

        .bed-visual {
          width: 100%;
          height: 100%;
          position: relative;
          filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.1));
        }

        .pillow {
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 150px;
          height: 80px;
          background: linear-gradient(135deg, #fff5f5 0%, #ffe4e4 100%);
          border-radius: 40px;
          box-shadow: 0 10px 30px rgba(255, 182, 193, 0.3);
        }

        .blanket {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 300px;
          height: 150px;
          background: linear-gradient(135deg, #ffd1dc 0%, #ffb6c1 100%);
          border-radius: 20px;
          box-shadow: 0 15px 40px rgba(255, 182, 193, 0.4);
        }

        .sheets {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          width: 280px;
          height: 20px;
          background: linear-gradient(90deg, #ffffff 0%, #fff8f8 100%);
          border-radius: 10px;
        }

        .light-overlay {
          position: absolute;
          top: -50%;
          right: -20%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(255, 247, 230, 0.6) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Coffee Scene */
        .coffee-scene {
          position: relative;
          width: 300px;
          height: 400px;
          margin: 0 auto;
        }

        .coffee-cup {
          position: relative;
          width: 200px;
          height: 250px;
          margin: 0 auto;
        }

        .cup-body {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 180px;
          height: 220px;
          background: linear-gradient(135deg, #fff8f0 0%, #ffe4d1 100%);
          border-radius: 0 0 90px 90px;
          box-shadow:
            0 20px 60px rgba(139, 69, 19, 0.2),
            inset 0 -10px 20px rgba(139, 69, 19, 0.1);
        }

        .coffee-liquid {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 160px;
          height: 180px;
          background: linear-gradient(135deg, #8b6f47 0%, #6b4423 100%);
          border-radius: 0 0 80px 80px;
        }

        .cup-handle {
          position: absolute;
          right: -30px;
          bottom: 80px;
          width: 60px;
          height: 100px;
          border: 15px solid #ffe4d1;
          border-left: none;
          border-radius: 0 50px 50px 0;
        }

        .steam {
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 80px;
          background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.6) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(10px);
        }

        .steam-2 {
          left: 60%;
          width: 50px;
        }

        .sunlight-rays {
          position: absolute;
          top: -100px;
          right: -100px;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(255, 223, 186, 0.4) 0%, transparent 60%);
          filter: blur(20px);
        }

        /* Bathroom Scene */
        .bathroom-scene {
          width: 500px;
          height: 400px;
          margin: 0 auto;
          position: relative;
        }

        .skincare-shelf {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          gap: 20px;
          height: 250px;
          margin-bottom: 50px;
        }

        .bottle {
          position: relative;
          width: 60px;
          height: 150px;
          cursor: pointer;
        }

        .bottle:nth-child(2) { height: 180px; }
        .bottle:nth-child(3) { height: 200px; }
        .bottle:nth-child(4) { height: 170px; }
        .bottle:nth-child(5) { height: 160px; }

        .bottle-cap {
          width: 100%;
          height: 25px;
          background: linear-gradient(135deg, #e8e8e8 0%, #d0d0d0 100%);
          border-radius: 10px 10px 0 0;
          margin-bottom: 5px;
        }

        .bottle-body {
          width: 100%;
          height: calc(100% - 30px);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 240, 255, 0.8) 100%);
          border-radius: 15px;
          box-shadow:
            0 10px 30px rgba(158, 200, 230, 0.3),
            inset -5px 0 15px rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(5px);
        }

        .bottle-shine {
          position: absolute;
          top: 30px;
          left: 15%;
          width: 30%;
          height: 60%;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, transparent 100%);
          border-radius: 10px;
          pointer-events: none;
        }

        .water-droplets {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 100px;
        }

        .droplet {
          position: absolute;
          width: 8px;
          height: 12px;
          background: radial-gradient(ellipse at center, rgba(180, 220, 255, 0.9) 0%, rgba(200, 230, 255, 0.6) 100%);
          border-radius: 50% 50% 50% 0;
          transform: rotate(45deg);
          filter: drop-shadow(0 2px 4px rgba(100, 180, 230, 0.4));
        }

        /* Breakfast Scene */
        .breakfast-scene {
          width: 500px;
          height: 400px;
          margin: 0 auto;
          position: relative;
        }

        .breakfast-table {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bowl {
          position: relative;
          width: 200px;
          height: 120px;
          z-index: 2;
        }

        .bowl-rim {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          height: 40px;
          background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
          border-radius: 100px 100px 0 0;
          box-shadow:
            0 5px 20px rgba(0, 0, 0, 0.1),
            inset 0 -5px 10px rgba(0, 0, 0, 0.05);
        }

        .bowl-contents {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 180px;
          height: 90px;
          background: linear-gradient(135deg, #fff9f0 0%, #f5e6d3 100%);
          border-radius: 0 0 90px 90px;
          box-shadow: inset 0 10px 20px rgba(218, 165, 32, 0.2);
        }

        .milk-pour {
          position: absolute;
          top: -80px;
          left: 50%;
          transform: translateX(-50%);
          width: 15px;
          height: 0;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 100%);
          border-radius: 10px;
          filter: blur(1px);
        }

        .fruits {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .fruit {
          position: absolute;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .fruit-0 {
          top: 20%;
          left: 10%;
          background: radial-gradient(circle at 30% 30%, #ff6b9d 0%, #c9184a 100%);
        }

        .fruit-1 {
          top: 15%;
          right: 15%;
          width: 45px;
          height: 45px;
          background: radial-gradient(circle at 30% 30%, #ffbe0b 0%, #fb8500 100%);
        }

        .fruit-2 {
          bottom: 25%;
          left: 15%;
          width: 55px;
          height: 55px;
          background: radial-gradient(circle at 30% 30%, #4ecdc4 0%, #1a7a6f 100%);
        }

        .fruit-3 {
          bottom: 20%;
          right: 10%;
          background: radial-gradient(circle at 30% 30%, #ff6b9d 0%, #c9184a 100%);
        }

        .fruit-4 {
          top: 40%;
          left: 5%;
          width: 40px;
          height: 40px;
          background: radial-gradient(circle at 30% 30%, #a7c957 0%, #6a994e 100%);
        }

        .fruit-5 {
          top: 45%;
          right: 8%;
          width: 42px;
          height: 42px;
          background: radial-gradient(circle at 30% 30%, #ffbe0b 0%, #fb8500 100%);
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 2.5rem;
          }

          p {
            font-size: 1.2rem;
          }

          .hands-bed,
          .coffee-scene,
          .bathroom-scene,
          .breakfast-scene {
            transform: scale(0.7);
          }
        }
      `}</style>
    </div>
  )
}
