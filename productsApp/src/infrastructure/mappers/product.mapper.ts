import { API_URL } from "../../config/api/testloApi";
import { Product } from "../../domain/entities/product";
import { TesloProduct } from "../interfaces/teslo-product.response";

export class ProductMApper {

    static tesloProductToEntity(product: TesloProduct): Product {

        return {

            id: product.id,
            title: product.title,
            price: product.price,
            description: product.description,
            slug: product.slug,
            stock: product.stock,
            sizes: product.sizes,
            gender: product.gender,
            tags: product.tags,
            images: product.images.map(image => `${API_URL}/files/product/${image}`)

        }

    }

}