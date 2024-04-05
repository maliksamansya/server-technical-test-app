import { Injectable } from '@nestjs/common';

@Injectable()
export class ManipulateArrayService {
  manipulateArray(
    colors: string[],
    clothes: string[],
    promotions: string[],
  ): string[] {
    if (
      colors.length === clothes.length &&
      colors.length === promotions.length
    ) {
      return colors.map((color, index) => {
        const cloth = clothes[index];
        const promotion = promotions[index];
        return `${cloth.charAt(0).toUpperCase()}${cloth.slice(1)} ${color.charAt(0).toUpperCase()}${color.slice(1)} ${promotion}`;
      });
    } else {
      throw new Error('Jumlah elemen dalam array tidak sama');
    }
  }
}
