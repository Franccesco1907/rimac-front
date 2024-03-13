
export const Background = () => {
  return (
    <div>
      <img
        src="/images/blur-purple.svg"
        alt=" BlurPurple"
        className="fixed bottom-0 left-0 hidden md:flex z-0"
        width={0}
        height={0}
        style={{ width: 'auto', height: 'auto' }}
      />
      <img
        src="/images/blur-green.svg"
        alt=" BlurGreen"
        className="fixed bottom-0 right-0 hidden md:flex"
        width={0}
        height={0}
        style={{ width: 'auto', height: 'auto' }}
      />
      <img
        src="/images/blur-purple-small.svg"
        alt=" BlurPurple"
        className="fixed bottom-0 left-0 flex md:hidden"
        width={0}
        height={0}
        style={{ width: 'auto', height: 'auto' }}
      />
      <img
        src="/images/blur-green-small.svg"
        alt=" BlurGreen"
        className="fixed top-0 right-0 flex md:hidden"
        width={0}
        height={0}
        style={{ width: 'auto', height: 'auto' }}
      />
    </div>
  );
};