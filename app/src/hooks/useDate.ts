const useDate = () => {
  const addLeadingZero = (value: number) => value.toString().padStart(2, '0');

  const getCurrentDate = (): string => {
    const currDate = new Date();

    return `${currDate.getFullYear()}-${addLeadingZero(
      currDate.getMonth() + 1,
    )}-${addLeadingZero(currDate.getDate())} ${addLeadingZero(
      currDate.getHours(),
    )}:${addLeadingZero(currDate.getMinutes())}:${addLeadingZero(
      currDate.getSeconds(),
    )}`;
  };

  return { getCurrentDate };
};

export default useDate;
