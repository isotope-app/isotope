import { createStore } from 'solid-js/store';
import type { IPFSHTTPClient } from 'ipfs-http-client/dist/src/types';

interface IPFS {
  client: IPFSHTTPClient;
}

const [ipfsClient, setIpfsClient] = createStore<IPFS | undefined>(undefined);

export default {
  ipfsClient,
  setIpfsClient,
};
