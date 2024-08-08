import { isAxiosError } from "axios";
import { testloApi } from "../../config/api/testloApi";
import { Product } from "../../domain/entities/product";

export const updateCreateProduct = (product: Partial<Product>) => {

    product.stock = isNaN(Number(product.stock)) ? 0 : Number(product.stock);
    product.price = isNaN(Number(product.price)) ? 0 : Number(product.price);

    if (product.id && product.id !== 'new') {
        return updateProduct(product);
    }

    return createProduct(product);

}



const preparareImages = (images: string[]) => {

    return images.map((image) => image.split('/').pop());

}


const updateProduct = async (product: Partial<Product>) => {

    const { id, images = [], ...rest } = product;

    try {

        const checkImages = preparareImages(images);

        const { data } = await testloApi.patch(`/products/${id}`, {
            images: checkImages,
            ...rest
        });

        return data;

    } catch (error) {

        if (isAxiosError(error)) {
            console.log(error.response?.data)
        }

        console.log(error);

        throw new Error('Error updating product');

    }

}

const createProduct = async (product: Partial<Product>) : Promise<Product> => {    

    const { id, images = [], ...rest } = product;

    try {

        const checkImages = preparareImages(images);

        const { data } = await testloApi.post(`/products`, {
            images: checkImages,
            ...rest
        });

        return data;

    } catch (error) {
        if (isAxiosError(error)) {
            console.log(error.response?.data)
        }

        console.log(error);

        throw new Error('Error creating product');
    }

}