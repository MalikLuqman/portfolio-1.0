import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { downloadIcon, resume } from "../assets";


const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options = {{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Born in Islamabad. I graduated from Bahria University with Bachelor's in Computer Science, and since then, I've been living and breathing all things tech.
        Started my professional career in the end of 2020, I've been working with clients from all over the world.
        If you're looking to bring your digital project to life, I'm your go-to guy. I'm excited to take on new challenges and help you make your ideas a reality. Let's get coding!
      </motion.p>
      <div className='mt-10'>
            <a href={`${resume}`} download>
              <motion.button  
                whileHover={{
                  scale: 1.05,
                  transition: {
                    duration: 0.2,
                  },
                }}
                className='bg-[#39D6E1] text-black py-3 px-5 rounded-[20px] flex items-center gap-2 font-bold shadow-xl shadow-cyan-500/40'
              >
                <img src={downloadIcon} alt='download' className='w-4 h-4' />
                <span>Download Resume</span>
              </motion.button>
            </a>
          </div>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')