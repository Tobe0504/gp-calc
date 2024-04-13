import classes from "./HomePageAboutaAndFaqs.module.css";

const HomePageAboutaAndFaqs = () => {
  const faqs = [
    {
      question: "About GP Calc.",
      answer:
        "We are dedicated to helping students excel in their academic journey. With our intuitive grade point calculator and GPA tracking features, we aim to simplify the process of managing grades, setting goals, and achieving academic success. Our platform offers personalized insights, projections, and recommendations to empower students with the tools they need to optimize their performance. Whether you're a college student, university attendee, or even a high school student aspiring for excellence, GP Calc is designed to support your academic growth. Join thousands of students who have already unlocked their full potential with GP Calc and start your journey towards success today.",
    },
    {
      question: "Is GP Calc free to use?",
      answer:
        "Yes, GP Calc is completely free to use. You can access our grade point calculator, GPA tracking, and other features without any cost.",
    },
    {
      question: "Can I access GP Calc on my mobile device?",
      answer:
        "Yes, GP Calc is fully responsive and accessible on all mobile devices, including smartphones and tablets. You can conveniently track your grades and monitor your progress on the go.",
    },
    {
      question: "Can I share my GPA progress with others?",
      answer:
        "Absolutely! GP Calc allows you to easily share your GPA progress and achievements on social media platforms. Celebrate your academic success and inspire others in their own journeys.",
    },
    {
      question: "Is my data secure and private?",
      answer:
        "We take data privacy and security seriously. Your information is securely stored and encrypted, and we adhere to strict privacy standards to protect your data. You have full control over your account and can delete your data at any time.",
    },
    {
      question: "How accurate are the projections and recommendations?",
      answer:
        "Our projections and recommendations are based on sophisticated algorithms and statistical analysis. While they provide valuable insights, it's important to note that individual circumstances may vary.",
    },
    {
      question: "What if I have further questions or need support?",
      answer:
        "We're here to help! If you have any additional questions or need support, please reach out to our dedicated customer support team. We are available via email or through our support portal to assist you promptly.",
    },
  ];
  return (
    <section className={classes.container}>
      <div className={classes.leftSection}>
        {faqs.slice(0, 1).map((data, i) => {
          return (
            <div className={classes.faqCard} key={i}>
              <h6>{data.question}</h6>
              <p>{data.answer}</p>
            </div>
          );
        })}
      </div>
      <div className={classes.rightSection}>
        {faqs.slice(1).map((data, i) => {
          return (
            <div className={classes.faqCard} key={i}>
              <h6>{data.question}</h6>
              <p>{data.answer}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomePageAboutaAndFaqs;
