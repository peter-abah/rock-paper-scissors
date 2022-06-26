import React from 'react';
import clsx from 'clsx';
import { titleCase } from '../../utils';
import './ChoiceBtn.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  choice: string;
}
function ChoiceButton({ choice, ...props }: Props) {
  return (
    <button className={clsx('choice-btn', choice)} {...props} >
      <span className='sr-only'>{titleCase(choice)}</span>
    </button>
  );
}

export default ChoiceButton;