import { List } from '@/common/components/index';
import { dataList, dataService } from "../data"
import ReactPlayer from 'react-player'
import { CardHoverEffect } from '../components/index';
import { motion } from "framer-motion"

function Services() {
  const videoUrl = "../../src/assets/videos/serviceVideo.mp4"

  return (
    <>
      <section className="px-5 lg:p-20 flex flex-col lg:flex-row justify-between items-center gap-[4rem] ">
        <div className="w-full">
          <motion.h1
            className="lg:text-[2.6rem] text-[1.9rem] text-foreground/90 mt-5 lg:mt-15"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <strong>Explora Nuestros</strong>
            <span className='text-purpouse/90'> Servicios</span>
          </motion.h1>
          <motion.p
            className="lg:text-[1.3rem] md:text-[1rem] sm:text-[0.7rem] text-foreground/70"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
          >Explora nuestra amplia gama de servicios y deja que nos encarguemos de tus necesidades en casa.</motion.p>
        </div>
        <motion.div
          className="rounded-3xl overflow-hidden w-full h-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <ReactPlayer url={videoUrl} width="full" height="full" playing={true} loop />
        </motion.div>
      </section>
      <div className="md:px-[5rem] md:py-10">
        <ul className='flex-col flex justify-center xl:flex-row pt-[5rem] gap-8'>
          {dataList.map(({ icon, name, text }, index) => (
            <List key={index} icon={icon} title={name} paragraph={text} className='mx-auto gap-2' />
          ))}
        </ul>
      </div>
      <section className="p-5 md:p-20 max-w-auto mx-auto">
        <CardHoverEffect items={dataService} />
      </section>
    </>
  );
}

export default Services;
