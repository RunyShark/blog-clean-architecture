import moment from 'moment';

import { DateAdapterImpl } from './date.adapter.domain';

export const date = new DateAdapterImpl(moment);
