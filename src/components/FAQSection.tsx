import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="mb-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg
                 transition-all duration-300 ease-in-out
                 hover:shadow-2xl hover:border-white/20
                 p-4 md:p-6"
    >
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-white tracking-tight">{question}</span>
        <ChevronDown
          className={`h-6 w-6 text-indigo-300 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-gray-300 ${
          isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="leading-relaxed text-base">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: 'What is Lovable.ai?',
      answer:
        'Lovable.ai is an AI-powered platform designed to help businesses build and nurture stronger relationships with their customers through personalized interactions and data-driven insights. Think of it as your intelligent CRM assistant.',
    },
    {
      question: 'How does it help improve customer relationships?',
      answer:
        'Our AI analyzes customer data to provide insights into preferences, behaviors, and potential churn risks. It enables personalized communication, proactive support, and tailored offers, fostering loyalty and satisfaction.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'Absolutely. We prioritize data security with end-to-end encryption, regular security audits, and compliance with global data protection regulations like GDPR and CCPA. Your data is yours, and we treat it with the utmost care.',
    },
    {
      question: 'Can I integrate Lovable.ai with my existing CRM?',
      answer:
        'Yes, Lovable.ai is designed for seamless integration with popular CRM systems, marketing automation platforms, and other business tools. We offer extensive API documentation and support for easy setup.',
    },
    {
      question: 'What kind of support do you offer?',
      answer:
        'We offer 24/7 priority support for all our enterprise clients, including a dedicated account manager, technical assistance, and ongoing training. For other plans, we provide comprehensive documentation and email support.',
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gray-950">
      {/* Background gradient orb */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-30"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 opacity-30"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600 leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Find quick answers to the most common questions about Lovable.ai and how it can transform your customer relationships.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
