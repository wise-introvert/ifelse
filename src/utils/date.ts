export const formatDate = (isoDateString: string): string => {
  const date: Date = new Date(isoDateString);
  const day: number = date.getDate();
  const monthIndex: number = date.getMonth();
  const year: number = date.getFullYear();

  const daySuffix: string = getDaySuffix(day);
  const monthName: string = getMonthName(monthIndex);

  return `${day}${daySuffix} ${monthName}, ${year}`;
};

export const getDaySuffix = (day: number): string => {
  if (day >= 11 && day <= 13) {
    return "th";
  }

  const lastDigit: number = day % 10;
  switch (lastDigit) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

export const getMonthName = (monthIndex: number): string => {
  const monthNames: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return monthNames[monthIndex];
};
