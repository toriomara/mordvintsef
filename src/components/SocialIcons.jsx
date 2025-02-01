import Link from "next/link";
import {
  FaTelegramPlane,
  FaVk,
  FaOdnoklassniki,
  FaWhatsapp,
  FaViber,
} from "react-icons/fa";

export const SocialIcons = ({ layout }) => {
  return (
    <div className={`${layout} gap-4`}>
      <Link
        className="link text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
        href="https://telegram.me/advocatemrf"
        target="_blank"
        passHref={true}
      >
        <FaTelegramPlane size={24} />
        <span className="sr-only">Telegram page</span>
      </Link>
      <Link
        className="link text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
        href="https://wa.me/+79608670139"
        target="_blank"
        passHref={true}
      >
        <FaWhatsapp size={24} />
        <span className="sr-only">Whatsapp page</span>
      </Link>
      <Link
        className="link text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
        href="https://vk.com/id125353967"
        target="_blank"
        passHref={true}
      >
        <FaVk size={24} />
        <span className="sr-only">Vkontakte page</span>
      </Link>
      <Link
        href="viber://add?number=+79608670139"
        target="_blank"
        className="link text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
        passHref={true}
      >
        <FaViber size={24} />
        <span className="sr-only">Viber messenger</span>
      </Link>
    </div>
  );
};
