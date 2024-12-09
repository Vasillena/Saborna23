import { BitterRose, ChillaxMedium } from "../utils/fonts";

export default async function Contact(): Promise<JSX.Element> {
  return (
    <>
      <section className="max-w-[1440px] mx-auto relative h-screen grid grid-cols-2">
        <div
          className={`relative w-full h-full flex flex-col justify-center items-center px-4 sm:px-10`}
          style={{
            background: `url("/contact.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <div className="text-center">
            <h1
              className={`mb-8 text-3xl lg:text-7xl text-[#BAB2A7] ${BitterRose.className}`}
            >
              Contact <br />
              <span
                className={`text-7xl text-white ${ChillaxMedium.className}`}
              >
                Get in Touch
              </span>
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-20 items-center justify-center px-20 text-center">
          <p className="text-xl lg:text-2xl">
            Допълваме специалните ви моменти и се грижим за страхотното
            извживяване на вас и вашите гости. С повод или без при нас всеки ден
            е празник!
          </p>
          <p className="text-xl lg:text-2xl">
            Направете вашата резервация на телефон: <br />
            0888 888 888 <br />
            или заповядайте на място на адрес: <br />
            Съборна 23, Пловдив.
          </p>
        </div>
      </section>
    </>
  );
}
