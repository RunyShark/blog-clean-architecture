import { UuidAdapterDomain } from './uuid.adapter.domain';
import { v4 } from 'uuid';

export class UuidAdapterImpl implements UuidAdapterDomain {
  constructor(private readonly uuid: typeof v4) {}
  generate(): string {
    return this.uuid();
  }
}
