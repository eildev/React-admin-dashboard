export const mockProducts = [
    {
        id: 1,
        name: "Product A",
        category: "Electronics",
        price: 299.99,
        stock: 10,
    },
    {
        id: 2,
        name: "Product B",
        category: "Home & Kitchen",
        price: 49.99,
        stock: 25,
    },
    {
        id: 3,
        name: "Product C",
        category: "Books",
        price: 19.99,
        stock: 100,
    },
    {
        id: 4,
        name: "Product D",
        category: "Electronics",
        price: 599.99,
        stock: 5,
    },
    {
        id: 5,
        name: "Product E",
        category: "Toys",
        price: 29.99,
        stock: 50,
    },
    // Add more products as needed
];

export const columns = [
    {
        id: "id", // ✅ Explicitly add an id
        header: "ID", // ✅ Use lowercase "header"
        accessorKey: "id", // ✅ Use accessorKey instead of accessor
    },
    {
        id: "name",
        header: "Name",
        accessorKey: "name",
    },
    {
        id: "category",
        header: "Category",
        accessorKey: "category",
    },
    {
        id: "price",
        header: "Price",
        accessorKey: "price",
    },
    {
        id: "stock",
        header: "Stock",
        accessorKey: "stock",
    },
];