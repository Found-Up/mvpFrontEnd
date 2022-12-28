import React from 'react';
import './mybutton.css';

type MyButtonProps = {
    primary?: boolean,
    label: string,
    size?: 'small' | 'medium' | 'large',
    shape?: 'square' | 'round',
    //backgroundColor: string,
    onClick?: () => void
}

export const MyButton = ({
    primary = true,
    size = 'medium',
    shape = 'square',
    //backgroundColor,
    label,
    ...props
  }: MyButtonProps) => {
    const modePrimary = primary ? 'MyButton--primary' : 'MyButton--secondary';
    
    return (
      <button
        type="button"
        className={['MyButton', `MyButton--${size}`, `MyButton--${shape}`, modePrimary].join(' ')}
        // style={{ backgroundColor }}
        {...props}
      >
        {label}
      </button>
    );
  };