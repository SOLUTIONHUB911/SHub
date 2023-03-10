

var offers: string[] = ['Seminar Topics', 'Project Topics', 'Past Questions', 'Online Tutorials', 'Lectures View', 'Quiz & Assignment']
export default function WhatWeOffer() {
  return (
    <div className="mt-[70px]">
      <h3 className="font-bold text-black text-[32px] text-center">What We offer</h3>
      <section className="mt-[63px] grid grid-cols-2 gap-x-[24px] gap-y-[62px] mx-[12%]">
        {offers.map((offer) => (
          <h4 key={offer} className="font-openSans font-semibold text-5xl col-span-1 px-[50px] py-[50px] text-[#919fae] text-center border rounded-xl border-[#8692a6]">{offer}</h4>
        ))}
      </section>
    </div>
  )
}