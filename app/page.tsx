import React from 'react'
import {Button} from "@/components/ui/button";
import CompanionList from "@/components/CompanionList";
import CompanionCard from "@/components/CompanionCard";
import {recentSessions} from "@/constants/index"
import CTA from "@/components/CTA";

const Page = () => {
  return (
    <div className={"max-w-7xl mx-auto px-6 py-8"}>
        <h1 className="text-3xl font-bold mb-6">Popular Companions</h1>
        <section className={"home-section mb-2"}>
            <CompanionCard
            id="123"
            name={"Neura the Brainy Explorer"}
            topic={"Neural Network of the Brain"}
            subject={"Science"}
            duration={45}
            color={"#ffda6e"}
            />
            <CompanionCard
            id="123"
            name={"Countsy the Number Wizard"}
            topic={"Derivatives & Integrals"}
            subject={"Maths"}
            duration={30}
            color={"#efd0ff"}
            />
            <CompanionCard
            id="123"
            name={"Verba the Vocabulary Builder"}
            topic={"English Literature"}
            subject={"Language"}
            duration={30}
            color={"#bde7ff"}
            />
        </section>
        <section className={"home-section pt-8 gap-6"}>
            <CompanionList
            title="Recently Completed Sessions"
            Companions={recentSessions}
            classNames="w-2/3 max-lg:w-full"
            />
            <CTA />
        </section>
    </div>
  )
}

export default Page