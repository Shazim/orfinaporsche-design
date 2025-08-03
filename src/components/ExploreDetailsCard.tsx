import { Link } from "react-router-dom";
import ImageWithLoader from "./ImageWithLoader";

interface ExploreDetailsCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  linkTo: string;
}

const ExploreDetailsCard = ({ title, imageSrc, imageAlt, linkTo }: ExploreDetailsCardProps) => {
  return (
    <Link to={linkTo} className="group h-full">
      <div className="border-2 overflow-hidden transition-all duration-300 group-hover:shadow-2xl rounded-xl transform group-hover:-translate-y-2 h-full flex flex-col" style={{ backgroundColor: '#F1EFE8', borderColor: '#D4CFC4' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#C4BFB0'; e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(212, 207, 196, 0.6)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#D4CFC4'; e.currentTarget.style.boxShadow = ''; }}>
        <div className="h-48 relative overflow-hidden flex-shrink-0" style={{ background: 'linear-gradient(to bottom right, #F7F5F0, #E8E4DB)' }}>
          <ImageWithLoader
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
            skeletonClassName="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-8 flex-grow flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-black mb-2 uppercase tracking-wide transition-colors duration-300 group-hover:text-gray-700 text-center">
            {title}
          </h3>
          <div className="w-16 h-0.5 mx-auto transition-all duration-300 group-hover:w-24" style={{ backgroundColor: '#C4BFB0' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A69C8A'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#C4BFB0'}></div>
        </div>
      </div>
    </Link>
  );
};

export default ExploreDetailsCard; 