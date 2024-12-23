import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const FAQSection = () => {
  return (
    <section className="py-12">
      <div className="container px-6 mx-auto">
        <h2 className="text-4xl max-md:text-3xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqContent.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg hover:no-underline font-medium text-gray-800 p-3 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-left text-md p-3 bg-gray-50 border-b border-gray-200">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

const faqContent = [
  {
    question: "What is the UAE immigration process?",
    answer: "The UAE immigration process involves applying for a residence or work visa, which can be sponsored by an employer, family, or a government entity.",
  },
  {
    question: "How long does it take to get a UAE work visa?",
    answer: "The processing time for a UAE work visa typically ranges from 7 to 15 working days, depending on the applicant's nationality and employer.",
  },
  {
    question: "Can I apply for a UAE residence visa if I am self-employed?",
    answer: "Yes, self-employed individuals can apply for a UAE residence visa under the freelance visa program.",
  },
  {
    question: "What documents are required for a UAE work visa?",
    answer: "Typical documents include a valid passport, an employment offer letter, a medical fitness certificate, and proof of accommodation.",
  },
  {
    question: "How can I extend my UAE residency visa?",
    answer: "You can extend your UAE residency visa by renewing it through your employer or relevant government authority before its expiry.",
  },
];

export default FAQSection;
