import React, { useState } from 'react';
import { IAppointment } from '@/types';

interface EditAppointmentFormProps {
  initialData: IAppointment;
  onSave: (data: IAppointment) => void;
  onCancel: () => void;
}

const EditAppointmentForm: React.FC<EditAppointmentFormProps> = ({ initialData, onSave, onCancel }) => {
  const [formData, setFormData] = useState<IAppointment>(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        type="text"
        name="first_name"
        value={formData.first_name}
        onChange={handleChange}
        className="border p-1"
      />
      <input
        type="text"
        name="last_name"
        value={formData.last_name}
        onChange={handleChange}
        className="border p-1"
      />
      <input
        type="text"
        name="service_id"
        value={formData.service_id}
        onChange={handleChange}
        className="border p-1"
      />
      <input
        type="text"
        name="appointment_date"
        value={formData.appointment_date}
        onChange={handleChange}
        className="border p-1"
      />
      <div className="flex justify-between">
        <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">Save</button>
        <button type="button" onClick={onCancel} className="bg-red-500 text-white px-3 py-1 rounded">Cancel</button>
      </div>
    </form>
  );
};

export default EditAppointmentForm;
