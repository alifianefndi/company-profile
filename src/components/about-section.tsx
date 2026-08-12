import Image from "next/image";

export function AboutSection() {
  return (
      <section
        id="about"
        className="flex flex-col items-center gap-8 px-4 py-8 md:px-8 md:py-16 md:flex-row-reverse"
      >
        <Image
          src="/about-image.png"
          alt="PT. Teman Berkah Sentosa"
          width={800}
          height={800}
          className="w-full h-auto md:max-w-sm lg:max-w-xl"
        />

        <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-start">
          <h1 className="text-2xl font-bold lg:text-3xl">About Us</h1>
          <p className="text-lg md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            delectus cum et a quis non nesciunt quidem sint, vero natus
            provident quam autem animi eaque quos qui molestiae accusamus
            suscipit?
          </p>
        </div>
      </section>
  )
}
