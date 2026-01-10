import logoImage from "../assets/img/logo_nobg.png";

const Logo = () => {
  return (
    <>
      <img className="logoImg h-10" src={logoImage} alt="Logo Bondl" />
      <h1 className="titleApp text-3xl font-bold">Bondl</h1>
    </>
  );
};

export default Logo;
