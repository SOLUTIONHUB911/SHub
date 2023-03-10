import { Search } from "./Icons";
import SchoolCard from "./SchoolCard";
import Esut from '../../public/ESUT.png'
import Unn from '../../public/UNN.png'
import Image from "next/image";

export default function ListOfSchools() {
  return (
    <section className="mt-[75.71px] mx-[12%] grid grid-cols-4 gap-[24px] items-center">
      <h4 className="font-OpenSans font-bold text-black col-span-2 text-[45.49px] mb-[8px] ">List Of Schools</h4>
      <div className="flex items-center col-span-2 w-full h-[50px] bg-[#f6f7f9] rounded border-[#f6f7f9] gap-x-[20.34px] mb-[8px]">
        <Search />
        <input type='search' placeholder='Search for schools' name="search" className="bg-[#f6f7f9]" />
      </div>
      <SchoolCard
        image={
          <Image src={Esut} alt='Esut Logo' />
        }
        title='ENUGU STATE UNIVERSITY OF SCIENCE AND TECHNOLOGY'
        content="Lorem ipsum dolor sit amet adipcing amet adipcingamet adipci
        aqua lorem ipsum."
        date="20 jun" />

      <SchoolCard
        image={
          <Image src={Unn} alt='UNN Logo' />
        }
        title='UNIVERSITY OF NIGERIA, NSUKKA CAMPUS'
        content="Lorem ipsum dolor sit amet adipcing amet adipcingamet adipci
        aqua lorem ipsum."
        date="20 jun" />

      <SchoolCard
        image={
          <Image src={Unn} alt='ESCET Logo' />
        }
        title='ENUGU STATE COLLEGE OF EDUCATION TECHNICAL'
        content="Lorem ipsum dolor sit amet adipcing amet adipcingamet adipci
        aqua lorem ipsum."
        date="20 jun" />

      <SchoolCard
        image={
          <Image src={Esut} alt='IMT Logo' />
        }
        title='INSTITUTE OF MANAGEMENT AND TECHNOLOGY '
        content="Lorem ipsum dolor sit amet adipcing amet adipcingamet adipci
        aqua lorem ipsum."
        date="20 jun" />
      <button className="px-[31px] rounded bg-[#00a2ff] font-openSans font-bold text-xl w-[211px] h-10 text-center mt-[50px] mb-[69.64px]">SEE MORE</button>
    </section>
  )
}