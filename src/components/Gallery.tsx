import Image from "next/image";
import Gallery1 from '../../public/Gallery1.png'
import Gallery2 from '../../public/Gallery2.png'
import Gallery3 from '../../public/Gallery3.png'
import Gallery4 from '../../public/Gallery4.png'
import Gallery5 from '../../public/Gallery5.png'
import Gallery6 from '../../public/Gallery6.png'

export default function Gallery() {
  return (
    <section className=" bg-[#f9fbfd] rounded">
      <div className="grid grid-cols-3 gap-[24px] mx-[12%]">
        <h4 className="font-openSans font-bold text-2xl text-black col-span-3 mt-[80px]">Gallery</h4>
        <Image src={Gallery1} alt='student taking notes' className="col-span-1 rounded" />
        <Image src={Gallery2} alt='students in the library' className="col-span-1 rounded" />
        <Image src={Gallery3} alt='group discussion among students' className="col-span-1 rounded" />
        <Image src={Gallery4} alt='students in reading group' className="col-span-1 rounded" />
        <Image src={Gallery5} alt='students in reading group' className="col-span-1 rounded" />
        <Image src={Gallery6} alt='online tutorial' className="col-span-1 rounded" />

        <button className="px-[31px] rounded bg-[#0192dc] font-openSans font-bold text-[14px] w-[184px] h-10 mx-auto mt-[5px] items-center mb-[69.64px] col-span-3">See more</button>
      </div>
    </section>
  )
}