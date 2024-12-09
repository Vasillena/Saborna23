import Image from "next/image";
import MainButton from "../components/MainButton";
import image from "@/public/404.webp";

export default function NotFound() {
  return (
    <section className="max-w-[1440px] mx-auto h-screen px-4 flex items-center justify-center">
      <div className="w-full grid grid-cols-1 items-center text-center">
        <div className="hidden md:flex justify-center z-10">
          <Image src={image} alt="404" className="w-[400px] h-auto" />
        </div>
        <div className="px-4">
          <p className="mt-10 text-xl sm:text-3xl">Ooo... Нещо липсва...</p>
          <p className="text-xl sm:text-3xl">
            Страницата, която търсите, не съществува, не е налична или се
            зарежда неправилно.
          </p>
          <div className="mt-10 flex justify-center">
            <MainButton href={"/"} text={"Начална Страница"} />
          </div>
        </div>
      </div>
    </section>
  );
}
