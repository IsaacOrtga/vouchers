import type { AcademyType } from "../types/academy_type";

export const getAcademies = async (type = "", city = ""): Promise<AcademyType[]> => {
  try {
    const response = await fetch(`/json/academy.json`)
    if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: AcademyType[] = await response.json();
    let filteredData = data;
    if(type){
        filteredData = filteredData.filter(academy => academy.type === type);
    }
    if(city){
        filteredData = filteredData.filter(academy => academy.city === city);
    }
    return filteredData;
  } catch (error) {
    console.error('Error al recoger listado de academias: ', error)
    throw error;
  }
};
