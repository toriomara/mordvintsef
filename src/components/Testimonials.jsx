import { TestimonialsSlider } from "./TestimonialsSlider";
import { TypographyH2 } from "./ui/TypographyH2";

const testimonials = [
  {
    id: 1,
    name: "Антон",
    image: "/images/testimonials/Anton.jpg",
    text: "Роман Федорович! Спасибо за профессиональную защиту на предварительном следствии и в суде. Только благодаря Вам, мне и моему товарищу удалось избежать уголовной ответственности",
    // estimation: 5,
  },
  {
    id: 2,
    name: "Дмитрий А.",
    image: "/images/testimonials/Dmitry.jpg",
    text: "Спасибо за квалифицированную помощь по делу о компенсации причиненного мне в ДТП тяжкого вреда здоровью",
    // estimation: 5,
  },
  {
    id: 3,
    name: "Алексей Г.",
    image: "/images/testimonials/AlexeyG.jpg",
    text: "Грамотный адвокат, несколько раз помогал мне выйти победителем из сложных жизненных ситуаций",
    // estimation: 5,
  },
  {
    id: 4,
    name: "Дамир",
    image: "",
    text: "Спасибо за грамотную защиту и настойчивость, которые привели к переквалификации моего уголовного дела с категории тяжких – на небольшой тяжести, а затем и к освобождению меня от уголовной ответственности",
    // estimation: 5,
  },
  {
    id: 5,
    name: "Наталья М.",
    image: "/images/testimonials/NataliaM2.jpg",
    text: "Хочу выразить благодарность и сказать большое спасибо адвокату Роману Федоровичу Мордвинцеву. Это очень чуткий, честный, отзывчивый человек. А самое главное - профессионал своего дела. Мой супруг мог получить большой срок наказания, но благодаря опыту, профессионализму и  компетентности Романа Федоровича, мы, можно сказать, отделались легким испугом. Очень рекомендую этого адвоката",
    // estimation: 5,
  },
  {
    id: 6,
    name: "Дмитрий С.",
    image: "/images/testimonials/DmitryC.jpg",
    text: "По совету своих знакомых обратился к адвокату Мордвинцеву Роману Федоровичу по поводу гражданского дела в отношение моей бывшей жены. Дело было достаточно сложным и эмоциональным. В работе Роман Федорович показал себя грамотным и профессиональным адвокатом, знающим свое дело и легко находящим общий юридический язык с судьями и их помощниками. Я бы советовал Романа Федоровича как грамотного адвоката по гражданским делам, который доведет ваше дело до победного конца",
    // estimation: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="grid container my-10">
      <TypographyH2 position={'flex justify-center'}>Отзывы</TypographyH2>
      <TestimonialsSlider testimonials={testimonials} />
    </section>
  );
};
