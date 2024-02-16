import { List } from '@/common/components/index';
import { dataList, dataService } from "../data"
import ReactPlayer from 'react-player'
import { HoverEffect } from '@/components/ui/card-hover-effect';

function Services() {

  const videoUrl = "../../src/assets/videos/serviceVideo.mp4"
  
  return (
    <>
      <section className="p-20 columns-2 gap-20">
        <h1 className="text-[1.8rem] md:text-[3.5rem] text-foreground/90 mt-20">
          <strong>Explora Nuestros</strong> Servicios
        </h1>
        <p className="md:text-[1.4rem] text-foreground/70">Explora nuestra amplia gama de servicios y deja que nos encarguemos de tus necesidades en casa.</p>
        <ReactPlayer url={videoUrl} width={600} height={340} playing loop/>
      </section>
      <div className="columns-3 px-20 py-10">
        <ul>
        {dataList.map(({ icon, name, text }, index) => (
              <List key={index} icon={icon} title={name} paragraph={text} />
            ))}
        </ul>
      </div>
      <section className="px-20 py-10 max-w-auto mx-auto">
      <HoverEffect items={dataService} />
      </section>
    </>
  );
}

export default Services;