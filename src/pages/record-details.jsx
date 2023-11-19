import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getRecord } from '../services/records'; // Importa la función getRecord

const RecordDetails = () => {
    const { id } = useParams();
    const [record, setRecord] = useState(null);

    useEffect(() => {
        getRecord(id)
            .then(setRecord)
            .catch(error => {
                console.error(error);
            });
    }, [id]);

    if (!record) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h4>Diagnostico: {record.diagnosis}</h4>
            <p>Sintomas: {record.symptoms}</p>
            <p>Tratamiento: {record.treatment}</p>
            <p>Fecha: {record.issuedOn}</p>
            <Link to="/app/records">Regresar</Link>
        </div>
    );
};

export default RecordDetails;