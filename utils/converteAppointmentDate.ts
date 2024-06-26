import { toDate } from "date-fns/fp/toDate"

export const convertAppointmentDate = (date: string, time: string) => {
    return toDate(`${date}${' '}${time}`).toString()
}