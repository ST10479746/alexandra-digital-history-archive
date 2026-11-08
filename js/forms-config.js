"use strict";

// Email drafts and direct online submissions use the same intended recipient.
// Notification delivery is managed by each form's settings in Formspree.
const archiveFormConfig = {
  recipientEmail: "mkatekimashimbye@gmail.com",

  // These public HTTPS endpoints accept the reviewed enquiry and contact messages.
  enquiryEndpoint: "https://formspree.io/f/xzeeeeba",
  contactEndpoint: "https://formspree.io/f/xgaaaaer",
};
