import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RenewableEnergy from "./pages/RenewableEnergy";
import WaterSystems from "./pages/WaterSystems";
import DrinkingWater from "./pages/DrinkingWater";
import ProjectDelivery from "./pages/ProjectDelivery";
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
          <Route path="/renewable-energy" element={<RenewableEnergy />} />
          <Route path="/water-systems" element={<WaterSystems />} />
          <Route path="/drinking-water" element={<DrinkingWater />} />
          <Route path="/project-delivery" element={<ProjectDelivery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
