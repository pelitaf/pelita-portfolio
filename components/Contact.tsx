"use client";

import {
  FormEvent,
  useState,
} from "react";

type FormStatus =
  | "idle"
  | "sending"
  | "success"
  | "error";

export default function Contact() {
  const [status, setStatus] =
    useState<FormStatus>("idle");

  const [errorMessage, setErrorMessage] =
    useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;

    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(payload),
        }
      );

      const contentType =
        response.headers.get(
          "content-type"
        );

      if (
        !contentType?.includes(
          "application/json"
        )
      ) {
        console.error(
          "Contact API returned non-JSON:",
          await response.text()
        );

        throw new Error(
          "The contact service could not be reached."
        );
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ??
            "Something went wrong."
        );
      }

      setStatus("success");

      form.reset();
    } catch (error) {
      console.error(error);

      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your message."
      );
    }
  }

  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="contact-heading">
          <p className="section-eyebrow">
            CONTACT
          </p>

          <h2 className="contact-title">
            Let&apos;s build something{" "}
            <span>together.</span>
          </h2>

          <p className="contact-description">
            Have an opportunity, project, or
            idea you&apos;d like to talk about?
            Send me a message and I&apos;ll get
            back to you as soon as I can.
          </p>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="contact-form-row">
            <div className="contact-field">
              <label htmlFor="name">
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
              />
            </div>

            <div className="contact-field">
              <label htmlFor="email">
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="contact-field">
            <label htmlFor="subject">
              Subject
            </label>

            <input
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="What would you like to talk about?"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              required
              rows={7}
              placeholder="Tell me a little about what you have in mind..."
            />
          </div>

          <div className="contact-form-footer">
            <button
              type="submit"
              className="contact-submit-button"
              disabled={
                status === "sending"
              }
            >
              {status === "sending"
                ? "Sending..."
                : "Send Message →"}
            </button>

            {status === "success" && (
              <p className="contact-status contact-status-success">
                Message sent! Thank you.
              </p>
            )}

            {status === "error" && (
              <p className="contact-status contact-status-error">
                {errorMessage}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}