import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import type { AcademyType } from "../types/academy_type";

interface FormComponentProps {
selectedAcademy: string | null;
setSelectedAcademy: React.Dispatch<React.SetStateAction<string | null >>;
academiesList: AcademyType[];
}

const FormComponent = ({selectedAcademy, setSelectedAcademy, academiesList}: FormComponentProps) => {

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
