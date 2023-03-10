import Image from "next/image";
import { JsxElement } from "typescript";
import { Arrow } from "./Icons";

const SchoolCard:
  React.FC<{ title: string, content: string, date: string, image?: JSX.Element }> = (
    { image, title, content, date }
  ) => {
    return (
      <section className="flex items-start gap-x-[22px] w-[510px] col-span-2">
        {image}
        <div>
          <h4 className="font-openSans font-bold text-[14.87px] text-black">{title}</h4>
          <p className="font-openSans text-[#919fae] text-[11.15px]">{content}</p>
          <div className="flex justify-between items-center mt-[6.1px]">
            <p className="font-openSans text-[#919fae] text-[11.15px]">{date}</p>
            <Arrow />
          </div>
        </div>
      </section>
    )
  }
export default SchoolCard;