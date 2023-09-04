import { ParentComponent, children } from 'solid-js';

import 'virtual:uno.css'

export interface ButtonProps {
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: ParentComponent<ButtonProps> = (props) => {
  const content = children(() => props.children);
  return (
    <button
      type="button"
      onClick={props.onClick}
    >
      {content()}
    </button>
  );
};
