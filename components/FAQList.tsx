import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "What types of machinery do you supply?",
    answer:
      "We supply machinery for water treatment and RO systems, water bottling, juice and beverage production, packaging, and plastic manufacturing.",
  },
  {
    question: "Do you provide machine installation?",
    answer:
      "Yes. We provide installation and setup support for the machinery we supply, depending on the machine and project requirements.",
  },
  {
    question: "Do you provide maintenance and repair services?",
    answer:
      "Yes. We provide maintenance and repair support to help keep supplied machinery operating reliably and reduce unnecessary downtime.",
  },
  {
    question: "Can you supply complete production plants?",
    answer:
      "Yes. Depending on the project, we can discuss complete production systems or individual machines based on your required production capacity and setup.",
  },
  {
    question: "Can machinery be customized according to our requirements?",
    answer:
      "Machine configuration and specifications can vary depending on production capacity, product requirements, available space, and other project requirements. Contact us to discuss your specific needs.",
  },
  {
    question: "Do you provide technical support after installation?",
    answer:
      "Yes. We provide technical support for machinery operation, troubleshooting, maintenance, and other equipment-related requirements.",
  },
  {
    question: "How can I request a quotation?",
    answer:
      "You can contact our sales team through the Contact Us page or WhatsApp. Please provide the machine you are interested in and your production requirements so we can discuss the appropriate configuration.",
  },
];

export default function FAQList() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="rounded-lg border border-border bg-background px-6 sm:px-8">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
