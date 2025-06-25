
import Navigation from '../components/Navigation';

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
              The intersection of automotive excellence and horological precision
            </p>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-16">
              <h2 className="font-sans text-2xl font-normal text-porsche-black mb-8 uppercase tracking-wide">The Genesis</h2>
              <p className="font-sans text-porsche-dark-gray leading-relaxed mb-8 text-lg">
                In the world of precision engineering, few brands command the same respect as Porsche. For over seven decades, the Stuttgart marque has defined automotive excellence through relentless innovation, meticulous craftsmanship, and an unwavering commitment to performance. This same philosophy has inspired a unique collection of timepieces that embody the spirit of Porsche's legendary heritage.
              </p>
              <p className="font-sans text-porsche-dark-gray leading-relaxed mb-8 text-lg">
                Our journey began with a simple observation: the instruments that adorn a Porsche dashboard share remarkable similarities with the finest Swiss timepieces. Both demand absolute precision, both celebrate mechanical complexity, and both serve as faithful companions in the pursuit of excellence. This connection sparked a passion project that would evolve into one of the most comprehensive documentation efforts in horological history.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="font-sans text-2xl font-normal text-porsche-black mb-8 uppercase tracking-wide">Design Philosophy</h2>
              <p className="font-sans text-porsche-dark-gray leading-relaxed mb-8 text-lg">
                Each reference in our collection reflects the core principles that define Porsche design: purposeful aesthetics, functional beauty, and timeless elegance. From the distinctive typefaces echoing instrument cluster graphics to the careful selection of materials that mirror Porsche's interior appointments, every element serves a purpose while contributing to the overall harmony of the design.
              </p>
              <p className="font-sans text-porsche-dark-gray leading-relaxed mb-8 text-lg">
                The chronographs celebrate Porsche's racing heritage, their subdials positioned with the same precision as tachometers and oil pressure gauges. The three-hand watches embody the pure, uncluttered aesthetic of early 911 dashboards, where every element earned its place through necessity rather than ornamentation.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="font-sans text-2xl font-normal text-porsche-black mb-8 uppercase tracking-wide">Craftsmanship Heritage</h2>
              <p className="font-sans text-porsche-dark-gray leading-relaxed mb-8 text-lg">
                Like Porsche's commitment to hand-assembled engines and individually crafted interiors, each timepiece in our collection represents hundreds of hours of meticulous attention to detail. From the carefully finished movements to the precisely applied indices, every component reflects the same standards of excellence that have made Porsche synonymous with quality.
              </p>
              <p className="font-sans text-porsche-dark-gray leading-relaxed text-lg">
                This documentation project serves not only as a celebration of these remarkable timepieces but as a preservation of the stories, specifications, and craftsmanship details that make each reference unique. It is our contribution to the broader horological community and a testament to the enduring influence of Porsche's design philosophy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-porsche-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans text-3xl font-light text-porsche-black text-center mb-20 uppercase tracking-wider">Our Journey</h2>
          
          <div className="space-y-16">
            {[
              {
                year: '2019',
                title: 'First Acquisition',
                description: 'The journey began with the acquisition of our first Porsche Design timepiece, sparking a passion for the intersection of automotive and horological excellence.'
              },
              {
                year: '2020',
                title: 'Research & Documentation',
                description: 'Extensive research into the historical context and technical specifications of each reference, building the foundation for comprehensive documentation.'
              },
              {
                year: '2021',
                title: 'Component Analysis',
                description: 'Deep dive into individual components, movements, and manufacturing techniques, uncovering the craftsmanship behind each timepiece.'
              },
              {
                year: '2022',
                title: 'Digital Archive',
                description: 'Development of this comprehensive digital platform to preserve and share our findings with the global horological community.'
              }
            ].map((milestone, index) => (
              <div key={index} className="flex items-start space-x-12">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-porsche-black flex items-center justify-center">
                    <span className="font-sans text-white font-light text-lg">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-sans text-xl font-normal text-porsche-black mb-4 uppercase tracking-wide">{milestone.title}</h3>
                  <p className="font-sans text-porsche-dark-gray leading-relaxed text-lg">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
