const dateFormatter = new Intl.DateTimeFormat('en-CA', {
  month: '2-digit',
  day: '2-digit',
  year: 'numeric',
});

const dateTimeFormatter = new Intl.DateTimeFormat('en-CA', {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: false,
});

const timeFormatter = new Intl.DateTimeFormat('en-CA', {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: false,
});

export function formatDate(input: Date | number) {
  return dateFormatter.format(input);
}

export function formatTime(input: Date | number) {
  return timeFormatter.format(input);
}

export function formatDateTime(input: Date | number) {
  return dateTimeFormatter.format(input);
}

export function isNight(input: Date | number) {
  const date = typeof input === 'number' ? new Date(input) : input;
  const hours = date.getHours();
  return hours <= 6 || hours >= 21;
}
