import {PubSub} from '@google-cloud/pubsub';
import TransportStream from 'winston-transport';

type Severity =
  | 'fatal'
  | 'error'
  | 'warn'
  | 'info'
  | 'debug'
  | 'trace';

export interface StatusEvent {
  id?: string;
  datetime?: number;
  platform?: string;
  service?: string;
  severity: string;
  status?: string;
  message: string;
}

interface WinstonPubSubSchema {
  id: string;
  datetime?: string | number;
  platform?: string;
  service?: string;
  severity: Severity;
  status?: string;
  message: string;
}

interface WinstonPubSubOptions {
  topic: string;
  schema?: WinstonPubSubSchema;
  create?: boolean;
}

export class WinstonPubSub extends TransportStream {
  pubsub: PubSub;
  options: WinstonPubSubOptions;

  constructor(options: WinstonPubSubOptions) {
    super();
  }
}
