// src/lib/analytics.ts

// Global types for GA4 gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

// Ensure dataLayer is initialized
function ensureDataLayer() {
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
  }
}

// Track whether script is already injected to prevent duplicates
let isScriptInjected = false;
let isConfigured = false;

/**
 * Initializes Consent Mode v2 with default denied states.
 * Must be called early, even before script injection.
 */
export function initializeConsentDefaults() {
  if (!MEASUREMENT_ID) return;
  
  ensureDataLayer();
  
  // Set default consent state (all denied)
  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
  });
}

/**
 * Updates consent and dynamically loads GA4 if analytics consent is granted.
 */
export function grantAnalyticsConsent() {
  if (!MEASUREMENT_ID) return;

  ensureDataLayer();

  // Update consent for analytics
  window.gtag('consent', 'update', {
    analytics_storage: 'granted',
  });

  // Inject script only once
  if (!isScriptInjected) {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);
    isScriptInjected = true;
  }

  // Configure only once
  if (!isConfigured) {
    window.gtag('js', new Date());
    window.gtag('config', MEASUREMENT_ID, {
      send_page_view: false, // We will manually trigger page views in AppRoutes to avoid duplicates
    });
    isConfigured = true;
  }
}

/**
 * Updates consent to denied and clears cookies where possible.
 */
export function revokeAnalyticsConsent() {
  if (!MEASUREMENT_ID) return;
  
  ensureDataLayer();

  window.gtag('consent', 'update', {
    analytics_storage: 'denied',
  });

  // Attempt to clear GA cookies (best effort)
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith('_ga') || cookie.startsWith('_gid')) {
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname}`;
      // Also try domain with dot prefix
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.${window.location.hostname}`;
    }
  }
}

/**
 * Sends a page_view event. Should be called on route change.
 */
export function trackPageView(path: string) {
  if (!MEASUREMENT_ID || !isConfigured) return;
  window.gtag('event', 'page_view', {
    page_path: path,
  });
}

/**
 * Sends a custom event.
 */
export function trackEvent(eventName: string, params?: Record<string, any>) {
  if (!MEASUREMENT_ID || !isConfigured) return;
  window.gtag('event', eventName, params);
}
