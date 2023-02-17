import { Center, Group, Paper, RingProgress, SimpleGrid, Text } from '@mantine/core';
import { ArrowDownRight, ArrowUpRight } from 'tabler-icons-react';

export interface StatsRingProps {
  data: {
    label: string;
    stats: string;
    progress: number;
    color: string;
    icon: JSX.Element;
  }[];
}

export function StatsRing({ data }: StatsRingProps) {
  const stats = data.map(stat => {
    return (
      <Paper withBorder radius="md" p="xs" key={stat.label}>
        <Group>
          <RingProgress
            size={80}
            roundCaps
            thickness={8}
            sections={[{ value: stat.progress, color: stat.color }]}
            label={<Center>{stat.icon}</Center>}
          />

          <div>
            <Text color="dimmed" size="xs" transform="uppercase" weight={600}>
              {stat.label}
            </Text>
            <Text weight={600} size="xl">
              {stat.stats}
            </Text>
          </div>
        </Group>
      </Paper>
    );
  });
  return (
    <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
      {stats}
    </SimpleGrid>
  );
}
