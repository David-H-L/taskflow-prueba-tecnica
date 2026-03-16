import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  link: string;
};

export default function LinkButton({
  children,
  className = '',
  link = '',
}: ButtonProps) {
  return (
    <Link
      href={link}
      className={`
        bg-blue-500 hover:bg-blue-600 text-white
        px-4 py-2
        rounded-lg
        font-medium
        transition
        duration-200 
        text-sm sm:text-base
        text-center
        ${className}
      `}
    >
      {children}
    </Link>
  );
}
