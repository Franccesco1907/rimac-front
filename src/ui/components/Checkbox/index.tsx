import { FC } from 'react';
interface Props {
  text?: string;
  isActive?: boolean;
  type?: 'rounded' | 'square';
  size?: 'sm' | 'normal';
  bgColor?: 'black' | 'green';
  textColor?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: FC<Props> = ({
  text,
  bgColor = '',
  textColor = '',
  size = 'normal',
  type = 'square',
  ...field
}) => {
  const borderColor = 'border-gray-300';
  const borderRadius = type === 'square' ? 'rounded' : 'rounded-full';
  const checkmarkSize = size === 'sm' ? 'w-8 h-8' : 'w-6 h-6';
  const textSize = size === 'normal' ? 'text-sm' : 'text-lg';

  return (
    <label className={`flex items-center cursor-pointer ${textSize}`}>
      <input
        {...field}
        type="checkbox"
        className={`flex justify-center items-center cursor-pointer p-1 border ${textColor} ${checkmarkSize} ${borderColor} ${bgColor} ${borderRadius} bg-no-repeat accent-white-500`}
      />
      <span className="ml-2">{text}</span>
    </label>
  );
};
