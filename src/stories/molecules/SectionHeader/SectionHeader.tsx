import React from 'react'
import Icon from '@mui/material/Icon';
import './sectionHeader.css'

type SectionHeaderProps = {
    label : string,
    leftIcon? : string,
    rightIcon? : string,
    onClick?: () => void
}

export const SectionHeader = ({
    label,
    leftIcon,
    rightIcon,
    ...props
  }: SectionHeaderProps) => {
    return (
      <div className="SectionHeader">
        {leftIcon && (
          <Icon>{leftIcon}</Icon>
        )}
        {label}
        {rightIcon && (
          <Icon>{rightIcon}</Icon>
        )}
      </div>
    );
  };