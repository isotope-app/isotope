import { createStore } from 'solid-js/store';

interface Room {
  topic: string;
}

const [chatRooms, setChatRooms] = createStore<Room[]>([]);

export default {
  chatRooms,
  setChatRooms,
};
