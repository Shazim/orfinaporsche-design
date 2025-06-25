
import Navigation from '../components/Navigation';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-charcoal mb-6">
            About Our <span className="text-porsche-red">Mission</span>
          </h1>
          <p className="font-inter text-xl text-gray-600 leading-relaxed">
            Preserving the legacy of Porsche-inspired horology for future generations
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-playfair text-4xl font-bold text-charcoal mb-8">Our Vision</h2>
            <p className="font-inter text-lg text-gray-700 leading-relaxed mb-6">
              This collection represents more than just timepieces; it embodies the pursuit of perfection that defines both Porsche engineering and Swiss horological craftsmanship. Our mission is to document, preserve, and share the rich heritage of these remarkable instruments with enthusiasts worldwide.
            </p>
            <p className="font-inter text-lg text-gray-700 leading-relaxed">
              Through meticulous research, detailed photography, and comprehensive documentation, we aim to create the definitive resource for collectors, historians, and anyone passionate about the intersection of automotive and horological excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charcoal text-center mb-16">Our Team</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full mx-auto mb-6"></div>
              <h3 className="font-playfair text-2xl font-bold text-charcoal mb-2">Marcus Weber</h3>
              <p className="font-inter text-porsche-red font-medium mb-4">Chief Curator & Researcher</p>
              <p className="font-inter text-gray-600 leading-relaxed">
                A lifelong Porsche enthusiast with over 20 years of experience in horological research and documentation. Marcus brings deep expertise in vintage timepiece authentication and historical context.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full mx-auto mb-6"></div>
              <h3 className="font-playfair text-2xl font-bold text-charcoal mb-2">Elena Rodriguez</h3>
              <p className="font-inter text-porsche-red font-medium mb-4">Photography Director</p>
              <p className="font-inter text-gray-600 leading-relaxed">
                Professional photographer specializing in luxury timepieces and automotive subjects. Elena's exceptional eye for detail captures the essence and craftsmanship of each piece in our collection.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full mx-auto mb-6"></div>
              <h3 className="font-playfair text-2xl font-bold text-charcoal mb-2">Thomas Mitchell</h3>
              <p className="font-inter text-porsche-red font-medium mb-4">Technical Specialist</p>
              <p className="font-inter text-gray-600 leading-relaxed">
                Master watchmaker and movement specialist with extensive experience in vintage chronograph restoration. Thomas provides technical expertise and movement authentication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charcoal mb-8">Collaboration & Credits</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-2xl font-bold text-charcoal mb-4">Special Thanks</h3>
              <p className="font-inter text-gray-700 leading-relaxed mb-4">
                This project would not be possible without the generous support and expertise of collectors, historians, and enthusiasts worldwide. We extend our gratitude to:
              </p>
              <ul className="font-inter text-gray-700 space-y-2 ml-6">
                <li>• The Porsche Design Archives for historical documentation access</li>
                <li>• Private collectors who shared their rare pieces for documentation</li>
                <li>• Vintage watch specialists who provided technical expertise</li>
                <li>• Photography studios that facilitated our imaging sessions</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-playfair text-2xl font-bold text-charcoal mb-4">Contributors</h3>
              <p className="font-inter text-gray-700 leading-relaxed">
                We welcome contributions from fellow enthusiasts, collectors, and researchers. If you have additional information, rare pieces to document, or corrections to our existing documentation, please don't hesitate to reach out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl font-bold text-white mb-8">Get In Touch</h2>
          <p className="font-inter text-xl text-gray-300 mb-8 leading-relaxed">
            Have a piece to share? Questions about our research? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:contact@porschewatchcollection.com" 
              className="bg-porsche-red text-white px-8 py-4 font-inter font-medium rounded-md hover:bg-red-700 transition-colors"
            >
              Contact Us
            </a>
            <a 
              href="#" 
              className="border-2 border-white text-white px-8 py-4 font-inter font-medium rounded-md hover:bg-white hover:text-charcoal transition-all"
            >
              Follow Our Research
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
