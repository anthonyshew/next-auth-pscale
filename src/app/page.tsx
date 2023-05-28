import { Buttons } from "@/app/Buttons";
import { RawData } from "@/app/RawData";

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <RawData />
      <Buttons />
    </main>
  );
}
