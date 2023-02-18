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
}
