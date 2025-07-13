import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormComponent from "../components/FormComponent";
import RedeemButton from "../components/RedeemButton";
import type { AcademyType } from "../types/academy_type";
import { getAcademies } from "../api/get";
import BannerImg from "../assets/img/banner_nobg.png";
import Logo from "../components/Logo";
import "../styles/home.css";

const Home = () => {
  const navigate = useNavigate();
  const [academiesList, setAcademiesList] = useState<AcademyType[]>([]);
  const [selectedAcademy, setSelectedAcademy] = useState<string | null>("");

  // En esete useEffect se trae el listado de academias llamando a getAcademies dentro del archivo api/get.tsx
  useEffect(() => {
    const getAcademyList = async () => {
      try {
        const result = await getAcademies("", "");
        console.log("Result: ", result);
        setAcademiesList(result);
      } catch (error) {
        console.error("ERROR: ", error);
      }
    };
    getAcademyList();
  }, [setAcademiesList]);

  const sendInformation = () => {
    console.log("SE ENVÍA LA INFORMACIÓN SIGUIENTE: ", selectedAcademy);
    navigate(`/academyDetails/${selectedAcademy}`);
  };

  return (
    <div className="homeContainer">
      <div className="mainHomeContainer flex flex-col">
        <div className="redeemButtonMobile w-100 flex justify-end mt-5">
          <RedeemButton />
        </div>
        <div className="flex flex-col items-center justify-center mt-10">
          <Logo />
          <h5>Compra y canjea</h5>
        </div>
        <div className="flex justify-center">
          <img src={BannerImg} alt="Banner Bondl" />
        </div>
      </div>
      <div className="formHomeContainer p-7 flex flex-col gap-5">
        <Card variant="outlined" className="redeemButtonDesktop">
          <h5 className="text-xl font-bold">
            Si ya tienes un bono, canjéalo en el siguiente paso
          </h5>
          <div>
            <RedeemButton />
          </div>
        </Card>
        <Card variant="outlined" className="formHomeContent flex flex-col gap-5">
          <h5 className="formHomeSubtitle text-xl font-bold">
            O compra un nuevo bono
          </h5>
          <FormComponent
            selectedAcademy={selectedAcademy}
            setSelectedAcademy={setSelectedAcademy}
            academiesList={academiesList}
            sendInformation={sendInformation}
          />
        </Card>
      </div>
    </div>
  );
};

export default Home;
