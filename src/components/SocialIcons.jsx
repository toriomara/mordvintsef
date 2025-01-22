import Link from "next/link";
import {
  FaTelegramPlane,
  FaVk,
  FaOdnoklassniki,
  FaWhatsapp,
} from "react-icons/fa";

export const SocialIcons = (props) => {
  return (
    <div className={`${props.layout} gap-4 self-center`}>
      <Link
        href="#"
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
        passHref={true}
      >
        <FaTelegramPlane size={24} />
        <span className="sr-only">Telegram page</span>
      </Link>
      <Link
        href="#"
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
        passHref={true}
      >
        <FaWhatsapp size={24} />
        <span className="sr-only">Whatsapp page</span>
      </Link>
      <Link
        href="#"
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
        passHref={true}
      >
        <FaVk size={24} />
        <span className="sr-only">Vkontakte page</span>
      </Link>
      <Link
        href="#"
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
        passHref={true}
      >
        <FaOdnoklassniki size={24} />
        <span className="sr-only">Odnoklassniki page</span>
      </Link>
    </div>
  );
};
