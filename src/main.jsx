import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//...
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://c4fc34eaaa2fb30225f69ce97a8919c4@o4507946067951616.ingest.de.sentry.io/4507946071031888",
  integrations: [
    Sentry.browserTracingIntegration(),
    // Sentry.metrics.metricsAggregatorIntegration(),
    // Sentry.metrics.reactRouterV6BrowserTracingIntegration({
    //   useEffect: React.useEffect
    // }),
    Sentry.replayIntegration(),
  ],
  // Tracing
  tracesSampleRate: 1.0, 
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1, 
  replaysOnErrorSampleRate: 1.0, 
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
