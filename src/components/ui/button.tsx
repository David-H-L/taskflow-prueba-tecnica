import { ButtonProps } from '@/types/index';

export default function Button({
  children,
  color = 'primary',
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const colorStyles = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        ${colorStyles[color]}
        px-4 py-2
        rounded-lg
        font-medium
        transition
        duration-200 
        text-sm sm:text-base
        ${className}
      `}
    >
      {children}
    </button>
  );
}
