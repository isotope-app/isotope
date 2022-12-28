import type { Component } from 'solid-js';
import SignInField from './components/SignInField';
import WelcomeHero from './components/WelcomeHero';
import { Routes, Route } from '@solidjs/router';
import Chatrooms from './components/Chatrooms';

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomeHero />} />
      <Route path="/sign-in" element={<SignInField />} />
      <Route path="/chat" element={<Chatrooms />} />
    </Routes>
  );
};

export default App;
