import { Section } from "../components";
import { ContactForm } from "../components/contact";

export const Contact = () => {
  return (
    <Section title="Contact Me!" id="contact" vh="min-h-[80vh]">
      <div className="mx-10 w-10/12 rounded-lg border-2 border-neutral-200 bg-neutral-50 hover:shadow-xl">
        <ContactForm />
      </div>
    </Section>
  );
};
