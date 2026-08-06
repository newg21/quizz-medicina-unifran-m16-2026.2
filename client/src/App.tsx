import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Cover from "./pages/Cover";
import HowItWorks from "./pages/HowItWorks";
import Home from "./pages/Home";
import Tips from "./pages/Tips";
import Final from "./pages/Final";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Cover} />
      <Route path={"/como-funciona"} component={HowItWorks} />
      <Route path={"/quiz"} component={Home} />
      <Route path={"/tips"} component={Tips} />
      <Route path={"/dicas"} component={Tips} />
      <Route path={"/final"} component={Final} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
