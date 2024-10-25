import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github, externalLink } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { useEffect, useState } from 'react'
import { close } from "../assets";


const ImageViewer = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-75"></div>
      <div className="fixed inset-0 flex items-center justify-center">
        <motion.div className="relative max-w-[700px] max-h-1/2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={onClose}
            className="absolute top-0 right-0 m-4 text-white cursor-pointer bg-black p-2 rounded-full"
          >
            <img src={close} alt="close" className="w-6 h-6 object-contain" />
          </button>
          <img src={image} alt="project_image" className="" />
        </motion.div>
      </div>
    </div>
  );
};


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  wesbiteLink,
}) => {
  const [isImageOpened, setIsImageOpened] = useState(false);

  useEffect(() => {
    if (isImageOpened) {
      document.body.style.overflow = 'hidden';
      document.getElementById("navbar").style.display = "none";
    } else {
      document.body.style.overflow = 'unset';
      document.getElementById("navbar").style.display = "flex";
    }
  }, [isImageOpened]);

  return (
    <>
      <div>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full"
        >
          <div
            className="relative w-full h-[230px] cursor-pointer"
            onClick={() => setIsImageOpened(true)}
          >
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-contain rounded-2xl"
            />
            {sourceCodeLink && (
              <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                <div
                  onClick={() => window.open(sourceCodeLink, '_blank')}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={github}
                    alt="source code"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            )}
            {wesbiteLink && (
              <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                <div
                  onClick={() => window.open(wesbiteLink, '_blank')}
                  className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={externalLink}
                    alt="website link"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </div>
      {isImageOpened && (
        <ImageViewer image={image} onClose={() => setIsImageOpened(false)} />
      )}
    </>
  );
};

const Works = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className='w-full flex flex-col'>
        <p
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcase my skills and experience with real-world examples of my work.
          Each project is like a puzzle that I've solved with my expertise, creativity, and hard work. 
          You'll find each one briefly described with links to code repositories. Unfortunately, a few of my projects are like undercover agents 
          and I'm not allowed to share their code repositories publicly. But trust me, they're just as impressive as the rest.
          I invite you to take a look at my creations and witness the power of my skills!
        </p>
        <p className='mt-1 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          <span className='text-red-500 font-bold'>Note:</span> Some of the clients won't allow to show some projects due to NDA contracts. Obviously those are not listed here.
        </p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} wesbiteLink={project.websiteLink} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, 'projects')