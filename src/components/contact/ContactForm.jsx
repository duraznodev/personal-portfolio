import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { FormButton, FormLabel, FormTextArea } from "./";

export const ContactForm = () => {
  const [formState, setFormState] = useState("neutral");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setFormState("loading");
    emailjs
      .sendForm(
        "personal-portfolio",
        "template_a5jfi5c",
        form.current,
        "tTY7s2Ag-hfF6fpym"
      )
      .then(
        () => {
          setFormState("success");
        },
        () => {
          setFormState("error");
        }
      );
  };
  return (
    <form className="pb-4 pt-8" ref={form} onSubmit={sendEmail}>
      <div className="mx-auto flex w-10/12 gap-5">
        <FormLabel text="Name" name="user_name" required />
        <FormLabel text="Email" name="user_email" type="email" required />
      </div>
      <div className="mx-auto mt-10 w-10/12">
        <FormLabel text="Subject" name="subject" />
      </div>
      <div className="mx-auto mt-12 w-10/12">
        <FormTextArea text="Message" name="message" />
      </div>
      <div className="mx-12 mt-4 flex justify-end">
        <FormButton type={formState} />
      </div>
    </form>
  );
};
