import React from 'react';
import Icon from '@mui/material/Icon';
import './mybutton.css';

type MyButtonProps = {
    primary?: boolean,
    label: string,
    size?: 'small' | 'medium' | 'large',
    shape?: 'square' | 'round',
    leftIcon?: string,
    rightIcon?: string,
    //backgroundColor: string,
    onClick?: () => void
}

export const MyButton = ({
    primary = true,
    size = 'medium',
    shape = 'square',
    //backgroundColor,
    label,
    leftIcon,
    rightIcon,
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

        {leftIcon && (
          <Icon>{leftIcon}</Icon>
        )}
        {label}
        {rightIcon && (
          <Icon>{rightIcon}</Icon>
        )}

        {/* <Icon>{leftIcon}</Icon>
        {label}
        <Icon>{rightIcon}</Icon> */}
        
      </button>
    );
  };