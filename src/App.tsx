import { Suspense } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { MapProvider } from "@/contexts/MapContext";
import appRoutes from "@/routes/app-routes";
import GlobalStyles from "@/styles/GlobalStyles";


function AppRoutes() {
  return useRoutes(appRoutes)
}

export function App() {
  return(
    <MapProvider>
      <GlobalStyles />
      <Suspense fallback={<div></div>}>
        <Router>
          <AppRoutes />
        </Router>
      </Suspense>
  </MapProvider>
  )
}
