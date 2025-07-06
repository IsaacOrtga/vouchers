import FormComponent from "../components/FormComponent";
import Logo from "../components/Logo";
import BannerImg from "../assets/img/banner_nobg.png";
import "../styles/home.css";
import ReedemButton from "../components/ReedemButton";

const Home = () => {
  return (
    <div>
      <div className="w-100 flex justify-end mt-5">
        <ReedemButton />
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <Logo />
        <h5>Compra y canjea</h5>
      </div>
      <div className="flex justify-center">
        <img src={BannerImg} alt="Banner Bondl" />
      </div>
      <div className="p-7 flex flex-col gap-5">
        <FormComponent />
      </div>
    </div>
  );
};

export default Home;
