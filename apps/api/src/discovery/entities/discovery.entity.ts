import { DiscoveryStatusOption } from '../enums/discovery-status.enum';
import { DiscoverySeverity } from '../enums/discovery-severity.enum';

export class Discovery {
  id: string;
  type: string;
  title: string;
  body: string;
  categories: string[];
  severity: DiscoverySeverity;
  createdAt: string;
  status: DiscoveryStatusOption;
}
