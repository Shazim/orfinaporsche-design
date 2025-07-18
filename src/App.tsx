import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { LoadingProvider, useLoading } from "./contexts/LoadingContext";
import GlobalLoader from "./components/GlobalLoader";
import Index from "./pages/Index";
import Story from "./pages/Story";
import Reference7750 from "./pages/Reference7750";
import Reference7750CaseFinishes from "./pages/Reference7750CaseFinishes";
import Reference7750Caseback from "./pages/Reference7750Caseback";
import Reference7750Rehaut from "./pages/Reference7750Rehaut";
import Reference7750Dial from "./pages/Reference7750Dial";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Reference7177 from "./pages/Reference7177";
import Reference7177CaseFinishes from "./pages/Reference7177CaseFinishes";
import Reference7177Caseback from "./pages/Reference7177Caseback";
import Reference7177Rehaut from "./pages/Reference7177Rehaut";
import Reference7177Dial from "./pages/Reference7177Dial";
import Reference7177DialFourLogo from "./pages/Reference7177DialFourLogo";
import Reference7177DialBaseline from "./pages/Reference7177DialBaseline";
import Reference7177DialNato from "./pages/Reference7177DialNato";
import Reference7177DialSwissShield from "./pages/Reference7177DialSwissShield";
import Reference7177DialVenezuelanMOD from "./pages/Reference7177DialVenezuelanMOD";
import Reference7177DialBUND from "./pages/Reference7177DialBUND";
import Reference7177DialFlyingTiger from "./pages/Reference7177DialFlyingTiger";
import Reference7177DialRoyalNavy from "./pages/Reference7177DialRoyalNavy";
import Reference7177DialUAE from "./pages/Reference7177DialUAE";
import Reference7177DialByOrfina from "./pages/Reference7177DialByOrfina";
import DateWheels from "./pages/DateWheels";
import Boxes from "./pages/Boxes";
import Bracelets from "./pages/Bracelets";
import Straps from "./pages/Straps";
import Hands from "./pages/Hands";
import Crowns from "./pages/Crowns";
import Movements from "./pages/Movements";
import Reference7176 from "./pages/Reference7176";
import Reference7176CaseFinishes from "./pages/Reference7176CaseFinishes";
import Reference7176Rehaut from "./pages/Reference7176Rehaut";
import Reference7176Caseback from "./pages/Reference7176Caseback";
import Reference7176Dial from "./pages/Reference7176Dial";

const queryClient = new QueryClient();

const AppContent = () => {
  const { isInitialLoad } = useLoading();

  if (isInitialLoad) {
    return <GlobalLoader />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/story" element={<Story />} />
        <Route path="/references/7750" element={<Reference7750 />} />
        <Route
          path="/references/7750/case-finishes"
          element={<Reference7750CaseFinishes />}
        />
        <Route
          path="/references/7750/caseback"
          element={<Reference7750Caseback />}
        />
        <Route
          path="/references/7750/rehaut"
          element={<Reference7750Rehaut />}
        />
        <Route path="/references/7750/dial" element={<Reference7750Dial />} />
        <Route path="/references/7177" element={<Reference7177 />} />
        <Route
          path="/references/7177/case-finishes"
          element={<Reference7177CaseFinishes />}
        />
        <Route
          path="/references/7177/caseback"
          element={<Reference7177Caseback />}
        />
        <Route
          path="/references/7177/rehaut"
          element={<Reference7177Rehaut />}
        />
        <Route path="/references/7177/dial" element={<Reference7177Dial />} />
        <Route
          path="/references/7177/dial/four-logo"
          element={<Reference7177DialFourLogo />}
        />
        <Route
          path="/references/7177/dial/baseline"
          element={<Reference7177DialBaseline />}
        />
        <Route
          path="/references/7177/dial/nato"
          element={<Reference7177DialNato />}
        />
        <Route
          path="/references/7177/dial/swiss-shield"
          element={<Reference7177DialSwissShield />}
        />
        <Route
          path="/references/7177/dial/venezuelan-mod"
          element={<Reference7177DialVenezuelanMOD />}
        />
        <Route
          path="/references/7177/dial/bund"
          element={<Reference7177DialBUND />}
        />
        <Route
          path="/references/7177/dial/flying-tiger"
          element={<Reference7177DialFlyingTiger />}
        />
        <Route
          path="/references/7177/dial/royal-navy"
          element={<Reference7177DialRoyalNavy />}
        />
        <Route
          path="/references/7177/dial/uae"
          element={<Reference7177DialUAE />}
        />
        <Route
          path="/references/7177/dial/by-orfina"
          element={<Reference7177DialByOrfina />}
        />
        <Route path="/references/7176" element={<Reference7176 />} />
        <Route
          path="/references/7176/case-finishes"
          element={<Reference7176CaseFinishes />}
        />
        <Route
          path="/references/7176/caseback"
          element={<Reference7176Caseback />}
        />
        <Route path="/references/7176/dial" element={<Reference7176Dial />} />
        <Route
          path="/references/7176/rehaut"
          element={<Reference7176Rehaut />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/components/bracelets" element={<Bracelets />} />
        <Route path="/components/straps" element={<Straps />} />
        <Route path="/components/hands" element={<Hands />} />
        <Route path="/components/crowns" element={<Crowns />} />
        <Route path="/components/movements" element={<Movements />} />
        <Route path="/components/date-wheels" element={<DateWheels />} />
        <Route path="/components/boxes" element={<Boxes />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LoadingProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AppContent />
      </TooltipProvider>
    </LoadingProvider>
  </QueryClientProvider>
);

export default App;
