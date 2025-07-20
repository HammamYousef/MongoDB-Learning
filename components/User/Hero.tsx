import Image from "next/image";
import Link from "next/link";

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
      <Link
        href="/posts"
        className="mt-4 inline-block bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold shadow"
      >
        View Posts
      </Link>
    </section>
  );
}

export default Hero;
