"use strict";

// The recipient address is public website configuration, not a password or API key.
// An empty recipient keeps email delivery unavailable while message copying still works.
const archiveFormConfig = {
  recipientEmail: "ST10479746@MYEMERIS.EDU.ZA",
  // HTTPS endpoints must accept JSON POST requests and allow this site's origin.
  // Empty endpoints disable online delivery; no message is claimed to have been sent.
  enquiryEndpoint: "",
  contactEndpoint: "",
};
