import moment from 'moment';
import { DateAdapterDomain } from './date.adapter.Impl';

export class DateAdapterImpl implements DateAdapterDomain {
  constructor(private readonly formatterDate: typeof moment) {}

  DMY(dated: Date): string {
    return this.formatterDate(dated).format('DD/MM/YYYY');
  }
}
