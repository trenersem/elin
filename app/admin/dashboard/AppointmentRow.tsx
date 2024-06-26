import React, { useState } from 'react';
import { IAppointment } from '@/types';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import EditAppointmentForm from './EditAppointmentForm';
import { deleteAppointment } from '@/services/deleteAppointment';
import { updateAppointment } from '@/services/updateAppointment';
import Modal from '@/components/ui/modal';

interface AppointmentRowProps {
  appointment: IAppointment;
  setAppointments: React.Dispatch<React.SetStateAction<IAppointment[]>>;
}

const AppointmentRow: React.FC<AppointmentRowProps> = ({ appointment, setAppointments }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenToDelete, setIsModalOpenToDlete] = useState(false);

  const handleDelete = async (id: string) => {
    try {
      await deleteAppointment(id);
      setAppointments((prevAppointments) => prevAppointments.filter((appt) => appt._id !== id));
      setIsModalOpenToDlete(false)
    } catch (error) {
      console.error('Failed to delete appointment:', error);
    }
  };

  const handleUpdate = async (updatedData: IAppointment) => {
    try {
      await updateAppointment(updatedData._id, updatedData);
      setAppointments((prevAppointments) =>
        prevAppointments.map((appt) => (appt._id === updatedData._id ? updatedData : appt))
      );
      setIsModalOpen(false)
    } catch (error) {
      console.error('Failed to update appointment:', error);
    }
  };

  return (
    <tr
        className='bg-transparent bg-opacity-50'
        style={{ backgroundColor: 'transparent' }}
    >
      <td className="px-6 py-4 whitespace-nowrap">
            {appointment.first_name} {appointment.last_name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap !bg-transparent">{appointment.service_id}</td>
      <td className="px-6 py-4 whitespace-nowrap">{appointment.appointment_date}</td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <IconEdit
          onClick={() => setIsModalOpen(true)}
          className="cursor-pointer text-blue-600 hover:text-blue-800"
        />
        <IconTrash
          onClick={() => setIsModalOpenToDlete(true)}
          className="cursor-pointer text-red-600 hover:text-red-800 ml-4"
        />
      </td>


      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
         <EditAppointmentForm
            initialData={appointment}
            onSave={handleUpdate}
            onCancel={() => setIsModalOpen(false)}
          />
      </Modal>
      <Modal isOpen={isModalOpenToDelete} onClose={() => setIsModalOpenToDlete(false)}>
        <div className="flex flex-col justify-center items-center text-black gap-5">
            <h3>Delete this appointment?</h3>
            <div className='flex justify-between w-full'>
                <button onClick={() => handleDelete(appointment._id)}>yes</button>
                <button onClick={() => setIsModalOpenToDlete(false)}>no</button>
            </div>
        </div>
      </Modal>

    </tr>
  );
};

export default AppointmentRow;
