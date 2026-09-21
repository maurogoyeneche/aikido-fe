import ContactForm from "@/components/contact-form";
import ContactInfo from "@/components/contact-info";

export default function ContactPage() {
  return (
    <main className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-16 sm:grid-cols-2">
      <ContactForm />
      <ContactInfo />
    </main>
  );
}
