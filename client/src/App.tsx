import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import Cover from "@/pages/Cover";
import HowItWorks from "@/pages/HowItWorks";
import Quiz from "@/pages/Quiz";
import Tips from "@/pages/Tips";
import Final from "@/pages/Final";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

function ScrollTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollTop />
      <Switch>
        <Route path="/" component={Cover} />
        <Route path="/como-funciona" component={HowItWorks} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/dicas" component={Tips} />
        <Route path="/final" component={Final} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
