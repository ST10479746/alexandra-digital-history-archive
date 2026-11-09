/*
forms-config.js — Alexandra Digital History Archive

REFERENCE LIST

MDN Web Docs, 2025. Using the Fetch API. Updated Aug 20, 2025. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch> [Accessed 9 November 2026].

Documentation supports the explanations, rather than claiming that project code was copied. Documentation has no fixed source-code version. Actual library versions are stated separately. Missing publication dates use s.a.; year suffix letters are omitted to follow the supplied course guide. Each citation names one source. Titles and nearby links identify individual works by the same author and year.
*/

"use strict";

// Email drafts and direct online submissions use the same intended recipient.
// Notification delivery is managed by each form's settings in Formspree.

// -----------------------------------------------------------------------------
// 1. Public delivery settings
// -----------------------------------------------------------------------------
// MDN Web Docs (2025) explains that Fetch sends requests and exposes HTTP response
// status. These values configure forms.js. The recipient supplies the email draft
// address; Formspree notification recipients are configured in its dashboard. The
// online endpoint is used by the Fetch request.
const archiveFormConfig = {
  recipientEmail: "mkatekimashimbye@gmail.com",

  // These public HTTPS endpoints accept the reviewed enquiry and contact messages.
  enquiryEndpoint: "https://formspree.io/f/xzeeeeba",
  contactEndpoint: "https://formspree.io/f/xgaaaaer",
};
