interface MenuCardProps {
  text1: string;
  onClick: () => void;
  active?: boolean;
}

export default function MenuCard({ text1, onClick, active }: MenuCardProps) {
  return (
    <>
      <button
        onClick={onClick}
        aria-label="Category"
        className="flex justify-center items-center"
      >
        <span className={` text-xl ${active ? " text-[#8d877f]" : ""}`}>
          {text1}
        </span>
      </button>
    </>
  );
}
