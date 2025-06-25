
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Story from "./pages/Story";
import Reference7750 from "./pages/Reference7750";
import Reference7750CaseFinishes from "./pages/Reference7750CaseFinishes";
import Reference7750Caseback from "./pages/Reference7750Caseback";
import Reference7750Rehaut from "./pages/Reference7750Rehaut";
import Reference7750Dial from "./pages/Reference7750Dial";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/story" element={<Story />} />
          <Route path="/references/7750" element={<Reference7750 />} />
          <Route path="/references/7750/case-finishes" element={<Reference7750CaseFinishes />} />
          <Route path="/references/7750/caseback" element={<Reference7750Caseback />} />
          <Route path="/references/7750/rehaut" element={<Reference7750Rehaut />} />
          <Route path="/references/7750/dial" element={<Reference7750Dial />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
