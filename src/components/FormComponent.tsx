import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import type { AcademyType } from "../types/academy_type";

interface FormComponentProps {
selectedAcademy: string | null;
setSelectedAcademy: React.Dispatch<React.SetStateAction<string | null >>;
academiesList: AcademyType[];
sendInformation: () => void;
}

const FormComponent = ({selectedAcademy, setSelectedAcademy, academiesList, sendInformation}: FormComponentProps) => {
  return (
    <>
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
          key={academy.name}
          value={academy.id}
          >
            <em>{academy.name}</em>
          </MenuItem>
        ))
        }
      </Select>
    </FormControl>

    <FormControl fullWidth>
      <InputLabel id="serviceSelector">Tipo de servicio</InputLabel>
      <Select
        labelId="serviceSelector"
        id="serviceSelector"
        value={""}
        label="Random"
        onChange={() => {}}
      ></Select>
    </FormControl>
  
    <Button variant="contained" onClick={sendInformation}>Continuar</Button>
    </>
  );
};

export default FormComponent;
