import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Connect from "./pages/Connect";
import About from "./pages/About";
import Media from "./pages/Media";
import Events from "./pages/Events";
import Resources from "./pages/Resources";
import Give from "./pages/Give";
import Youth from "./pages/ministries/Youth";
import Children from "./pages/ministries/Children";
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
          <Route path="/connect" element={<Connect />} />
          <Route path="/about" element={<About />} />
          <Route path="/media" element={<Media />} />
          <Route path="/events" element={<Events />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/give" element={<Give />} />
          <Route path="/ministries/youth" element={<Youth />} />
          <Route path="/ministries/children" element={<Children />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
