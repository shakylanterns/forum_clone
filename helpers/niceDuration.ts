import { formatDuration, intervalToDuration } from "date-fns";

export const niceDuration = (start: Date) => {
  const duration = intervalToDuration({
    start: start,
    end: new Date(),
  });
  const formatString = formatDuration(duration, {
    format: ["years", "months", "days", "hours", "minutes"],
  });
  // if it is under a minute
  if (formatString === "") {
    return "less than a minute ago";
  }
  return formatString + " ago";
};
