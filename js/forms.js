/*
forms.js — Alexandra Digital History Archive

REFERENCE LIST

MDN Web Docs, 2026. EventTarget: addEventListener() method. Updated Sep 30, 2026. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener> [Accessed 9 November 2026].

MDN Web Docs, 2026. Client-side form validation. Updated Oct 9, 2026. [online] Available at: <https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation> [Accessed 9 November 2026].

MDN Web Docs, 2025. encodeURIComponent(). Updated Oct 30, 2025. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent> [Accessed 9 November 2026].

MDN Web Docs, 2025. Using the Fetch API. Updated Aug 20, 2025. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch> [Accessed 9 November 2026].

Documentation supports the explanations, rather than claiming that project code was copied. Documentation has no fixed source-code version. Actual library versions are stated separately. Missing publication dates use s.a.; year suffix letters are omitted to follow the supplied course guide. Each citation names one source. Titles and nearby links identify individual works by the same author and year.
*/

"use strict";

// -----------------------------------------------------------------------------
// 1. Enquiry guidance and message categories
// -----------------------------------------------------------------------------
// These project-written responses explain the context and limits of each enquiry.
const enquiryGuidance = {
  research: {
    title: "Research access",
    context:
      "Include a topic, date range or source title so the enquiry can be understood.",
    response:
      "Published website pages can be browsed without an account. Access to additional material, reproduction permissions and any costs require confirmation for the specific item. No research booking or source access has been confirmed.",
  },
  contribution: {
    title: "Historical material contribution",
    context:
      "Describe the material, its creator, likely date and any permissions or restrictions.",
    response:
      "Your enquiry should explain what the material is, who created it and whether you have permission to share it. Keep the original safe. Acceptance and publication require a separate review; this response does not transfer rights.",
  },
  volunteer: {
    title: "Volunteering",
    context: "Mention relevant interests, skills and the time you would like to offer.",
    response:
      "Include your interests, relevant skills and possible availability. There are no confirmed volunteer positions or start dates in this prototype; any opportunity would need a separate discussion.",
  },
  partnership: {
    title: "Partnership",
    context:
      "Describe your organisation, proposed collaboration and intended community benefit.",
    response:
      "A useful partnership enquiry explains the proposed activity, the organisations involved and its benefit to the community. No partnership, endorsement or commitment has been approved.",
  },
  sponsorship: {
    title: "Sponsorship",
    context:
      "Describe the support you are considering and its intended purpose. Do not send payment details.",
    response:
      "Describe the proposed financial or in-kind support and what it would support. No sponsorship package, price or payment arrangement is confirmed. Do not transfer funds based on this demonstration response.",
  },
  other: {
    title: "Other enquiry",
    context: "Explain the question and the kind of information you are looking for.",
    response:
      "Your summary is ready for review. Explain the question, the relevant context and what response would help. No availability, cost or outcome has been confirmed.",
  },
};
const contactCategories = {
  general: "General question",
  feedback: "Website feedback",
  correction: "Historical correction",
  other: "Other",
};

// -----------------------------------------------------------------------------
// 2. Shared email and form validation
// -----------------------------------------------------------------------------
// MDN Web Docs (2026) explains that client-side validation checks input before
// submission. Client-side validation provides field feedback before submission.
function validEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/u.test(value);
}

// Validation rules are shared by both forms; category values are checked against known options.
function validateArchiveForm(data, mode) {
  const errors = {};
  if (!data.fullname || data.fullname.length > 100)
    errors.fullname = "Enter your name using no more than 100 characters.";
  if (!validEmail(data.email) || data.email.length > 254)
    errors.email = "Enter a valid email address, such as name@example.com.";
  if (data.phone) {
    const digits = data.phone.replace(/\D/g, "");
    if (!/^\+?[0-9 ()-]+$/.test(data.phone) || digits.length < 7 || digits.length > 15) {
      errors.phone =
        "Use 7–15 digits, with optional leading +, spaces, brackets or hyphens.";
    }
  }
  const categories = mode === "enquiry" ? enquiryGuidance : contactCategories;
  if (!Object.hasOwn(categories, data.category))
    errors.category = "Choose a message or enquiry type.";
  if (
    mode === "contact" &&
    (!data.subject || data.subject.length < 3 || data.subject.length > 120)
  )
    errors.subject = "Enter a subject using 3–120 characters.";
  if (data.organisation && data.organisation.length > 100)
    errors.organisation = "Use no more than 100 characters.";
  if (!data.message || data.message.length < 20 || data.message.length > 2500)
    errors.message = "Write a message using 20–2,500 characters.";
  if (!data.consent)
    errors.consent = "Confirm that your contact details may be used to respond.";
  return errors;
}

