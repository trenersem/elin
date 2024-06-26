import React, { useEffect, useState } from 'react';
import { IAppointment } from '@/types';
import AppointmentRow from './AppointmentRow';
import moment from 'moment';

interface AppointmentTableProps {
  appointments: IAppointment[];
  setAppointments: React.Dispatch<React.SetStateAction<IAppointment[]>>;
}

const AppointmentTable: React.FC<AppointmentTableProps> = ({ appointments, setAppointments }) => {
  const [filteredAppointments, setFilteredAppointments] = useState<IAppointment[]>([]);

  const filterByDate = (filterType: 'all' | 'future' | 'past') => {
    const today = moment().startOf('day');
    let filtered: IAppointment[] = [];
    if (filterType === 'all') {
      filtered = [...appointments];
    } else if (filterType === 'future') {
      filtered = appointments.filter((appointment) => {
        const appointmentDateTime = moment.utc(appointment.appointment_date).local();
        return appointmentDateTime.isSameOrAfter(today);
      });
    } else if (filterType === 'past') {
      filtered = appointments.filter((appointment) => {
        const appointmentDateTime = moment.utc(appointment.appointment_date).local();
        return appointmentDateTime.isBefore(today);
      });
    }
    setFilteredAppointments(filtered);
  };

  return (
    <div className="overflow-x-auto">
        <div className='flex gap-5 w-full'>
        <button onClick={() => filterByDate('all')}>All Appointments</button>
        <button onClick={() => filterByDate('future')}>Future Appointments</button>
        <button onClick={() => filterByDate('past')}>Past Appointments</button>
        </div>
      <table className="min-w-full divide-y divide-gray-400">
        <thead className="bg-transparent">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-transparent divide-y divide-gray-400">
          {filteredAppointments.map((appointment) => (
            <AppointmentRow
              key={appointment._id}
              appointment={appointment}
              setAppointments={setAppointments}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentTable;
