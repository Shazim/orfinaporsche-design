
import Navigation from '../components/Navigation';

const Story = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-charcoal mb-6">
              Our <span className="text-porsche-red">Story</span>
            </h1>
            <p className="font-inter text-xl text-gray-600 leading-relaxed">
              The intersection of automotive excellence and horological precision
            </p>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <h2 className="font-playfair text-3xl font-bold text-charcoal mb-6">The Genesis</h2>
              <p className="font-inter text-gray-700 leading-relaxed mb-6">
                In the world of precision engineering, few brands command the same respect as Porsche. For over seven decades, the Stuttgart marque has defined automotive excellence through relentless innovation, meticulous craftsmanship, and an unwavering commitment to performance. This same philosophy has inspired a unique collection of timepieces that embody the spirit of Porsche's legendary heritage.
              </p>
              <p className="font-inter text-gray-700 leading-relaxed mb-6">
                Our journey began with a simple observation: the instruments that adorn a Porsche dashboard share remarkable similarities with the finest Swiss timepieces. Both demand absolute precision, both celebrate mechanical complexity, and both serve as faithful companions in the pursuit of excellence. This connection sparked a passion project that would evolve into one of the most comprehensive documentation efforts in horological history.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="font-playfair text-3xl font-bold text-charcoal mb-6">Design Philosophy</h2>
              <p className="font-inter text-gray-700 leading-relaxed mb-6">
                Each reference in our collection reflects the core principles that define Porsche design: purposeful aesthetics, functional beauty, and timeless elegance. From the distinctive typefaces echoing instrument cluster graphics to the careful selection of materials that mirror Porsche's interior appointments, every element serves a purpose while contributing to the overall harmony of the design.
              </p>
              <p className="font-inter text-gray-700 leading-relaxed mb-6">
                The chronographs celebrate Porsche's racing heritage, their subdials positioned with the same precision as tachometers and oil pressure gauges. The three-hand watches embody the pure, uncluttered aesthetic of early 911 dashboards, where every element earned its place through necessity rather than ornamentation.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="font-playfair text-3xl font-bold text-charcoal mb-6">Craftsmanship Heritage</h2>
              <p className="font-inter text-gray-700 leading-relaxed mb-6">
                Like Porsche's commitment to hand-assembled engines and individually crafted interiors, each timepiece in our collection represents hundreds of hours of meticulous attention to detail. From the carefully finished movements to the precisely applied indices, every component reflects the same standards of excellence that have made Porsche synonymous with quality.
              </p>
              <p className="font-inter text-gray-700 leading-relaxed">
                This documentation project serves not only as a celebration of these remarkable timepieces but as a preservation of the stories, specifications, and craftsmanship details that make each reference unique. It is our contribution to the broader horological community and a testament to the enduring influence of Porsche's design philosophy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charcoal text-center mb-16">Our Journey</h2>
          
          <div className="space-y-12">
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
              <div key={index} className="flex items-start space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-porsche-red rounded-full flex items-center justify-center">
                    <span className="font-playfair text-white font-bold text-lg">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-playfair text-2xl font-bold text-charcoal mb-2">{milestone.title}</h3>
                  <p className="font-inter text-gray-700 leading-relaxed">{milestone.description}</p>
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
