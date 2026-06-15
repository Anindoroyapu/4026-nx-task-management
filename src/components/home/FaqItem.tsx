import { useState } from "react";

export default function FaqItem({ question, answer, defaultOpen }: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen ?? false);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <article className={`faq-item${open ? " open" : ""}`} onClick={toggle}>
      <h4><span className="dot">•</span>{question}</h4>
      <img
        src={open ? "/assets/imgRemoveCircleHalfDot.svg" : "/assets/imgAddCircleHalfDot.svg"}
        alt={open ? "collapse" : "expand"}
      />
      <p>{answer}</p>
    </article>
  );
}
