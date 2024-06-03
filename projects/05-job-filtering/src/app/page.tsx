"use client"
import Image from "next/image"
import data from "../assets/data.json"
import Card from "@/components/card"
import { useContext, useEffect, useState } from "react"
export default function Home() {
  const [languages, setLanguages] = useState<string[]>([])
  const [dataFiltered, setDataFiltered] = useState(data)
  console.log("remder")
  useEffect(() => {
    console.log(languages)

    if (languages.length == 0) {
      setDataFiltered(data)
    } else {
      const dataFilt = data.filter((proyect) =>
        proyect.languages.some((language) => languages.includes(language))
      )
      setDataFiltered(dataFilt)
    }
  }, [languages])
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <section className="bg-[#5ba4a4]  w-full">
        <img
          className="hidden sm:block h-full"
          src="/bg-header-desktop.png"
          alt="header image"
        />
        <img
          className="flex sm:hidden w-full"
          src="/bg-header-mobile.svg"
          alt="header image"
        />
      </section>
      <section
        className={`flex gap-5 bg-white shadow-xl content-center p-2 rounded-md relative mt-[-25px] ${
          languages.length > 0 ? "block" : "hidden"
        }`}
      >
        {languages &&
          languages.map((data: string) => (
            <div
              key={crypto.randomUUID()}
              className={`m-1 bg-[#effafa] rounded-sm`}
            >
              <span className="px-1 text-sm">{data}</span>
              <button
                className="bg-[#5ba4a4] p-2 rounded-r-sm hover:bg-slate-950"
                onClick={() =>
                  setLanguages(languages.filter((item) => item !== data))
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                >
                  <path
                    fill="#FFF"
                    fillRule="evenodd"
                    d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
                  />
                </svg>
              </button>
            </div>
          ))}
      </section>
      <section className="pt-9 flex items-center flex-col w-full gap-8 sm:gap-4 min-h-full">
        {dataFiltered.map((card) => (
          <Card
            key={crypto.randomUUID()}
            data={card}
            setLanguages={setLanguages}
            languages={languages}
          />
        ))}
      </section>
    </main>
  )
}
