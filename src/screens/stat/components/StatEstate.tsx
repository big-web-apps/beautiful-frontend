import React, { useEffect, useState } from 'react';
/*import {
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
import { Line } from 'react-chartjs-2';*/
import { Loader, Stack, Text } from '@mantine/core';

//ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

/*export const options: ChartOptions<'line'> = {
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
};*/

interface ICompetenciesChartProps {
  data: any;
}

export const StateEstate: React.FC<ICompetenciesChartProps> = props => {
  const { data } = props;

  const [chartData, setChartData] = useState<any>(null);

  //Effects
  useEffect(() => {
    handleChartData();
  }, [data]);

  //Handlers
  const handleChartData = () => {
    let labels: string[] = [];
    let datasets: any[] = [];

    setChartData({ labels, datasets });
  };

  //Render
  return (
    <Stack mt={50} spacing={0} sx={{ width: '90vw' }}>
      <Stack mb={-20} spacing={10} sx={{ width: '90vw' }}>
        <Text fz={26} fw={600} style={{ lineHeight: 1 }}>
          Продажа недвижимости
        </Text>
        <Text fz={'sm'} fw={300} style={{ lineHeight: 1 }}>
          Выберите нужные районы, чтобы отразить их на графике
        </Text>
      </Stack>
      {/*{chartData ? <Line height={350} options={options} data={chartData} /> : <Loader />}*/}
    </Stack>
  );
};
