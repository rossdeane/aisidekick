"use client";

import { Button } from "@/components/ui/button";
import { submitContactForm } from "@/app/actions/contact";
import { useState } from "react";

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm(formData);

    if (result.success) {
      setSuccess(true);
      e.currentTarget.reset();
    } else {
      setError(result.error || "Something went wrong");
    }

    setIsLoading(false);
  }

  return (
    <div className="w-full max-w-sm space-y-2">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          name="name"
          className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Your Name"
          type="text"
          required
        />
        <input
          name="email"
          className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Your Email"
          type="email"
          required
        />
        <input
          name="businessName"
          className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Your Business Name"
          type="text"
          required
        />
        <select
          name="businessType"
          className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          required
          defaultValue=""
        >
          <option value="" disabled className="text-muted-foreground">
            Select your business type
          </option>
          <option value="retail">Local Shop</option>
          <option value="salon">Salon/Beauty</option>
          <option value="estate-agent">Estate Agent</option>
          <option value="tradesperson">Tradesperson</option>
          <option value="wellness">Wellness Professional</option>
          <option value="restaurant">Restaurant/Café</option>
          <option value="professional-services">
            Professional Services (Accountant, Solicitor, etc.)
          </option>
          <option value="healthcare">Healthcare Practice</option>
          <option value="education">Education/Tutoring</option>
          <option value="fitness">Fitness/Personal Training</option>
          <option value="other">Other</option>
        </select>
        {error && <p className="text-sm text-red-500">{error}</p>}
        {success && (
          <p className="text-sm text-green-500">
            Thank you! We'll be in touch soon.
          </p>
        )}
        <Button
          type="submit"
          className="w-full bg-brand-accent hover:bg-brand-accent/90 text-white"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Book a Free Demo"}
        </Button>
      </form>
    </div>
  );
}
