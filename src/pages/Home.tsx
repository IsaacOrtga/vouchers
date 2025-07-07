import FormComponent from "../components/FormComponent";
import Logo from "../components/Logo";
import BannerImg from "../assets/img/banner_nobg.png";
import "../styles/home.css";
import ReedemButton from "../components/ReedemButton";
import { useEffect, useState } from "react";
import type { AcademyType } from "../types/academy_type";
import { getAcademies } from "../api/get";

const Home = () => {
    const [academiesList, setAcademiesList] = useState<AcademyType[]>([]);
    const [selectedAcademy, setSelectedAcademy] = useState<string | null>('');
   
    useEffect(() => {
      const getAcademyList = async () => {
      try {
        const result = await getAcademies('', '');
        console.log('Result: ', result)
        setAcademiesList(result);
      } catch (error) {
        console.error('ERROR: ', error);
      }      
      };
      getAcademyList();
    }, []);
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
        <FormComponent selectedAcademy={selectedAcademy} setSelectedAcademy={setSelectedAcademy} academiesList={academiesList}/>
      </div>
    </div>
  );
};

export default Home;
