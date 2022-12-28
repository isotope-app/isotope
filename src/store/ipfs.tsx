import { createStore } from 'solid-js/store';
import type { IPFSHTTPClient } from 'ipfs-http-client/dist/src/types';

interface IPFS {
  client?: IPFSHTTPClient;
  apiAddress: string;
}

const [ipfsClient, setIpfsClient] = createStore<IPFS>({
  apiAddress: 'http://localhost:5001/api/v0',
});

export default {
  ipfsClient,
  setIpfsClient,
};
