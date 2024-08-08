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



const preparareImages = async (images: string[]) => {

    const fileImages = images.filter((image) => image.includes('file://'));

    const currentImages = images.filter((image) => !image.includes('file://'));

    if (fileImages.length > 0) {

        const uploadPromises = fileImages.map((image) => uploadImage(image));

        const uploadedImages = await Promise.all(uploadPromises);

        currentImages.push(...uploadedImages);

    }

    return currentImages.map((image) => image.split('/').pop());

}

const uploadImage = async (imageFile: string) => {

    const formData = new FormData();

    formData.append('file', {
        name: imageFile.split('/').pop(),
        type: 'image/jpeg',
        uri: imageFile
    });

    const { data } = await testloApi.post<{ image: string }>('/files/product', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })

    return data.image;

}


const updateProduct = async (product: Partial<Product>) => {

    const { id, images = [], ...rest } = product;

    try {

        const checkImages = await preparareImages(images);

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

const createProduct = async (product: Partial<Product>): Promise<Product> => {

    const { id, images = [], ...rest } = product;

    try {

        const checkImages = await preparareImages(images);

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