export const accordionItems = [
  {
    id: 1,
    question: "What is Medcol?",
    answer:
      "Medcol is an AI-powered pre-visit layer that prepares both patients and clinicians before they meet. Patients share their story in natural language, and Medcol synthesizes it into a structured, clinician-ready summary.",
    controls: "uc-accordion-24",
    expanded: true,
  },
  {
    id: 2,
    question: "What Medcol is NOT?",
    answer:
      "Medcol is not an EHR—it sits before the visit and integrates where possible. It's not a diagnostic engine—it structures information and supports preparation; clinical decisions remain with licensed clinicians. It's not an advertising/data-selling business—trust is central; data use is consent-driven and purpose-limited.",
    controls: "uc-accordion-26",
    expanded: false,
  },
  {
    id: 3,
    question: "How does Medcol benefit patients?",
    answer:
      "Patients feel heard before the appointment starts. They experience less anxiety and less repetition. More time in the visit is available for real discussion and understanding rather than explaining basics.",
    controls: "uc-accordion-28",
    expanded: false,
  },
  {
    id: 4,
    question: "How does Medcol benefit clinicians?",
    answer:
      "Clinicians start with context instead of blank charts. Fewer 'I forgot to ask…' moments. Less cognitive load and less avoidable admin work. The visit starts faster and feels more human.",
    controls: "uc-accordion-30",
    expanded: false,
  },
  {
    id: 5,
    question: "How does Medcol benefit clinics?",
    answer:
      "Smoother flow on busy days with less front-desk chaos and fewer delays cascading. More consistent patient experience leading to better trust, reviews, and repeat visits. Better readiness for documentation quality and operational metrics.",
    controls: "uc-accordion-32",
    expanded: false,
  },
];

export const accordionItems2 = [
  {
    id: 23,
    title: "Patient Pre-Visit Interview",
    icon: "/assets/images/common/icons/zap.svg",
    content:
      "Patients share their story in natural language—symptoms, timeline, meds, history, concerns, and goals—via web or mobile.",
    isOpen: false,
  },
  {
    id: 25,
    title: "Clinician-Ready Summary",
    icon: "/assets/images/common/icons/target.svg",
    content:
      "Structured pre-visit summaries with key complaints, timeline, relevant history, patient priorities, and clarifying questions.",
    isOpen: false,
  },
  {
    id: 27,
    title: "Operational Readiness",
    icon: "/assets/images/common/icons/settings.svg",
    content:
      "See who is prepared vs not prepared, send reminders, and reduce last-minute intake burden at reception.",
    isOpen: true,
  },
];
