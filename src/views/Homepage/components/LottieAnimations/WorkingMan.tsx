import { Player, Controls } from '@lottiefiles/react-lottie-player';

import computerAnimation from './36707-working-man.json';

type ComputerAnimationProps = {};
const ComputerAnimation: React.FC<ComputerAnimationProps> = props => {
  return (
    <Player
      autoplay
      loop
      src={computerAnimation}
      style={{ height: '100%', width: '100%' }}
    />
  );
};

export default ComputerAnimation;
