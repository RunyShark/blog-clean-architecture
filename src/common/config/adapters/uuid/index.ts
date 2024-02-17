import { v4 } from 'uuid';
import { UuidAdapterImpl } from './uuid.adapter.Impl';

export const uuid = new UuidAdapterImpl(v4);
