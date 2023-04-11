import type { BaseDomainEvent, BaseEntity } from "./util-types";

export type EventivePlugin<
  CurrentRevision extends string,
  DomainEvent extends BaseDomainEvent<string, string, {}>,
  State extends {}
> = {
  onDispatched?(args: {
    event: Extract<DomainEvent, { revision: CurrentRevision }>;
    entity: BaseEntity<State>;
  }): void;
};
