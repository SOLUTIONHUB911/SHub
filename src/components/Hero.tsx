import Navigation from "./Navigation";

export default function Hero() {
  return (
    <main className="bg-[url('../../public/Hero.png')] h-[528px]">
      <Navigation />
      <section className="absolute left-[165px] top-[163px] w-[923px] h-[249px]">
        <h3 className="font-workSans text-[64px] font-bold">SOLUTION HUB</h3>
        <h2 className="font-workSans text-5xl font-medium">Your Home Of Solutions</h2>
        <button className="px-[31px] rounded bg-[#1565d8] font-openSans font-semibold text-xl absolute w-[144px] h-10 text-center mt-[54px]">SIGN UP</button></section>
    </main>
  )
}