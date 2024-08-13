export const fetchProducts = (): Promise<any[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { Name: "Product 1", SKU: "SKU001", EAN: "1234567890123" },
        { Name: "Product 2", SKU: "SKU002", EAN: "1234567890124" },
        { Name: "Product 3", SKU: "SKU003", EAN: "1234567890125" },
        { Name: "Product 4", SKU: "SKU004", EAN: "1234567890126" },
        { Name: "Product 5", SKU: "SKU005", EAN: "1234567890127" },
        { Name: "Product 6", SKU: "SKU006", EAN: "1234567890128" },
        { Name: "Product 7", SKU: "SKU007", EAN: "1234567890129" },
        { Name: "Product 8", SKU: "SKU008", EAN: "1234567890130" },
        { Name: "Product 9", SKU: "SKU009", EAN: "1234567890131" },
        { Name: "Product 10", SKU: "SKU010", EAN: "1234567890132" },
      ]);
    }, 1000); // Simulate a 1-second API call delay
  });
};
