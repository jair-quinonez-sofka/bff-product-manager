import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/inputs/create-product.input';
import { UpdateProductInput } from './dto/inputs/update-product.input';
import { firstValueFrom, Observable } from 'rxjs';
import { Axios, AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(private readonly httpService: HttpService) {}
  create(createProductInput: CreateProductInput) {
    return 'This action adds a new product';
  }

  async findAll():  Promise<Observable<AxiosResponse<Product[]>>> {
    const response$ =  this.httpService.get('http://localhost:3000/api/v1/product/getAll');
    const response = await firstValueFrom(response$);
    return response.data;
    
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
