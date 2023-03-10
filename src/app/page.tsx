import Hero from "@/components/Herocomponents";
import ListOfSchools from "@/components/ListOfSchoolscomponents";
import WhatWeDo from "@/components/WhatWeDocomponents";
import WhatWeOffer from "@/components/WhatWeOffercomponents";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <WhatWeOffer />
      <ListOfSchools />
    </div>
  )
}
