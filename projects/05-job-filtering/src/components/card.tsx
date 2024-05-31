import { CardType } from "@/assets/types/card"
import data from "../assets/data.json"
import Image from "next/image"
export default function Card({ data }: { data: CardType }) {
  return (
    <main>
      <section>
        <Image
          src={data.logo}
          alt={data.company}
          width={50}  
          height={50}
        />
      </section>
      <section>
        <h1>{data.company}</h1>
        <span>{data.new ? "NEW" : ""}</span>
        <span>{data.featured ? "FEATURED" : ""}</span>
        <h2>{data.position}</h2>
        <div>
          <p>{data.role}</p>
          <p>{data.level}</p>
          <p>{data.location}</p>
        </div>
      </section>
      <section>
        {
          data.languages.map((language) => (
            <span key={crypto.randomUUID()}>{language}</span>
          ))
        }
      </section>
    </main>
  )
}
