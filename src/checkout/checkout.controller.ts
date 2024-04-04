import { Controller, Post, Body } from '@nestjs/common';

@Controller('checkout')
export class CheckoutController {
  @Post()
  checkout(@Body('price') price: number) {
    // Harga barang
    const hargaBarang = price || 5000000;

    // Nilai voucher diskon 50%
    const nilaiVoucherDiskon = hargaBarang * 0.5;

    // Total harga setelah diskon
    const totalSetelahDiskon = hargaBarang - nilaiVoucherDiskon;

    // Poin yang didapat dari penggunaan voucher (2% dari nilai voucher diskon)
    const poin = nilaiVoucherDiskon * 0.02;

    // Menyusun respons
    return {
      hargaBarang,
      voucherDiskon: '50%',
      nilaiVoucherDiskon,
      totalSetelahDiskon,
      poin,
    };
  }
}
