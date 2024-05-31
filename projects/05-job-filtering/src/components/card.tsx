import { CardType } from "@/assets/types/card"
import data from "../assets/data.json"
import Image from "next/image"
export default function Card({ data }: { data: CardType }) {
  return (
    <main className="flex flex-row shadow-md w-3/4 p-4 gap-5">
      <section className="basis-1/12 rounded-full flex items-center">
        <div>
          <img
          src={data.logo}
          alt={data.company}
          width={50}
          height={50}
        />
        </div>
        
      </section>
      <section className="flex basis-5/12 flex-col flex-grow gap-1">
        <div className="flex flex-row gap-1 items-center">
          <h1 className="text-[#5ba4a4] text-sm font-semibold">{data.company}</h1>
          <span className="text-xs bg-[#5ba4a4] rounded-sm text-white px-2">
            {data.new ? "NEW" : ""}
          </span>
          <span className="text-xs bg-[#1a1e2a] rounded-sm text-white px-2">
            {data.featured ? "FEATURED" : ""}
          </span>
        </div>

        <h2 className="font-extrabold">{data.position}</h2>
        <div className="flex flex-row gap-1 justify-between">
          <p className="font-extralight text-xs">{data.role}</p>
          <p className="font-extralight text-xs">+</p>
          <p className="font-extralight text-xs">{data.level}</p>
          <p className="font-extralight text-xs">+</p>
          <p className="font-extralight text-xs">{data.location}</p>
        </div>
      </section>
      <section className="flex basis-6/12 flex-grow gap-5 align-middle justify-end">
        {data.languages.map((language) => (
          <span
            key={crypto.randomUUID()}
            className="text-sm bg-[#c9f7f7] rounded-xs p-2"
          >
            {language}
          </span>
        ))}
      </section>
    </main>
  )
}
