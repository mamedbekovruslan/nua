import AddIcon from "@/assets/icons/add.svg?react";

const icons = {
  add: AddIcon,
};

export type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export const Icon = ({ name, size = 24, className }: IconProps) => {
  const SvgIcon = icons[name];
  return <SvgIcon width={size} height={size} className={className} />;
};
