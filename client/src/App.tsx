import { Switch, Route, Router as WouterRouter } from "wouter"; // Ensure Router is imported

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