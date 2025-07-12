import { Button } from '@mantine/core';
import { NavbarSimple } from './NavbarSimple.tsx';
import {
  IconBasket
} from '@tabler/icons-react';

function App() {
  return (
    <>
    <div style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>Vegetable Shop</h1>
      <Button color="green" rightSection={<IconBasket size={20} />}>Корзина</Button>
    </div>
      <NavbarSimple />
    </>
  );
}

export default App;