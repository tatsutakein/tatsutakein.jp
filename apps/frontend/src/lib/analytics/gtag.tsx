'use client';

import { env } from '@/env.mjs';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageView = (url: string) => {
  window.gtag('config', env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID, {
    page_path: url,
  });
};
