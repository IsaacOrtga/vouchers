import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import type { AcademyType } from "../types/academy_type";
import { getAcademies } from "../api/get";

const FormComponent = () => {
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
    <>
    <FormControl fullWidth>
      <InputLabel id="selectAcademy">Elegir academia</InputLabel>
      <Select
        labelId="selectAcademy"
        id="selectAcademy"
        value={selectedAcademy}
        label="Academia"
        onChange={(event) => {setSelectedAcademy(event.target.value)}}
      >
        {academiesList.map((academy) => (
          <MenuItem
          key={academy.id}
          value={academy.name}
          >
            <em>{academy.name}</em>
          </MenuItem>
        ))
        }
      </Select>
    </FormControl>
    <FormControl fullWidth>
      <InputLabel id="randomSelector">Búsqueda aleatoria</InputLabel>
      <Select
        labelId="randomSelector"
        id="randomSelector"
        value={""}
        label="Random"
        onChange={() => {}}
      ></Select>
    </FormControl>
       <FormControl fullWidth>
      <InputLabel id="citySelector">Ciudad</InputLabel>
      <Select
        labelId="citySelector"
        id="citySelector"
        value={""}
        label="City"
        onChange={() => {}}
      ></Select>
    </FormControl>
    <Button variant="contained">Continuar</Button>
    </>
  );
};

export default FormComponent;
