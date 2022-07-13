import React from 'react'
import logo from './logo.svg';
import './App.css';
import { Button, DatePicker } from 'antd';

function App() {
  return (
    <div className="App">
      <Button type="primary">Button</Button>
      <DatePicker placeholder="select date" />
    </div>
  );
}

export default App;
