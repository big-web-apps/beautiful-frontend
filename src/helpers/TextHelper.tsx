import { Text } from '@mantine/core';
import React from 'react';

export class TextHelper {
  static getPriceString = (price: number | null | undefined, fixed: number = 0, currency: string = '₽'): string => {
    if (!price) {
      return `0 ${currency}`;
    }

    const str = String(price.toFixed(fixed)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return `${str} ${currency}`;
  };

  static getYearsNumFormat = (value: number, language: string) => {
    const formatter = new Intl.NumberFormat(language, {
      style: 'unit',
      unit: 'year',
      unitDisplay: 'long',
    });

    return formatter.format(value);
  };

  static getProcent = (value: number | null | undefined) => {
    if (!value) {
      return 0;
    }

    const procent = value * 100 - 100;
    return (
      <Text pt={2} size={24} fw={600} c={value > 1 ? (value > 1.09 ? 'green' : 'yellow') : 'red'}>
        {value && procent.toFixed(2)}%
      </Text>
    );
  };
}
