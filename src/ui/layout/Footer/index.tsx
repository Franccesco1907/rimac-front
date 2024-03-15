export const Footer = () => {
  return (
    <footer className="bg-secondary z-30 relative">
      <div className="container mx-auto flex flex-col lg:flex-row  justify-between items-center px-6 py-3">
        <div className="">
          <img
            src="images/logo-rimac-white.svg"
            alt="Logo Rimac"
            width={85}
            height={42}
          />
        </div>

        <div className='mt-4 lg:mt-0'>
          <p className="text-white text-sm">
            © 2023 RIMAC Seguros y Reaseguros.
          </p>
        </div>
      </div>
    </footer>
  );
};