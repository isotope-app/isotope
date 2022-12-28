import { createStore } from 'solid-js/store';

interface Room {
  name: string;
  address: string;
}

const [chatRooms, setChatRooms] = createStore<Room[] | undefined>(undefined);

export default {
  chatRooms,
  setChatRooms,
};
