import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { styles } from '../styles'
import { textVariant, fadeIn } from '../utils/motion'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Tech = () => {
  const [meterValue, setMeterValue] = useState(0)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        if (meterValue < 100) {
          setMeterValue(meterValue + 1)
        }
      }, 3)

      return () => clearInterval(interval)
    }
  }, [inView, meterValue])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      {
        threshold: 0.5,
      }
    )

    observer.observe(document.querySelector('#tech'))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>What I know</p>
        <h2 className={`${styles.sectionHeadText}`}>Skill-o-meter.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Think of each skill as a tool in my toolbox, ready to be used to tackle any challenge that comes my way.
          From programming languages to frameworks, I have a wide range of skills that I can use to build your project.
          Each skill has a skill-meter that shows my level of expertise in that particular skill. With my skills by your side, there's no puzzle we can't solve!
        </motion.p>
      </div>

      <div className="flex flex-col items-center justify-center w-full h-full mt-20">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-row items-center justify-between w-full h-12 mb-4"
            variants={fadeIn("right", "spring", 0.1 * index, 0.75)}
          >
            <div className="flex flex-row items-center justify-start w-1/2 h-full">
              <div
                className="flex items-center justify-center w-10 h-10 mr-4 rounded-full"
                style={{
                  backgroundColor: tech.color,
                  filter: tech.name === "Three JS" || tech.name === "OpenAI" || tech.name === "AWS" ? "invert(1)" : "none",
                }}
              >
                <img
                src={tech.icon}
                alt={tech.name}
                className="w-8 h-8"
              />
              </div>
              <p className="text-xl font-bold text-white">{tech.name}</p>
            </div>
            
            <div className="flex flex-col w-1/2 h-10">
              <p className="text-sm text-white text-right">{meterValue > tech.level ? tech.level : meterValue}%</p>
              <meter
                className="w-full h-full"
                min="0"
                max="100"
                value={meterValue > tech.level ? tech.level : meterValue}
                low="70"
                high="85"
                optimum="100"
                />
            </div>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "tech")