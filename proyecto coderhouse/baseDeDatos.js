function getProducts(){
        let productsAsObjects = JSON.parse(DATA)
        let products = [];
        for(element of productsAsObjects){
          let product = new Product(element.id, element.name, element.price, element.stock)

            products.push(new Product)
        }
       // let products = productsAsObjects.map(function(value){
       //     return new product (value.id, value.name, value.price, value.stock

        //}
        return products
}


class Product {
    constructor(id,name,price,stock) {
        this.name=name
        this.id=id;
        this.price=price
        this.stock = stock
    }
}


const DATA = [{
    "id": 1,
    "name": "Samsung s20 ultra",
    "price": 46425,
    "stock": 17
  }, {
    "id": 2,
    "name": "Samsung s20 plus",
    "price": 22364,
    "stock": 15
  }, {
    "id": 3,
    "name": "Samsung s20",
    "price": 32126,
    "stock": 24
  }, {
    "id": 4,
    "name": "One Plus 8 pro",
    "price": 20860,
    "stock": 20
  }, {
    "id": 5,
    "name": "One Plus 8T",
    "price": 32907,
    "stock": 22
  }, {
    "id": 6,
    "name": "One plus Nord",
    "price": 45222,
    "stock": 16
  }, {
    "id": 7,
    "name": "One Plus 8",
    "price": 35366,
    "stock": 26
  }, {
    "id": 8,
    "name": "Xioami mi 10 ultra",
    "price": 68443,
    "stock": 20
  }, {
    "id": 9,
    "name": "Xiaomi mi 10 t",
    "price": 57810,
    "stock": 32
  }, {
    "id": 10,
    "name": "Xiomi mi 10 lite",
    "price": 92982,
    "stock": 29
  }, {
    "id": 11,
    "name": "Iphone 12 pro max",
    "price": 47532,
    "stock": 1
  }, {
    "id": 12,
    "name": "iphone 12 pro",
    "price": 44298,
    "stock": 20
  }, {
    "id": 13,
    "name": "Iphone 12",
    "price": 52586,
    "stock": 10
  }, {
    "id": 14,
    "name": "Iphone 12 lite",
    "price": 88942,
    "stock": 12
  }]