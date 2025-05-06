import Link from "next/link";

export const Hero = () => {
  return (
    <section className="w-full flex items-center justify-center mt-16 lg:mt-32 h-[60vh] lg:h-auto px-4 md:px-0">
      <div className="text-center w-full lg:w-[60%]">
        <h2 className="font-bold text-3xl md:text-5xl">
          The easy way to create a README just with some clicks.
        </h2>
        <p className="my-4 text-gray-500 text-lg">
          Select a template, modify the template and create your readme in seconds.
        </p>
        <Link className="mt-5 px-6 py-2 text-lg rounded-md bg-blue-400 text-white" href="/editor">
          Go to our editor
        </Link>
      </div>
    </section>
  )
}