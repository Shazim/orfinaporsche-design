import Navigation from "../components/Navigation";

const Story = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-24 bg-porsche-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-sans text-4xl md:text-5xl font-light text-porsche-black mb-8 uppercase tracking-wider">
              Our Story
            </h1>
            <p className="font-sans text-xl text-porsche-dark-gray leading-relaxed">
              The Emergence of the Orfina Porsche Design Watch{" "}
            </p>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-16">
              <h2 className="font-sans text-2xl font-normal text-porsche-black mb-8 uppercase tracking-wide">
                The Genesis
              </h2>
              <p className="font-sans text-porsche-dark-gray leading-relaxed mb-8 text-lg">
                In 1972, Ferdinand Alexander "Butzi" Porsche, the legendary
                designer of the Porsche 911 and grandson of the company's
                founder, Ferdinand Porsche, launched Porsche Design as an
                independent studio specializing in industrial design. His first
                product wasn't a car or a piece of furniture; it was a
                wristwatch. But it wasn't just any timepiece: it was the world's
                first entirely blacked-out watch, a revolutionary departure from
                the shiny stainless steel and gold cases of the era. Built on
                the same design principles as the 911 - functionality,
                minimalism, and purity - this new chronograph marked the
                beginning of a new chapter in both watchmaking and design
                history. Ferdinand stated, "My idea was for the watch to match
                the design of the car - the 911 has a black speedometer and
                tachometer in order not to blind the driver. "
              </p>
              <p className="font-sans text-porsche-dark-gray leading-relaxed mb-8 text-lg">
                To bring his vision to life, Butzi Porsche partnered with
                Umberto Maglioli, a former Porsche racing driver who had
                acquired the Swiss watch company Orfina. Their collaboration
                merged cutting-edge automotive design with the rugged,
                purpose-built ethos of Swiss chronograph engineering. Initially
                powered by the Valjoux 7750 automatic movement, introduced in
                1973 as Valjoux's late entry into the automatic chronograph
                race, Porsche Design and Orfina were forced to adapt when the
                quartz crisis disrupted mechanical watchmaking and shuttered
                Valjoux's production. They responded by switching to the Lemania
                5100, a movement famed for its shock resistance and reliability.
                It was the only chronograph caliber at the time that could
                withstand vertical accelerations of up to 7 Gs without its
                central seconds hand halting or losing accuracy - a quality that
                made it a favorite among fighter pilots and military forces
                alike.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="font-sans text-2xl font-normal text-porsche-black mb-8 uppercase tracking-wide">
                Design Philosophy
              </h2>
              <p className="font-sans text-porsche-dark-gray leading-relaxed mb-8 text-lg">
                Each reference in our collection reflects the core principles
                that define Porsche design: purposeful aesthetics, functional
                beauty, and timeless elegance. From the distinctive typefaces
                echoing instrument cluster graphics to the careful selection of
                materials that mirror Porsche's interior appointments, every
                element serves a purpose while contributing to the overall
                harmony of the design.
              </p>
              {/* <p className="font-sans text-porsche-dark-gray leading-relaxed mb-8 text-lg">
                The chronographs celebrate Porsche's racing heritage, their
                subdials positioned with the same precision as tachometers and
                oil pressure gauges. The three-hand watches embody the pure,
                uncluttered aesthetic of early 911 dashboards, where every
                element earned its place through necessity rather than
                ornamentation.
              </p> */}
            </div>

            <div className="mb-16">
              <h2 className="font-sans text-2xl font-normal text-porsche-black mb-8 uppercase tracking-wide">
                Craftsmanship Heritage
              </h2>
              <p className="font-sans text-porsche-dark-gray leading-relaxed mb-8 text-lg">
                The resulting watch wasn't just innovative in design - it was
                engineered for performance under extreme conditions. This
                synthesis of Porsche's design DNA and Orfina's mechanical grit
                gave rise to a cult classic: the Orfina Porsche Design
                Chronograph.
              </p>
              {/* <p className="font-sans text-porsche-dark-gray leading-relaxed text-lg">
                This documentation project serves not only as a celebration of
                these remarkable timepieces but as a preservation of the
                stories, specifications, and craftsmanship details that make
                each reference unique. It is our contribution to the broader
                horological community and a testament to the enduring influence
                of Porsche's design philosophy.
              </p> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
