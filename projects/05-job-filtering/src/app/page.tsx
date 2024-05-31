import Image from "next/image"
import data from "../assets/data.json"
import Card from "@/components/card"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data.map((card) => (
        <Card
          key={crypto.randomUUID()}
          data={card}
        />
      ))}
    </main>
  )
}
