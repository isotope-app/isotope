import type { IPFSHTTPClient } from 'ipfs-http-client/dist/src/types';
import type { Message } from '@libp2p/interface-pubsub';

export default {
  sendBuffer: (client: IPFSHTTPClient, topic: string, buffer: Buffer) => {
    client.pubsub.publish(topic, buffer);
  },
  receiveMessage: (message: Message) => {
    const magic = message.data[0];
    const data = message.data.slice(1);
    switch (magic) {
      case 0x05:
      case 0x06:
      case 0x24:
      case 0x16:
      case 0x07:
      case 0x02:
      default:
    }
    console.log(`Magic: ${magic.toString(16)}`);
  },
};
