"use client";

import { useState } from 'react'
import clsx from 'clsx'
import { ComponentProps } from 'react'

export type ButtonProps = Omit<ComponentProps<"button">, 'style'> & {
  style?: 'grey' | 'none'
  filter?: string;
  on?: boolean
};

export const FilterButton = ({
  style = 'none',
  filter = '',
  on = false,
  className,
  ...props
}: ButtonProps) => {

  const [isClicked, setIsClicked] = useState(false)

  // if (on === true){
  //   const [isClicked, setIsClicked] = useState(true);
  // } else {
  //   const [isClicked, setIsClicked] = useState(false);
  // }

  const handleClick = () => {
    setIsClicked(!isClicked)  // Toggle the clicked state
  }

  // if (on === true){
  //   setIsClicked(!isClicked);
  // } else {

  // }


  return (
    <button
      {...props}
      onClick={handleClick}
      className={clsx(
        'block',
        {
          'flex-nowrap items-center box-border justify-around content-center rounded-full border-solid border-2 pb-0 pt-0 pl-2 pr-2': true,
          'border-slate-500 bg-slate-100 hover:bg-slate-200': !isClicked && style === 'none',
          'border-blue-500 bg-blue-300 transition-duration: 500ms': isClicked && style === 'none',
        },
        className
      )}
      >
      {props.children}
      {filter && <p>{filter}</p>}
    </button>
  )
}
