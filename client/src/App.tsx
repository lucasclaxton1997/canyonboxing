import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Admin from "@/pages/Admin";
import OneOnOneBoxing from "@/pages/services/OneOnOneBoxing";
import GroupBoxing from "@/pages/services/GroupBoxing";
import WilliamsAZ from "@/pages/locations/WilliamsAZ";
import Route66Boxing from "@/pages/locations/Route66Boxing";
import NorthernArizona from "@/pages/locations/NorthernArizona";

function Router() {
  return (
    <WouterRouter base="/canyonboxing">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/admin" component={Admin} />
        {/* Service Pages */}
        <Route path="/one-on-one-boxing" component={OneOnOneBoxing} />
        <Route path="/group-boxing" component={GroupBoxing} />
        {/* Location Pages */}
        <Route path="/williams-az-boxing" component={WilliamsAZ} />
        <Route path="/route-66-boxing" component={Route66Boxing} />
        <Route path="/northern-arizona-boxing" component={NorthernArizona} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;