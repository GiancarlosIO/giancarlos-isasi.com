import clsx from 'clsx';

import styles from './Container.module.scss';

const Container: React.FC<{
  className?: string;
}> = props => {
  return (
    <div
      className={clsx('mx-auto', props.className, styles['container-wrapper'])}
    >
      {props.children}
    </div>
  );
};

export default Container;
