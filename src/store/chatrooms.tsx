import { createStore } from "solid-js/store";
import WebSocketAsPromised from "websocket-as-promised";

type Chatrooms = Room[];

interface Room {
	ws: WebSocketAsPromised;
	name: string;
	id: string;
}

const [chatRooms, setChatRooms] = createStore<Chatrooms | undefined>(undefined);

export default {
	chatRooms,
	setChatRooms,
};
