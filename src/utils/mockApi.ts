import { IProduct } from "../interfaces/product.interface";

const startProductName = "Product ";
const startSKU = "SKU";
const startEAN = "1000000000000";


export const generateProducts = (amount: number): any[] => {
  const products: IProduct[] = [];
  for (let i = 1; i <= amount; i++) {
    const product: IProduct = {
      id: `${i}`,
      name: `${startProductName} ${i}`,
      sku: `${startSKU} ${i}`,
      ean: `${startEAN}${i}`,
    };
    products.push(product);
  }
  return products;
};

// To update the product I'm going to work locally 
export const updateProduct = (products: IProduct[], updatedProduct: IProduct): IProduct[] => {
  const index = products.findIndex((product) => product.id == updatedProduct.id);
  products[index] = updatedProduct;
  return products;
};

export const fetchProducts = (amount: number): Promise<any[]> => {

  // const products = generateProducts(amount);

  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(products);
  //   }, 2000); // Simulate a 1-second API call delay
  // });


  return fetch("https://fakestoreapi.com/products?limit=" + amount)
    .then((response) => response.json())
    .then((data) => {

      // Just to have the fields required
      data = data.map((product: any) => {
        return {
          id: product.id,
          name: product.title,
          sku: startSKU + product.id,
          ean: startEAN + product.id,
        }
      });

      return data;
    });

};
