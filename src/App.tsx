import { Suspense } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { MapProvider } from "@/contexts/MapContext";
import appRoutes from "@/routes/app-routes";
import GlobalStyles from "@/styles/GlobalStyles";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/shared/ErrorFallback";


function AppRoutes() {
  return useRoutes(appRoutes)
}

export function App() {
  return(
    <MapProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
      <GlobalStyles />
      <Suspense fallback={<div></div>}>
        <Router>
          <AppRoutes />
        </Router>
      </Suspense>
      </ErrorBoundary>
  </MapProvider>
  )
}
