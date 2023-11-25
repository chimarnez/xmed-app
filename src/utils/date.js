import { format } from 'date-fns';
import es from 'date-fns/locale/es';
export function formatDate(dateString) {
    const date = new Date(dateString);
    const utcDate = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
    return format(utcDate, 'dd MMMM yyyy', { locale: es });
}