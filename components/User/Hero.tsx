import Image from "next/image";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-400 to-blue-500 py-12 text-center rounded-lg mb-8 shadow-lg">
      <Image
        src="/mongodb-logo.jpg"
        alt="MongoDB Logo"
        width={120}
        height={120}
        className="mx-auto mb-4 rounded-full shadow"
      />
      <h1 className="text-4xl font-extrabold text-white mb-2">
        Welcome to My MongoDB Project
      </h1>
      <p className="text-lg text-white opacity-90">
        Explore user management with Next.js & MongoDB!
      </p>
    </section>
  );
}

export default Hero;
