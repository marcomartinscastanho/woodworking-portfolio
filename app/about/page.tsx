export default function AboutPage() {
  return (
    <div className=" space-y-8">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">Marco Martins Castanho</h1>
        <p className="text-lg text-gray-600">Senior Software Engineer, Amateur Woodworker</p>
      </header>
      <section className="space-y-4">
        <p>
          I spend most of my professional life building software, primarily on the backend. Outside of work, I enjoy
          creating or fixing things with my hands, and woodworking has become one of my favourite ways to do that.
        </p>
        <p>
          Having grown up on the countryside, where there&apos;s always something to fix or build, I grew up surrounded
          by tools and materials. I learned to use them from a young age, and now when facing something broken or in
          need of improvement, I often find myself thinking, &quot;I can fix that.&quot;
        </p>
        <p>
          Many hours watching YouTube videos about woodworking and other DIY projects made me want to try it myself.
          Most of them happen at my father&apos;s small and messy workshop, where I have to be creative with the limited
          space and tools available.
        </p>
        <p>
          The projects on this website range from furniture and small whittling pieces to workshop accessories and other
          woodworking experiments. Some are carefully planned, while others began as ideas inspired by available
          materials or a practical need.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">What I Enjoy Building</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Furniture is my favourite, but it doesn&apos;t happen as often as I&apos;d like</li>
          <li>I&apos;ve recently started whittling and carving</li>
          <li>Functional household items</li>
          <li>Projects that give new life to natural materials</li>
        </ul>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Why This Website?</h2>
        <p>
          This portfolio serves as a record of my woodworking journey. It gives me a place to document projects, track
          my progress, and share the things I&apos;ve built over time.
        </p>
      </section>
    </div>
  );
}
