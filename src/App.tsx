
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Decouverte from "./pages/Decouverte";
import Musique from "./pages/Musique";
import Cuisine from "./pages/Cuisine";
import Artisanat from "./pages/Artisanat";
import QuizJeux from "./pages/QuizJeux";
import MonHeritage from "./pages/MonHeritage";
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
          <Route path="/decouverte" element={<Decouverte />} />
          <Route path="/musique" element={<Musique />} />
          <Route path="/cuisine" element={<Cuisine />} />
          <Route path="/artisanat" element={<Artisanat />} />
          <Route path="/quiz-jeux" element={<QuizJeux />} />
          <Route path="/mon-heritage" element={<MonHeritage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
