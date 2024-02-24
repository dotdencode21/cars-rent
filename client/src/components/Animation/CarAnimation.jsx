import animationData from '@/assets/animations/RoadCar.json';

import Lottie from 'react-lottie';

const CarAnimation = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
  
    return (
        <Lottie options={defaultOptions} style={{ transform: "rotate(45deg)" }} height="100%" width={157} />
    );
  };
  
  export default CarAnimation;