import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormComponent from "../components/FormComponent";
import ReedemButton from "../components/ReedemButton";
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
        <FormComponent
          selectedAcademy={selectedAcademy}
          setSelectedAcademy={setSelectedAcademy}
          academiesList={academiesList}
          sendInformation={sendInformation}
        />
      </div>
    </div>
  );
};

export default Home;
