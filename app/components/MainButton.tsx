import Link from "next/link";

interface MainButtonProps {
  href: string;
  text: string;
}

export default function MainButton({
  href,
  text,
}: MainButtonProps): JSX.Element {
  return (
    <Link
      href={href}
      className="relative w-44 lg:w-60 h-10 lg:h-14 flex items-center justify-center text-white text-sm lg:text-base hover:scale-105 transition-transform duration-300"
    >
      <span className="z-10">{text}</span>
    </Link>
  );
}
