import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BookingsService {
  constructor(private prisma: PrismaService) {}

  async create(data: { room: string; startDate: Date; endDate: Date; userId: number }) {
    return this.prisma.booking.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.booking.findMany();
  }

  async findOne(id: number) {
    return this.prisma.booking.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Partial<{ room: string; startDate: Date; endDate: Date }>) {
    return this.prisma.booking.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.booking.delete({
      where: { id },
    });
  }
}
