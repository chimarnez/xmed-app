import { format } from 'date-fns';
import es from 'date-fns/locale/es';

export function formatDate(dateString) {
    return format(new Date(dateString), 'dd MMMM yyyy', { locale: es });
}