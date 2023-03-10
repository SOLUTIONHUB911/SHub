import Image from "next/image"
import students from '../../public/WhatWeDo.png'
import { Ellipses } from "./Icons"
export default function WhatWeDo() {
  return (
    <main className="font-openSans flex justify-between mx-[12%] items-center mt-[70px]">
      <Ellipses className="absolute left-[145px] mt-[261px]" />
      <div className="border border-white bg-white rounded shadow-[0_10px_40px_0px_rgba(0,0,0,0.06)] w-[456px] z-10">

        <Image src={students} alt='Students Reading' width={439.71} height={325.71} className='border border-white rounded-xl p-[5px]' />
      </div>
      <section className="w-[585px] h-[240px] ml-[77px]">
        <h3 className="font-bold text-black text-[32px]">What We Do</h3>
        <p className="text-lg font-semibold text-[#919fae]">We Provide solutions (Answers) to Seminar topics,
          Project topics, Quiz & assignments, Past Questions,
          Online Tutorials, Lectures View all for free</p>
        <button className="px-[28px] border bg-[#1565d8] w-[184px] h-10 mt-11 rounded"> CONTACT US</button>
      </section>
    </main>
  )
}
