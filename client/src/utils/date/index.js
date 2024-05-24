import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(utc);
dayjs.extend(customParseFormat);

export const convertToISO8601UTC = (dateStr) => {
  const parsedDate = dayjs(dateStr, "DD/MM/YYYY");

  if (!parsedDate.isValid()) {
    throw new Error("Invalid date format");
  }

  const currentTime = dayjs();

  const dateTimeWithCurrentTime = parsedDate
    .hour(currentTime.hour())
    .minute(currentTime.minute())
    .second(currentTime.second())
    .millisecond(currentTime.millisecond());

  return dateTimeWithCurrentTime.utc().format();
};
