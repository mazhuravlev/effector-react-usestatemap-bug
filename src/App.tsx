import { useStore, useStoreMap } from 'effector-react';
import React, { useState } from 'react';
import './App.css';
import { firstEvent, secondEvent, store } from './store';

const Test: React.FC = () => {
  const second = useStoreMap(store, x => x.second);
  return <div className="test">
    Test component
    <div>value: {second}</div>
    <button onClick={() => secondEvent(second + 1)}>fire event</button>
  </div>;
}

function App() {
  const [show, setShow] = useState(true);
  const state = useStore(store);
  return (
    <div>
      <p>1. Click "fire Second event", Test component will update. It is subscribed with 'useStoreMap'.</p>
      <p> 2. Unmount Test component with 'Toggle' button.</p>
      <p> 3. Click "fire Second event", warning will be displayed in console: 'Warning: Can't perform a React state update on an unmounted component.'</p>
      <button onClick={() => firstEvent(state.first + 1)}>fire First event</button>
      <button onClick={() => secondEvent(state.second + 1)}>fire Second event</button>
      <br />
      <button onClick={() => setShow(x => !x)}>Toggle</button>
      {show && <Test />}
    </div >
  );
}

export default App;
