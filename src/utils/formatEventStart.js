import { format } from 'date-fns';
// якщо треба місяць на укр
// import { uk } from 'date-fns/locale';

export const formatEventStart = start => {
  return format(Date.parse(start), 'dd MMMM yyyy, HH:mm');
};

// якщо треба місяць на укр
// export const formatEventStart = start => {
//   return format(Date.parse(start), 'dd MMMM yyyy, HH:mm', { locale: uk });
// };
