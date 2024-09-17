import Image from "next/image";
import { images } from "./lib/placeholder-data";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {images.map((image) => {
          return (
            <Image
              key={image.url}
              src={image.url}
              alt="First image"
              width={180}
              height={38}
              priority
            />
          );
        })}
      </main>
    </div>
  );
}
