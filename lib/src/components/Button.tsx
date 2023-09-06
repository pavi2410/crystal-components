import { ParentComponent, children } from 'solid-js';
import {cva} from "cva";

import '@/styles.js'

export interface ButtonProps {
  /** @default filled */
  variant?: 'filled' | 'outline' | 'flat' | 'ghost';
  /** @default medium */
  size?: 'small' | 'medium' | 'large';
  /** @default rounded */
  radius?: 'square' | 'rounded' | 'circular';
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: ParentComponent<ButtonProps> = (props) => {
  const buttonStyles = cva('', {
    variants: {
      variant: {
        filled: 'bg-blue-500 text-white',
        outline: 'bg-transparent border border-blue-500 text-blue-500',
        flat: 'bg-blue-200 text-blue-500',
        ghost: 'bg-transparent text-blue-500',
      },
      size: {
        small: 'px-2 py-1 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg',
      },
      radius: {
        square: 'rounded-none',
        rounded: 'rounded-md',
        circular: 'rounded-full',
      }
    },
    defaultVariants: {
      variant: 'filled',
      size: 'medium',
      radius: 'rounded',
    },
  })

  const content = children(() => props.children);

  return (
    <button
      type="button"
      class={buttonStyles({
        variant: props.variant,
        size: props.size,
        radius: props.radius,
      })}
      onClick={props.onClick}
    >
      {content()}
    </button>
  );
};
