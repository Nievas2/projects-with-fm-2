"use client"
import { CardType } from "@/assets/types/card"
import data from "../assets/data.json"
import Image from "next/image"
import { useContext } from "react"

export default function Card({
  data,
  languages,
  setLanguages
}: {
  data: CardType
  languages: string[]
  setLanguages: any
}) {
  function handleChange(target: string) {
    const result = languages.includes(target)
    if (!result) {
      const data = [...languages]
      data.push(target)
      setLanguages(data)
      console.log(languages)
    }
  }

  return (
    <main className="flex flex-col sm:flex-row shadow-xl rounded-md border-l-4 border-[#5ba4a4] h-30 w-3/4 p-4 gap-5">
      <section className="  sm:basis-5/12 md:basis-2/12 rounded-full flex items-center">
        <div>
          <img
            src={data.logo}
            alt={data.company}
            className={` w-[40px] h-[40px] mt-[-35px] sm:mt-0 sm:w-[80px] sm:h-[80px]`}
          />
        </div>
      </section>
      <section className="flex sm:basis-4/12 md:basis-3/12 flex-col flex-grow gap-1">
        <div className="flex flex-row gap-1 items-center">
          <h1 className="text-[#5ba4a4] text-sm font-semibold">
            {data.company}
          </h1>
          {data.new ? (
            <span className="text-xs bg-[#5ba4a4] rounded-xl py-1 text-white px-2 ">
              NEW
            </span>
          ) : (
            ""
          )}

          {data.featured ? (
            <span className="text-xs bg-[#1a1e2a] rounded-xl py-1 text-white px-2">
              FEATURED
            </span>
          ) : (
            ""
          )}
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
      <section className="flex sm:basis-3/12 md:basis-6/12 flex-grow gap-5 align-middle justify-normal sm:justify-end">
        <div className="gap-5 content-center">
          {data.languages.map((language) => (
            <button
              key={crypto.randomUUID()}
              className="text-sm bg-[#effafa] rounded-sm px-2 py-1 ml-2"
              onClick={() => handleChange(language)}
            >
              {language}
            </button>
          ))}
        </div>
      </section>
    </main>
  )
}
