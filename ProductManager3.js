
// Consigna:
// Realizar una clase “ProductManager” que gestione un conjunto de productos.
// Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío.
// Cada producto que gestione debe contar con las propiedades:
// title (nombre del producto)
// description (descripción del producto)
// price (precio)
// thumbnail (ruta de imagen)
// code (código identificador)
// stock (número de piezas disponibles)

// Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial.
// Validar que no se repita el campo “code” y que todos los campos sean obligatorios
// Al agregarlo, debe crearse con un id autoincrementable
// Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento

// Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
// En caso de no coincidir ningún id, mostrar en consola un error “Not found”


class ProductManager {
    constructor(products = []) {
        this.products = products;
        this.idContador = 1;
    }
    addProduct(product) {
        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            console.log("Debes llenar todos los campos.");
            return;
        }

        const productoExistente = this.products.find(p => p.code === product.code);
        if (productoExistente) {
            console.log(`El código ${product.code} se encuentra repetido.`);
            return;
        }

        product.id = this.idContador++;
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(p => p.id === id);
        if (!product) {
            console.log(`ID: ${id} Not found`);
        }
        return product;
    }
}

// Testing:
// Se creará una instancia de la clase “ProductManager”
// Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []

const productos = new ProductManager();
console.log(productos.getProducts()); 

// Se llamará al método “addProduct” con los campos:
// title: “producto prueba”
// description:”Este es un producto prueba”
// price:200,
// thumbnail:”Sin imagen”
// code:”abc123”,
// stock:25
// El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE

productos.addProduct({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25
});

// Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado

console.log(productos.getProducts());

// Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.

productos.addProduct({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25
});

// Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo
console.log(productos.getProductById(1)); 
console.log(productos.getProductById(5)); 

