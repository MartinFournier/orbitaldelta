const dateShortFormatter = new Intl.DateTimeFormat('en-CA', {
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

export function formatDateShort(time: Date | number) {
  return dateShortFormatter.format(time);
}

export function formatDateTime(time: Date | number) {
  return dateTimeFormatter.format(time);
}
