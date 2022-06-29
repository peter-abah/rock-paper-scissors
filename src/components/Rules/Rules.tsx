import clsx from 'clsx';
import rulesImg from '../../assets/image-rules.svg'
import { ReactComponent as CloseIcon } from '../../assets/icon-close.svg';
import './Rules.css';

interface Props {
  onClose: () => void;
  isOpen: boolean;
};

function Rules({ onClose, isOpen }: Props) {
  return (
    <section className={clsx('rules', isOpen && 'rules--open')}>
      <h2>RULES</h2>
      <img
        src={rulesImg}
        alt='Paper beats Rock. Rock beats scissors. Scissors beat Paper'
      />
      <button onClick={onClose}>
        <CloseIcon />
        <span className='sr-only'>Close</span>
      </button>
    </section>
  );
}

export default Rules;