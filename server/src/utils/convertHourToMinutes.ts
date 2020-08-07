export default function convertHourToMinutes(time: string) {
  //8:00
  const [hour, minute] = time.split(":").map(Number);
  const timeInMinutes = hour * 60 + minute;

  return timeInMinutes;
}
