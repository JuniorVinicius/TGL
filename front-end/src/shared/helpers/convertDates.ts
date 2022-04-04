
export const convertDates = (date: any): string => {
  return  date.replace(/-/gi, "/").match(/\d{4}\/\d{2}\/\d{2}/gi)[0]
  .split("/")
  .reverse()
  .join("/");
};
