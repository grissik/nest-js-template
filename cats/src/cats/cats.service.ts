import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {

  constructor(private prismaService: PrismaService) {}

  create(createCatDto: CreateCatDto) {
    //return 'This action adds a new cat';
    console.log(createCatDto)
    return this.prismaService.cat.create({ data: createCatDto })
  }

  findAll() {
    return this.prismaService.cat.findMany()
    //return `This action returns all cats mmm`;
  }

  findOne(id: number) {
    //return `This action returns a #${id} cat`;
    return this.prismaService.cat.findUnique({
      where: { id },
      rejectOnNotFound: () => new NotFoundException(),
    });
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return this.prismaService.cat.delete({ where: {id} });
  }
}
