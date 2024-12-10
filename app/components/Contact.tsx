import { BitterRose, ChillaxMedium } from "../utils/fonts";

export default async function Contact(): Promise<JSX.Element> {
  return (
    <>
      <section className="max-w-[1440px] mx-auto relative h-screen grid grid-cols-1 md:grid-cols-2">
        <div
          className={`relative w-full h-full flex flex-col justify-center items-center`}
          style={{
            background: `url("/contact.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <div
            className="w-full text-center p-10"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
          >
            <h1
              className={`text-4xl lg:text-7xl text-[#BAB2A7] ${BitterRose.className}`}
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

        <div className="flex flex-col gap-20 items-center justify-center md:px-20 text-center mt-4 md:mt-0">
          <p className="text-xl lg:text-2xl">
            Допълваме специалните ви моменти и се грижим за страхотното
            извживяване на вас и вашите гости. С повод или без при нас всеки ден
            е празник!
          </p>
          <p className="text-xl lg:text-2xl">
            Направете вашата резервация на телефон: <br />
            089 023 6023 <br />
            или заповядайте на място на адрес: <br />
            ул. &quot;Константин Стоилов&quot; 27, Пловдив.
          </p>
        </div>
      </section>
    </>
  );
}
