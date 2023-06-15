import { formatDistanceStrict } from 'date-fns';
// якщо треба місяць на укр
// import { uk } from 'date-fns/locale';

export const formatEventDuration = (start, end) => {
  return formatDistanceStrict(Date.parse(start), Date.parse(end));
};
// якщо треба місяць на укр
// export const formatEventDuration = (start, end) => {
//   return formatDistanceStrict(Date.parse(start), Date.parse(end), {
//     locale: uk,
//   });
// };
