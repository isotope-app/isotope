import { createStore } from "solid-js/store";

interface User {
  address: string;
  publicKey: string;
}

const [user, setUser] = createStore<User | undefined>(undefined);

export default {
  user, setUser
};
