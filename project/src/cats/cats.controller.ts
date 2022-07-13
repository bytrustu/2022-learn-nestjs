import { Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, UseFilters } from '@nestjs/common';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from '../http-exception.filter';

@Controller('cats')
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get('/hello')
  getHello(): string {
    return this.catsService.hello();
  }

  @Get('/error')
  getError() {
    throw new HttpException('api is broken', HttpStatus.BAD_REQUEST);
    return 'get call api'
  }

  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe) id) {
    console.log(typeof id);
    return `get call api ${id}`;
  }
}
