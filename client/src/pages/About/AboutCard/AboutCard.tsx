import { AiOutlineAim,AiOutlineFundProjectionScreen } from "react-icons/ai"

const AboutCard = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 max-w-screen-xl mx-auto grid-cols-1 gap-8 ">
      <div className="p-6 rounded-lg shadow-md cursor-pointer ">
        <div className="flex items-center gap-2">
            <AiOutlineAim className="text-8xl "/> 
        <h1 className="text-xl font-bold"> Our Mission</h1>
        </div>
       
        <p className="mt-5">
        Professional mision capital without enterp medical users pros value added e-enable creative technology via team. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores at voluptatibus iste ea inventore tempora reprehenderit! Veniam, dolorum nemo totam unde, maiores.
        </p>
      </div>
      <div className="p-6 rounded-lg shadow-md cursor-pointer ">
        <div  className="flex items-center gap-2">
            < AiOutlineFundProjectionScreen className="text-8xl"/>
            <h1 className="text-xl font-bold">Our Planning</h1>
        </div>
       
        <p className="mt-5">
        Professional mision capital without enterp medical users pros value added e-enable creative technology via team. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores at voluptatibus iste ea inventore tempora reprehenderit! Veniam, dolorum nemo totam unde, maiores.
        </p>
      </div>
      <div className="p-6 rounded-lg shadow-md cursor-pointer ">
        <div  className="flex items-center gap-2">
        <AiOutlineAim className="text-8xl "/> 
        <h1 className="text-xl font-bold">Our Vission</h1>
        </div>
        <p className="mt-5">
        Professional mision capital without enterp medical users pros value added e-enable creative technology via team. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores at voluptatibus iste ea inventore tempora reprehenderit! Veniam, dolorum nemo totam unde, maiores.
        </p>
      </div>
    </div>
  )
}

export default AboutCard
