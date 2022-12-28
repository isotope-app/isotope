import RoomEntry from './RoomEntry';
import userStore from '../store/user';
import ipfsStore from '../store/ipfs';
import chatroomsStore from '../store/chatrooms';
import { useNavigate } from '@solidjs/router';
import Button from './Button';
import Modal from './Modal';
import { createSignal } from 'solid-js';
import Input from './Input';
import { JoinEvent } from '@isotope-app/hydrogen';
import pubsubUtils from '../utils/pubsub';

export default () => {
  const navigate = useNavigate();
  let messageRef: HTMLInputElement;

  if (!(userStore.user.address && ipfsStore.ipfsClient.client)) navigate('/sign-in');

  const joinRoom = async (topic: string) => {
    ipfsStore.ipfsClient.client.pubsub.subscribe(topic, pubsubUtils.recieveBuffer).then(() => {
      const event = new JoinEvent(userStore.user.address, userStore.user.publicKey);
      event.init().then(() => {
        pubsubUtils.sendBuffer(ipfsStore.ipfsClient.client, topic, event.into());
      });
    });
    // console.log(ipfsStore.ipfsClient.client.isOnline());
  };

  return (
    <main class="p-8 grid grid-cols-5 gap-x-8 h-screen dark:text-white text-black">
      <div class="flex flex-col gap-y-4">
        <div class="flex items-center justify-between">
          <h3 class="font-alt font-medium text-xl">Project Isotope</h3>
          <div class="flex items-center gap-x-4">
            <Button>
              <SignOutIcon />
            </Button>
            <JoinRoomModal />
            <Button>
              <CogIcon />
            </Button>
          </div>
        </div>
        <div class="border-2 col-span-1 h-full p-4 flex flex-col gap-x-2 rounded-md">
          {chatroomsStore.chatRooms.length ? (
            chatroomsStore.chatRooms.map((room) => (
              <RoomEntry roomName={room.topic} joinRoom={() => joinRoom(room.topic)} />
            ))
          ) : (
            <span class='text-center text-xs text-gray-700 dark:text-gray-400'>
              You don't have any rooms yet. Click the plus button above to create one.
            </span>
          )}
        </div>
      </div>
      <div class="col-span-4 h-full flex flex-col gap-y-8">
        <div class="border-2 h-full p-4 rounded-md">
          <span>Chat area</span>
        </div>
        <Input ref={messageRef} placeholder="type your message here..." />
      </div>
    </main>
  );
};

const JoinRoomModal = () => {
  const [roomTopic, setRoomTopic] = createSignal('');
  const [visible, setVisible] = createSignal(false);
  const addRoom = () => {
    if (chatroomsStore.chatRooms.find((room) => room.topic === roomTopic())) return;
    chatroomsStore.setChatRooms((prev) => [
      ...prev,
      {
        topic: roomTopic(),
      },
    ]);
  };
  return (
    <>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        <PlusIcon />
      </Button>
      <Modal visible={visible}>
        <div class="flex items-center gap-x-2">
          <PlusCircleIcon />
          <h1 class="text-2xl font-medium font-alt">Add Room</h1>
        </div>
        <hr class="my-4 border-light-600 dark:border-dark-300" />
        <div class="flex flex-col gap-y-4">
          <Input
            label="Topic"
            onInput={(ev) => {
              setRoomTopic(ev.currentTarget.value);
            }}
          />
        </div>
        <hr class="my-4 border-light-600 dark:border-dark-300" />
        <div class="w-full flex items-center justify-end gap-x-4">
          <Button onClick={() => setVisible(false)}>Close</Button>
          <Button
            onClick={() => {
              setVisible(false);
              addRoom();
            }}
          >
            Add
          </Button>
        </div>
      </Modal>
    </>
  );
};

const SignOutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
    <path
      fill-rule="evenodd"
      d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
      clip-rule="evenodd"
    />
    <path
      fill-rule="evenodd"
      d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z"
      clip-rule="evenodd"
    />
  </svg>
);

const CogIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
    <path
      fill-rule="evenodd"
      d="M8.34 1.804A1 1 0 019.32 1h1.36a1 1 0 01.98.804l.295 1.473c.497.144.971.342 1.416.587l1.25-.834a1 1 0 011.262.125l.962.962a1 1 0 01.125 1.262l-.834 1.25c.245.445.443.919.587 1.416l1.473.294a1 1 0 01.804.98v1.361a1 1 0 01-.804.98l-1.473.295a6.95 6.95 0 01-.587 1.416l.834 1.25a1 1 0 01-.125 1.262l-.962.962a1 1 0 01-1.262.125l-1.25-.834a6.953 6.953 0 01-1.416.587l-.294 1.473a1 1 0 01-.98.804H9.32a1 1 0 01-.98-.804l-.295-1.473a6.957 6.957 0 01-1.416-.587l-1.25.834a1 1 0 01-1.262-.125l-.962-.962a1 1 0 01-.125-1.262l.834-1.25a6.957 6.957 0 01-.587-1.416l-1.473-.294A1 1 0 011 10.68V9.32a1 1 0 01.804-.98l1.473-.295c.144-.497.342-.971.587-1.416l-.834-1.25a1 1 0 01.125-1.262l.962-.962A1 1 0 015.38 3.03l1.25.834a6.957 6.957 0 011.416-.587l.294-1.473zM13 10a3 3 0 11-6 0 3 3 0 016 0z"
      clip-rule="evenodd"
    />
  </svg>
);

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
  </svg>
);

const PlusCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-6 h-6"
  >
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
