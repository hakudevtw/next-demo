// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://f505efe1d53e8a4ae7481f42e88497ed@o4508572648275968.ingest.us.sentry.io/4508572702998528",

  // Add optional integrations for additional features
  integrations: [
    Sentry.replayIntegration(),
    Sentry.thirdPartyErrorFilterIntegration({
      filterKeys: ["next-demo"],
      behaviour: "apply-tag-if-contains-third-party-frames",
    }),
  ],

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Define how likely Replay events are sampled.
  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // Define how likely Replay events are sampled when an error occurs.
  replaysOnErrorSampleRate: 1.0,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  beforeSend(event) {
    // remove all events from the Studio page (demo purposes)
    if (event.type === undefined && event.request?.url?.includes("/studio")) {
      return null;
    }
    return event;
  },
});
