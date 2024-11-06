import React from 'react';
import { useParams } from 'react-router-dom';

function MeasurementForm() {
  const { formId } = useParams();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <h1 className="text-3xl">Measurement Form {formId}</h1>
    </div>
  );
}

export default MeasurementForm;
