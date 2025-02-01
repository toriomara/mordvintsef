import Image from "next/image";
import { TypographyH2 } from "./ui/TypographyH2";

export const MissionSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 my-10">
      <div className="basis-3/4">
        <TypographyH2 position={"mb-4"}>Миссия</TypographyH2>
        <h3 className="scroll-m-20 mb-8 text-xl font-semibold tracking-tight">
          Моя глобальная цель заключается в защите прав, свобод и законных
          интересов граждан и организаций. Основные аспекты моей миссии:
        </h3>
        <div>
          <ol>
            <li className="leading-6 [&:not(:first-child)]:mt-6">
              1. Справедливость. Стремлюсь обеспечить справедливое рассмотрение
              дел, выступая на стороне закона и помогая клиентам отстаивать их
              права в любых правовых спорах.
            </li>
            <li className="leading-6 [&:not(:first-child)]:mt-6">
              2. Правовая защита. Главная задача — защищать интересы клиента,
              будь то в суде, при заключении сделок или в других правовых
              ситуациях. Это включает подготовку документов, консультации и
              представительство.
            </li>
            <li className="leading-6 [&:not(:first-child)]:mt-6">
              3. Доступ к правосудию. Содействую тому, чтобы каждый мой клиент
              имел возможность получить квалифицированную юридическую помощь,
              независимо от своего положения или обстоятельств.
            </li>
            <li className="leading-6 [&:not(:first-child)]:mt-6">
              4. Этика и конфиденциальность. Соблюдение профессиональной этики и
              сохранение адвокатской тайны — обязательные элементы моей работы,
              гарантирующие клиенту безопасность и доверие.
            </li>
            <li className="leading-6 [&:not(:first-child)]:mt-6">
              5. Пропаганда правовой культуры. Не только решаю конкретные дела,
              но и способствую формированию правовой грамотности в обществе,
              объясняя гражданам их права и обязанности.
            </li>
          </ol>
        </div>
      </div>
      <div className="chessboard relative basis-1/4 radial-gradient(circle, #000 1px, transparent 1px) dark:bg-dot-green-500 bg-[size:20px_20px] z-90">
        {/* <Image
          src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Product screenshot"
          className="rounded-xl opacity-30"
          fill
          //   width={2432}
          //   height={1442}
        /> */}
      </div>
    </div>
  );
};
