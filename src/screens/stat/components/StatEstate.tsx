import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Loader, Stack, Text } from '@mantine/core';
import { ColorHelper } from '../../../helpers/ColorHelper';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
      fullSize: true,
      labels: {
        font: {
          family: 'Greycliff CF',
          size: 14,
          lineHeight: 2,
        },
        pointStyle: 'circle',
        usePointStyle: true,
        padding: 20,
      },
    },
    title: {
      display: true,
      fullSize: true,
      font: {
        family: 'Greycliff CF',
        weight: '600',
        size: 24,
        lineHeight: 2,
      },
    },
  },
};

interface ICompetenciesChartProps {
  title: string;
  subtitle: string;
  data: any;
}

export const StateEstate: React.FC<ICompetenciesChartProps> = props => {
  const { data } = props;

  const [chartData, setChartData] = useState<any>(null);

  //Effects
  useEffect(() => {
    handleChartData();
  }, []);

  //Handlers
  const handleChartData = () => {
    let labels: string[] = [];
    let datasets: any[] = [];

    if (!!props?.data) {
      props?.data?.city?.data.map((item: any) => {
        labels.push(item?.[0]);
      });

      Object.values(props?.data).map((item: any, index: number) => {
        const color = ColorHelper.getRandomColor();
        datasets.push({
          label: item?.label,
          data: item?.data.reverse().map((item2: any) => {
            return item2?.[1];
          }),
          borderColor: color,
          backgroundColor: color,
          hidden: [0, 1, 2].includes(index) ? false : true,
          cubicInterpolationMode: 'monotone',
          tension: 0.4,
        });
      });
      labels = labels.reverse();
      setChartData({ labels, datasets });
    }
  };

  //Render
  return (
    <Stack mt={50} spacing={0} sx={{ width: '100%' }}>
      <Stack mb={-20} spacing={10} sx={{ width: '100%' }}>
        <Text fz={26} fw={600} style={{ lineHeight: 1 }}>
          {props.title}
        </Text>
        <Text fz={'sm'} fw={300} style={{ lineHeight: 1 }}>
          {props.subtitle}
        </Text>
      </Stack>
      {chartData ? <Line height={150} options={options} data={chartData} /> : <Loader />}
    </Stack>
  );
};
