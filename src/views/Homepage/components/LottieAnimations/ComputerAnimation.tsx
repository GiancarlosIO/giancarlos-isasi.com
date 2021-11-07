import { Player, Controls } from '@lottiefiles/react-lottie-player';

import computerAnimation from './lottie-computer.json';

type ComputerAnimationProps = {};
const ComputerAnimation: React.FC<ComputerAnimationProps> = props => {
  return (
    <Player
      autoplay
      loop
      src={computerAnimation}
      style={{ height: '400px', width: '400px' }}
    />
  );
};

export default ComputerAnimation;
