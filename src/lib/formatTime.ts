/**
 * Formats the time difference between the current time and a given time.
 * @param time The given time to calculate the difference from.
 * @returns A formatted string representing the time difference.
 */
export default function formatTimeDifference(time: any) {
  const currentTime: Date = new Date();
  const givenTime: Date = new Date(time);
  //   console.log(currentTime.getTime(), givenTime.getTime());

  // Calculate the time difference in milliseconds
  const timeDifference = currentTime.getTime() - givenTime.getTime();

  // Convert milliseconds to seconds
  const seconds = timeDifference / 1000;

  if (seconds < 60) {
    return "1 min ago";
  }
  // total no of seconds in an hour=3600
  else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} mins ago`;
  }
  // total no of seconds in a day=86400
  else if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600);
    return `${hours} hours ago`;
  } else {
    const formattedDate = givenTime.toLocaleDateString("en-US");
    return formattedDate;
  }
}
