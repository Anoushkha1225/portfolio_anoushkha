import React from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "@radix-ui/react-tooltip"; // use Radix Tooltip, not custom unless defined
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import ScrollProgress from "./components/scroll-progress";
import ParallaxBackground from "./components/parallax-background";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ParallaxBackground />
        <ScrollProgress />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
