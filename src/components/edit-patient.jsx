import { useState } from 'react';
import { updatePatient } from '../services/patient';

const EditPatient = ({ patient }) => {

    const handleInputChange = (event, setState) => {
        setState(event.target.value);
    }

    const [weight, setWeight] = useState(patient.weight);
    const [height, setHeight] = useState(patient.height);
    const [allergies, setAllergies] = useState(patient.allergies);
    const [chronicDiseases, setChronicDiseases] = useState(patient.chronicDiseases);
    const [currentMedication, setCurrentMedication] = useState(patient.currentMedication);
    const [familyHistory, setFamilyHistory] = useState(patient.familyHistory);



    const handleSubmit = (event) => {
        const updatedPatient = {
            weight,
            height,
            allergies,
            chronicDiseases,
            currentMedication,
            familyHistory
        };

        updatePatient(updatedPatient).then(
            () => {
                window.location.reload();
            }
        )
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} >
            <label>
                Peso:
                <input type="number" value={weight} onChange={(event) => handleInputChange(event, setWeight)} />
            </label>
            <label>
                Altura:
                <input type="number" value={height} onChange={(event) => handleInputChange(event, setHeight)} />
            </label>
            <label>
                Alergias:
                <input type="text" value={allergies} onChange={(event) => handleInputChange(event, setAllergies)} />
            </label>
            <label>
                Enfermedades crónicas:
                <input type="text" value={chronicDiseases} onChange={(event) => handleInputChange(event, setChronicDiseases)} />
            </label>
            <label>
                Medicación actual:
                <input type="text" value={currentMedication} onChange={(event) => handleInputChange(event, setCurrentMedication)} />
            </label>
            <label>
                Antecedentes familiares:
                <input type="text" value={familyHistory} onChange={(event) => handleInputChange(event, setFamilyHistory)} />
            </label>
            <input type="submit" value="Guardar" />
        </form>
    )
}

export default EditPatient;