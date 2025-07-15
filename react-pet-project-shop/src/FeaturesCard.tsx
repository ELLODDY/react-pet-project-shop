import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons-react';
import { Badge, Button, Card, Center, Group, Image, Text } from '@mantine/core';
import classes from './FeaturesCard.module.css';

const mockdata = [
  { label: '4 passengers', icon: IconUsers },
  { label: '100 km/h in 4 seconds', icon: IconGauge },
  { label: 'Automatic gearbox', icon: IconManualGearbox },
  { label: 'Electric', icon: IconGasStation },
];

export function FeaturesCard() {
  const features = mockdata.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size={16} className={classes.icon} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src="assets/brocolly.png" alt="Brocolli" />
      </Card.Section>

      <Group justify="space-between" mt="md">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
          <Text fw={500}>Brocolli</Text>
          <Text fz="xs" c="dimmed">
            1 kg
          </Text>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
        <Button variant="light">-</Button>
          1
        <Button variant="light">+</Button>
        </div>
      </Group>

      {/* <Card.Section className={classes.section} mt="md">

        <Group gap={8} mb={-8}>
          {features}
        </Group>
      </Card.Section> */}

      <Card.Section className={classes.section}>
        <Group gap={30}>
          <div>
            <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
              $120
            </Text>
          </div>

          <Button radius="xl" style={{ flex: 1 }} variant="light">
            Add to cart
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}
