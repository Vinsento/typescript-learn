import { ReactNode } from "react";

export interface TagProps{
  children: ReactNode;
  size: 's' | 'm' | 'l';
  bgColor?: 'transparent' | 'pink' | 'blue';
  href?: string;
}