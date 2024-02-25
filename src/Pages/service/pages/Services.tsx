import { List } from '@/common/components/index';
import { dataList, dataService } from "../data"
import ReactPlayer from 'react-player'
import { CardHoverEffect } from '../components/index';


function Services() {

  const videoUrl = "../../src/assets/videos/serviceVideo.mp4"
  
  return (
    <>
      <section className="px-5 lg:p-20 flex flex-col lg:flex-row justify-between">
        <div className="w-full">
          <h1 className="lg:text-[2.6rem] text-[1.9rem] text-foreground/90 mt-5 lg:mt-20">
            <strong>Explora Nuestros</strong> Servicios
          </h1>
          <p className="lg:text-[1.3rem] md:text-[1rem] sm:text-[0.7rem] text-foreground/70">Explora nuestra amplia gama de servicios y deja que nos encarguemos de tus necesidades en casa.</p>
        </div>
        <div className="bg-black rounded-3xl w-[50%] h-[15rem]">
          <ReactPlayer url={videoUrl} width={600} autoplay loop />
        </div>
      </section>
      <div className="px-20 py-10">
        <ul className='grid lg:grid-cols-3  pt-[5rem]'>
        {dataList.map(({ icon, name, text }, index) => (
              <List key={index} icon={icon()} title={name} paragraph={text} />
            ))}
        </ul>
      </div>
      <section className="p-20 max-w-auto mx-auto">
      <CardHoverEffect items={dataService} />
      </section>
    </>
  );
}

export default Services;
