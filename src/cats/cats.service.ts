import { Inject, Injectable } from "@nestjs/common";
import { Cat } from "./cat.entity";
import { CreateCatDto } from "./dto/create-cat.dto";


@Injectable()
export class CatsService {
    constructor(
        @Inject('CATS_REPOSITORY')
        private catsRepository: typeof Cat
    ){}

    async findAll() : Promise<Cat[]>{
        return this.catsRepository.findAll<Cat>();
    }

    async create(createCatDto : CreateCatDto){
        const cat = this.catsRepository.create(createCatDto)

        return cat;
    }

    
}