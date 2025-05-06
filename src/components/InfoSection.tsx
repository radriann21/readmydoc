const faqs = [
  {
    id: 1,
    title: "Choose a template",
    text: "Choose from different templates commonly used in projects of various kinds"
  },
  {
    id: 2,
    title: "Edit name and content",
    text: "Give the document a name and edit the README content as you wish"
  },
  {
    id: 3,
    title: "Download and insert into the repo",
    text: "Embed the README without any problem and let people learn about your project"
  }
]

export const InfoSection = () => {
  return (
    <section className="w-full px-4 md:px-8 mt-10 lg:mt-28">
      <h2 className="mx-auto w-fit text-3xl font-cabin font-bold">How to use</h2>

      <section className="mt-8 flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        {
          faqs.map(faq => (
            <article className="text-center" key={faq.id}>
              <h3 className="text-2xl font-semibold">{faq.title}</h3>
              <p className="mt-4">{faq.text}</p>
            </article>
          ))
        }
      </section>
    </section>
  )
}