import { Button } from '@mantine/core';
import { NavbarSimple } from './NavbarSimple.tsx';
import {
  IconBasket
} from '@tabler/icons-react';
import { FeaturesCard } from './FeaturesCard.tsx';

function App() {
  return (
    <>
    <div style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>Vegetable Shop</h1>
      <Button rightSection={<IconBasket size={20} />}>Cart</Button>
    </div>
     <div style={{ display: 'flex', gap: '20px' }}>
      <NavbarSimple />
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <FeaturesCard />
      <FeaturesCard />
      <FeaturesCard />
      <FeaturesCard />
      </div>
    </div>
    </>
  );
}

export default App;