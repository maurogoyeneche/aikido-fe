import ContactForm from "@/components/contact-form";
import ContactInfo from "@/components/contact-info";

export default function ContactPage() {
  return (
    <main className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-6 py-16 sm:grid-cols-2 lg:px-10">
      <ContactForm />
      <ContactInfo />
    </main>
  );
}
