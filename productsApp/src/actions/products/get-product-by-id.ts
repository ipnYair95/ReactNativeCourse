import { testloApi } from "../../config/api/testloApi";
import { Gender, Product } from "../../domain/entities/product";
import { TesloProduct } from "../../infrastructure/interfaces/teslo-product.response";
import { ProductMApper } from "../../infrastructure/mappers/product.mapper";

const emptyProduct: Product = {
    id: '',
    title: 'Nuevo producto',
    description: '',
    price: 0,
    images: [],
    slug: '',
    gender: Gender.Kid,
    sizes: [],
    stock: 0,
    tags: []
}

export const getProductById = async (id: string) : Promise<Product> => {    

    if( id === 'new' ) {
        return emptyProduct;
    }

    try {
        const { data } = await testloApi.get<TesloProduct>(`/products/${id}`);

        return ProductMApper.tesloProductToEntity(data);

    } catch (error) {
        console.log(error);
        throw new Error('Error getting product');
    }

}