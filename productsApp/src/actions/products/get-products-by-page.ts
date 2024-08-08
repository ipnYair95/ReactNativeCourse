import { ProductMApper } from './../../infrastructure/mappers/product.mapper';
import { testloApi } from "../../config/api/testloApi";
import { TesloProduct } from "../../infrastructure/interfaces/teslo-product.response";
import { Product } from '../../domain/entities/product';

export const getProductsByPage = async (page: number, limit: number = 20 ) : Promise<Product[]> => {

    try {

        const { data } = await testloApi.get<TesloProduct[]>(`/products?offset=${page*10}&limit=${limit}`);

        const products = data.map(tesloProduct => ProductMApper.tesloProductToEntity(tesloProduct));

        return products;

    } catch (error) {
        console.log(error);
        throw new Error('Error getting products');
    }

}