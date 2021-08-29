import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Cat } from './cat.entity';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return await this.catsService.findAll();
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Put('/:id')
  async update(@Param() params, @Body() createCatDto: CreateCatDto) {
    const { id } = params;
    return this.catsService.update(id, createCatDto);
  }
}
