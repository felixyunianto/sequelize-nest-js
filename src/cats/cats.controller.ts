import { Body, Controller, Get, Post } from "@nestjs/common";
import { Cat } from "./cat.entity";
import { CatsService } from "./cats.service";
import { CreateCatDto } from "./dto/create-cat.dto";

@Controller('cats')
export class CatsController{
    constructor(private readonly catsService : CatsService){}

    @Get()
    async findAll() : Promise<Cat[]>{
        return await this.catsService.findAll()
    }
}