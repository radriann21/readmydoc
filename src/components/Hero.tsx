import Link from "next/link";

export const Hero = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="text-center w-[60%]">
        <h2 className="font-bold text-5xl">
          A convenient way to create readme documents using templates.
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