const LoadingBar = () => {
  return (
    <svg width={500} height={500}>
      <path fill="none" stroke="black" strokeWidth={2}>
        <animate
          attributeName="d"
          values="M0,0,200,200;M50,50C200,10,100,0,150,150"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};

export default LoadingBar;
