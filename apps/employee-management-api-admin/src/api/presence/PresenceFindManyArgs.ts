import { PresenceWhereInput } from "./PresenceWhereInput";
import { PresenceOrderByInput } from "./PresenceOrderByInput";

export type PresenceFindManyArgs = {
  where?: PresenceWhereInput;
  orderBy?: Array<PresenceOrderByInput>;
  skip?: number;
  take?: number;
};
