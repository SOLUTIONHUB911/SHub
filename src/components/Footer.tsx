import Image from 'next/image'
import footerIcon from '../../public/footerIcon.png'
import { FaceBook, Instagram, Twitter } from './Icons'
export default function Footer() {
  return (
    <footer className="mt-[70px] bg-[#f9f9f9]">
      <div className="grid grid-cols-5 gap-4 mx-[12%]">
        <section className='col-span-2 mt-16'>
          <Image src={footerIcon} alt='Solution Hub' />
          <p className='font-openSans text-[#0c101a] text-xs '>Jl. Siliwangi No 123, Cibadak, Cibadak, Sukabumi,
            Jawa Barat 43351,Enugu</p>
          <p className='col-span-2 font-openSans text-xs text-[#0c101a] font-bold mt-6'>info@solutionhub.sch.id</p>
          <p className='col-span-2 font-openSans text-xs text-[#0c101a] font-bold'>solutionhub@yahoo.co.id</p>
        </section>
        <section>
          <h4 className='font-openSans text-[16px] mb-8 text-black font-bold mt-16'>Students</h4>
          <ul className='list-none font-openSans text-[14px] font-bold text-black'>
            <li>Site-Map</li>
            <li>Students Information</li>
            <li>Technical Services</li>
            <li>Course Information</li>
          </ul>
        </section>
        <section>
          <h4 className='font-openSans text-[16px] mb-8 text-black font-bold mt-16'>News</h4>
          <ul className='list-none font-openSans text-[14px] font-bold text-black'>
            <li>Stories</li>
            <li>Media Highlights</li>
            <li>Most Recent News</li>
            <li>Institution Based Research</li>
            <li>National Research Fund</li>
          </ul>
        </section>
        <section>
          <h4 className='font-openSans text-[16px] mb-8 text-black font-bold mt-16'>Connect With Us</h4>
          <div className='flex justify-between'>
            <Twitter className='border border-[#e6e6e7] p-4 rounded-lg' />


            <FaceBook className='border border-[#e6e6e7] p-4 rounded-lg' />


            <Instagram className='border border-[#e6e6e7] p-4 rounded-lg' />
          </div>
        </section>
        <hr className="col-span-5 border border-[#e6e6e7] mt-[20px]" />
        <p className='col-span-2 font-openSans text-xs text-[#0c101a]'>Copyright © solution hub. All right Reserved. </p>
      </div>
      <hr className='border-[#2ba7e2] mt-6 mb-[38px] rounded' />
    </footer>
  )
}