// -----------------------------------------------------------------------------
// 3. Message compilation
// -----------------------------------------------------------------------------
// The validated fields become a subject and readable message body.
function compileArchiveMessage(data, mode) {
  const category =
    mode === "enquiry"
      ? enquiryGuidance[data.category].title
      : contactCategories[data.category];
  const subject = mode === "enquiry" ? `Archive enquiry: ${category}` : data.subject;
  const body = [
    `Name: ${data.fullname}`,
    `Email: ${data.email}`,
    data.organisation ? `Organisation: ${data.organisation}` : null,
    data.phone ? `Phone: ${data.phone}` : null,
    `Type: ${category}`,
    "",
    data.message,
    "",
    "Consent: contact details may be used to respond to this message.",
  ]
    .filter((line) => line !== null)
    .join("\n");
  return { subject, body };
}

// -----------------------------------------------------------------------------
// 4. Optional Node exports
// -----------------------------------------------------------------------------
// Pure helpers are available for checks without a browser or network request.
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    validateArchiveForm,
    compileArchiveMessage,
    enquiryGuidance,
    validEmail,
  };
}

// -----------------------------------------------------------------------------
// 5. Form setup and delivery configuration
// -----------------------------------------------------------------------------
// Each form chooses the endpoint for its contact or enquiry mode.
if (typeof document !== "undefined") {
  const form = document.getElementById("museum-form");
  if (form) {
    const mode = form.dataset.mode;
    const config = typeof archiveFormConfig === "undefined" ? {} : archiveFormConfig;
    const recipient = String(config.recipientEmail || "").trim();
    const configuredEndpoint = String(config[mode + "Endpoint"] || "").trim();
    // Only explicit HTTPS delivery endpoints can receive form data.
    const endpoint = /^https:\/\//i.test(configuredEndpoint) ? configuredEndpoint : "";
    const fields = document.getElementById("form-fields");
    const response = document.getElementById("form-response");
    const title = document.getElementById("response-title");
    const preview = document.getElementById("message-preview");
    const draft = document.getElementById("email-draft");
    const send = document.getElementById("send-online");
    const status = document.getElementById("delivery-status");
    let prepared = null;
    let attempted = false;
    let pending = false;
    let submitted = false;

    // Loading lasts only while a request is pending; a completed button has a normal cursor.

    // -----------------------------------------------------------------------------
    // 6. Send-button state
    // -----------------------------------------------------------------------------
    // The label, disabled state and cursor describe the current request state.
    function setSendState(state) {
      const sending = state === "sending";
      send.disabled = sending || state === "submitted";
      send.textContent = sending
        ? "Sending…"
        : state === "submitted"
          ? "Submitted to Formspree"
          : "Send online";
      send.style.cursor = sending
        ? "wait"
        : state === "submitted"
          ? "default"
          : "pointer";
      if (sending) send.setAttribute("aria-busy", "true");
      else send.removeAttribute("aria-busy");
    }
    fields.disabled = false;
    form.noValidate = true;
    if (endpoint) form.action = endpoint;
    else if (validEmail(recipient)) form.action = "mailto:" + recipient;

    // -----------------------------------------------------------------------------
    // 7. Reading input and displaying errors
    // -----------------------------------------------------------------------------
    // Text values are trimmed; consent is read as a Boolean.
    function readValues() {
      const data = {};
      form.querySelectorAll("input, select, textarea").forEach((control) => {
        data[control.name] =
          control.type === "checkbox" ? control.checked : control.value.trim();
      });
      return data;
    }

    function showErrors(data, focus = false) {
      const errors = validateArchiveForm(data, mode);
      // Browser email validity provides an additional check alongside the shared rules.
      if (form.elements.email.validity.typeMismatch)
        errors.email = "Enter a valid email address.";
      form.querySelectorAll("input, select, textarea").forEach((control) => {
        const message = errors[control.name];
        const element = document.getElementById(control.name + "-error");
        if (element) {
          element.textContent = message || "";
          element.hidden = !message;
        }
        if (message) control.setAttribute("aria-invalid", "true");
        else control.removeAttribute("aria-invalid");
      });
      const summary = document.getElementById("form-errors");
      const count = Object.keys(errors).length;
      summary.textContent = count
        ? `Please correct ${count} ${count === 1 ? "field" : "fields"} below.`
        : "";
      summary.hidden = !count;
      if (focus && count) form.elements[Object.keys(errors)[0]].focus();
      return count === 0;
    }

    // -----------------------------------------------------------------------------
    // 8. Category-specific context
    // -----------------------------------------------------------------------------
    // The selected enquiry type determines the explanatory text.
    function updateGuidance() {
      if (mode !== "enquiry") return;
      const guidance = enquiryGuidance[form.elements.category.value];
      const panel = document.getElementById("category-context");
      panel.hidden = !guidance;
      if (guidance) {
        document.getElementById("category-context-title").textContent = guidance.title;
        document.getElementById("category-context-copy").textContent = guidance.context;
      }
    }

    // Prepared messages remain on the page until the visitor chooses a delivery action.

    // -----------------------------------------------------------------------------
    // 9. Review and email draft preparation
    // -----------------------------------------------------------------------------
    // The submit listener prepares a review before either delivery action.
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (pending) return;
      attempted = true;
      const data = readValues();
      if (!showErrors(data, true)) {
        response.hidden = true;
        return;
      }
      const message = compileArchiveMessage(data, mode);
      prepared = { data, message };
      title.textContent =
        mode === "enquiry"
          ? enquiryGuidance[data.category].title + ": your response"
          : "Your message is ready to review.";
      document.getElementById("response-copy").textContent =
        mode === "enquiry"
          ? enquiryGuidance[data.category].response
          : "Check the details below. Opening an email draft does not send it; send the message from your email application.";
      preview.value = `Subject: ${message.subject}\n\n${message.body}`;
      draft.hidden = !validEmail(recipient);

      // -----------------------------------------------------------------------------
      // 9.1 Email URL encoding
      // -----------------------------------------------------------------------------
      // MDN Web Docs (2025) explains that encodeURIComponent() escapes URL parameter
      // values. Encoding keeps subject and body text inside their URL parameter values.
      if (!draft.hidden)
        draft.href = `mailto:${recipient}?subject=${encodeURIComponent(message.subject)}&body=${encodeURIComponent(message.body)}`;
      send.hidden = !endpoint;
      submitted = false;
      setSendState("ready");
      status.textContent = "";
      document.getElementById("delivery-note").textContent = validEmail(recipient)
        ? `No message has been sent. Email drafts are addressed to ${recipient}.`
        : "No message has been sent. Email delivery is not available yet; you can copy the prepared message.";
      response.hidden = false;
      title.focus();
    });

    // Editing invalidates the previous review, avoiding accidental delivery of stale details.

    // -----------------------------------------------------------------------------
    // 10. Editing and reset behaviour
    // -----------------------------------------------------------------------------
    // Changes discard the previous prepared message so it cannot be sent as current.
    form.addEventListener("input", () => {
      if (pending) return;
      response.hidden = true;
      prepared = null;
      if (attempted) showErrors(readValues());
      updateGuidance();
    });
    form.elements.category.addEventListener("change", updateGuidance);
    form.addEventListener("reset", () => {
      if (pending) return;
      attempted = false;
      prepared = null;
      response.hidden = true;
      form
        .querySelectorAll("[aria-invalid]")
        .forEach((control) => control.removeAttribute("aria-invalid"));
      form.querySelectorAll(".field-error, .form-error-summary").forEach((element) => {
        element.hidden = true;
        element.textContent = "";
      });
      if (mode === "enquiry") document.getElementById("category-context").hidden = true;
    });

    // -----------------------------------------------------------------------------
    // 11. Copy and email-draft feedback
    // -----------------------------------------------------------------------------
    // Clipboard failure falls back to selecting the text for manual copying.
    document.getElementById("copy-message").addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(preview.value);
        status.textContent = submitted
          ? "Message copied. This message was already accepted by Formspree."
          : "Message copied. No message has been sent.";
      } catch (error) {
        preview.focus();
        preview.select();
        status.textContent = submitted
          ? "Select and copy the prepared text. This message was already accepted by Formspree."
          : "Select and copy the prepared text using your device’s copy command. No message has been sent.";
      }
    });
    draft.addEventListener("click", () => {
      status.textContent =
        "An email draft has been requested. Complete sending in your email application; this website cannot confirm whether it was sent.";
    });

    // AJAX uses an explicit configured endpoint; success means service acceptance, not email delivery.

    // -----------------------------------------------------------------------------
    // 12. Asynchronous submission and cleanup
    // -----------------------------------------------------------------------------
    // MDN Web Docs (2025) explains that Fetch sends requests and exposes HTTP response
    // status. Fetch sends JSON; response.ok is checked and AbortController limits
    // waiting.
    send.addEventListener("click", async () => {
      if (!endpoint || !prepared || pending || submitted) return;
      if (!showErrors(readValues(), true)) return;
      pending = true;
      setSendState("sending");
      fields.disabled = true;
      response.setAttribute("aria-busy", "true");
      status.textContent = "Submitting your reviewed message…";
      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 15000);
      try {
        const result = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...prepared.data,
            subject: prepared.message.subject,
            formType: mode,
          }),
          signal: controller.signal,
        });
        if (!result.ok) throw new Error("Service rejected request");
        const type = result.headers.get("content-type") || "";
        if (type.includes("application/json")) {
          const acknowledgement = await result.json();
          if (
            acknowledgement.success === false ||
            acknowledgement.ok === false ||
            acknowledgement.error ||
            acknowledgement.errors
          )
            throw new Error("Submission rejected");
        }
        submitted = true;
        setSendState("submitted");
        document.getElementById("delivery-note").textContent =
          "Your message has been accepted by Formspree. Email notification delivery is separate.";
        status.textContent =
          "Your message was submitted successfully to Formspree. This confirms receipt by the form service, not arrival in the recipient’s inbox or approval of the enquiry.";
      } catch (error) {
        setSendState("ready");
        status.textContent =
          "We could not confirm submission. Your text is still available to copy or prepare as an email. Check your connection before retrying; the service may already have received it.";
      } finally {
        window.clearTimeout(timeout);
        fields.disabled = false;
        response.removeAttribute("aria-busy");
        pending = false;
      }
    });
  }
}
