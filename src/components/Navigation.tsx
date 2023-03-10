import Image from 'next/image'
import shublogo from '../../public/shublogo.png'
export default function Navigation() {
  return (
    <nav className='flex justify-between mx-[12%] text-[#cecdcd]'>
      <Image src={shublogo} alt='Solution Hub' />
      <section className='flex items-center justify-evenly '>
        <ul className='flex justify-between text-xs'>
          <li className='p-4 font-openSans font-bold cursor-pointer'>Home</li>
          <li className='p-4 font-openSans font-normal cursor-pointer'>Connect</li>
          <li className='p-4 font-openSans font-normal cursor-pointer'>About Us</li>
        </ul>
        <button className='px-[15px] py-[10px] border border-white bg-transparent font-openSans text-xs font-normal'> Login Now</button> </section>
    </nav>
  )
}