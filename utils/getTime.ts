export const getTime = () => {
    const timeList = [];

    const formatHour = (hour: number): string => {
        return hour < 10 ? `0${hour}` : hour.toString();
    };

    for (let i = 10; i <= 12; i++) {
        timeList.push({
            time: `${formatHour(i)}:00 AM`
        });
        timeList.push({
            time: `${formatHour(i)}:30 AM`
        });
    }

    for (let i = 1; i <= 6; i++) {
        timeList.push({
            time: `${formatHour(i)}:00 PM`
        });
        timeList.push({
            time: `${formatHour(i)}:30 PM`
        });
    }

    return timeList;
};