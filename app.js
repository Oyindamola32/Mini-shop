/*//1.Getting started with oop code
const productList = {
    products: [
        {
        title:'A Pillow',
        imageUrl:'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',
        price:19.99,
        description:'A soft pillow!'
      },
      {
          title:'A Carpet',
          imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
          price:19.99,
          description:'A carpet which you might like - or not.' 
      },
    ],
    render() {
      const renderHook = document.getElementById('app');
      const prodList = document.createElement('ul');
      prodList.className = 'product-list';
      for (const prod of this.products) {
        const prodEl = document.createElement('li');
        prodEl.className = 'product-item';
        prodEl.innerHTML = `
          <div>
            <img src="${prod.imageUrl}" alt="${prod.title}" >
            <div class="product-item__content">
              <h2>${prod.title}</h2>
              <h3>\$${prod.price}</h3>
              <p>${prod.description}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        `;
        prodList.append(prodEl);
      }
      renderHook.append(prodList);
    }
  };
  
  productList.render();*/






  /*//2.Defining and using a first class
  class Product {
    // title = 'DEFAULT';
    // imageUrl;
    // description;
    // price;
  
    constructor(title, image, desc, price) {
      this.title = title;
      this.imageUrl = image;
      this.description = desc;
      this.price = price;
    }
  }
  
  const productList = {
    products: [
      new Product(
        'A Pillow',
        'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',
        'A soft pillow!',
        19.99
      ),
      new Product(
        'A Carpet',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
        'A carpet which you might like - or not.',
        89.99
      )
    ],
    render() {
      const renderHook = document.getElementById('app');
      const prodList = document.createElement('ul');
      prodList.className = 'product-list';
      for (const prod of this.products) {
        const prodEl = document.createElement('li');
        prodEl.className = 'product-item';
        prodEl.innerHTML = `
          <div>
            <img src="${prod.imageUrl}" alt="${prod.title}" >
            <div class="product-item__content">
              <h2>${prod.title}</h2>
              <h3>\$${prod.price}</h3>
              <p>${prod.description}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        `;
        prodList.append(prodEl);
      }
      renderHook.append(prodList);
    }
  };
  
  productList.render();*/
  
  




  /*//3.Using and "connecting" multiple classes
  class Product {
    // title = 'DEFAULT';
    // imageUrl;
    // description;
    // price;
  
    constructor(title, image, desc, price) {
      this.title = title;
      this.imageUrl = image;
      this.description = desc;
      this.price = price;
    }
  }
  
  class ProductItem {
    constructor(product) {
      this.product = product;
    }
  
    render() {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
          <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}" >
            <div class="product-item__content">
              <h2>${this.product.title}</h2>
              <h3>\$${this.product.price}</h3>
              <p>${this.product.description}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        `;
      return prodEl;
    }
  }
  
  class ProductList {
    products = [
      new Product(
        'A Pillow',
        'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',
        'A soft pillow!',
        19.99
      ),
      new Product(
        'A Carpet',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
        'A carpet which you might like - or not.',
        89.99
      )
    ];
  
    constructor() {}
  
    render() {
      const renderHook = document.getElementById('app');
      const prodList = document.createElement('ul');
      prodList.className = 'product-list';
      for (const prod of this.products) {
        const productItem = new ProductItem(prod);
        const prodEl = productItem.render();
        prodList.append(prodEl);
      }
      renderHook.append(prodList);
    }
  }
  
  const productList = new ProductList();
  productList.render();*/
  





  /*//4.Binding class methods and working with "this"
  class Product {
    // title = 'DEFAULT';
    // imageUrl;
    // description;
    // price;
  
    constructor(title, image, desc, price) {
      this.title = title;
      this.imageUrl = image;
      this.description = desc;
      this.price = price;
    }
  }
  
  class ProductItem {
    constructor(product) {
      this.product = product;
    }
  
    addToCart() {
      console.log('Adding product to cart...');
      console.log(this.product);
    }
  
    render() {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
          <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}" >
            <div class="product-item__content">
              <h2>${this.product.title}</h2>
              <h3>\$${this.product.price}</h3>
              <p>${this.product.description}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        `;
      const addCartButton = prodEl.querySelector('button');
      addCartButton.addEventListener('click', this.addToCart.bind(this));
      return prodEl;
    }
  }
  
  class ProductList {
    products = [
      new Product(
        'A Pillow',
        'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',
        'A soft pillow!',
        19.99
      ),
      new Product(
        'A Carpet',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
        'A carpet which you might like - or not.',
        89.99
      )
    ];
  
    constructor() {}
  
    render() {
      const renderHook = document.getElementById('app');
      const prodList = document.createElement('ul');
      prodList.className = 'product-list';
      for (const prod of this.products) {
        const productItem = new ProductItem(prod);
        const prodEl = productItem.render();
        prodList.append(prodEl);
      }
      renderHook.append(prodList);
    }
  }
  
  const productList = new ProductList();
  productList.render();*/
  





  /*//5.Adding a cart and shop class
  class Product {
    // title = 'DEFAULT';
    // imageUrl;
    // description;
    // price;
  
    constructor(title, image, desc, price) {
      this.title = title;
      this.imageUrl = image;
      this.description = desc;
      this.price = price;
    }
  }
  
  class ShoppingCart {
    items = [];
  
    render() {         //total amount and a button that allow us to render the items.
      const cartEl = document.createElement('section');
      cartEl.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order Now!</button>
      `;
      cartEl.className = 'cart';
      return cartEl;
    }
  }
  
  class ProductItem {
    constructor(product) {
      this.product = product;
    }
  
    addToCart() {
      console.log('Adding to cart...');
      console.log(this.product);
    }
  
    render() {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
          <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}" >
            <div class="product-item__content">
              <h2>${this.product.title}</h2>
              <h3>\$${this.product.price}</h3>
              <p>${this.product.description}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        `;
      const addCartButton = prodEl.querySelector('button');
      addCartButton.addEventListener('click', this.addToCart.bind(this));
      return prodEl;
    }
  }
  
  class ProductList {
    products = [
      new Product(
        'A Pillow',
        'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',
        'A soft pillow!',
        19.99
      ),  
      new Product(
        'A Carpet',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
        'A carpet which you might like - or not.',
        89.99
      )
    ];
  
    constructor() {}
  
    render() {
      const prodList = document.createElement('ul');
      prodList.className = 'product-list';
      for (const prod of this.products) {
        const productItem = new ProductItem(prod);
        const prodEl = productItem.render();
        prodList.append(prodEl);
      }
      return prodList;
    }
  }
  
  class Shop {
    
    render() {
      const renderHook = document.getElementById('app');
  
      const cart = new ShoppingCart();
      const cartEl = cart.render();
      const productList = new ProductList();
      const prodListEl = productList.render();

      renderHook.append(prodList);
    }
  }*/
  
  

  
  



  

/*//6.communicating can be challenging
class Product {
  // title = 'DEFAULT';
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ShoppingCart {
  items = [];

  addProduct(product) {
    this.items.push(product);
    this.totalOutput.innerHTML = `<h2>Total: \$${1}</h2>`;
  }

  render() {         //total amount and a button that allow us to render the items.
    const cartEl = document.createElement('section');
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
    cartEl.className = 'cart';
    this.totalOutput = cartEl.querySelector('h2'); //this dot whatever you want to name it
    return cartEl;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    console.log('Adding to cart...');
    console.log(this.product);
    
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
        <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}" >
          <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
    const addCartButton = prodEl.querySelector('button');
    addCartButton.addEventListener('click', this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      'A Pillow',
      'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',
      'A soft pillow!',
      19.99
    ),
    new Product(
      'A Carpet',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
      'A carpet which you might like - or not.',
      89.99
    )
  ];

  constructor() {}

  render() {
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}

class Shop {
  
  render() {
    const renderHook = document.getElementById('app');

    this.cart = new ShoppingCart();
    const cartEl = this.cart.render();
    const productList = new ProductList();
    const prodListEl = productList.render();

    renderHook.append(cartEl);
    renderHook.append(prodListEl);
  }
}*/






/*//7.statics methods and properties
class Product {
  // title = 'DEFAULT';
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ShoppingCart {
  items = [];

  addProduct(product) {
    this.items.push(product);
    this.totalOutput.innerHTML = `<h2>Total: \$${1}</h2>`;
  }

  render() {
    const cartEl = document.createElement('section');
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
    cartEl.className = 'cart';
    this.totalOutput = cartEl.querySelector('h2');
    return cartEl;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
        <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}" >
          <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
    const addCartButton = prodEl.querySelector('button');
    addCartButton.addEventListener('click', this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      'A Pillow',
      'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',
      'A soft pillow!',
      19.99
    ),
    new Product(
      'A Carpet',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
      'A carpet which you might like - or not.',
      89.99
    )
  ];

  constructor() {}

  render() {
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}

class Shop {
  
  render() {
    const renderHook = document.getElementById('app');

    this.cart = new ShoppingCart();
    const cartEl = this.cart.render();
    const productList = new ProductList();
    const prodListEl = productList.render();

    renderHook.append(cartEl);
    renderHook.append(prodListEl);
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();*/







  
  
  
 /*//8.Getters and Setters
  class Product {
    // title = 'DEFAULT';
    // imageUrl;
    // description;
    // price;
  
    constructor(title, image, desc, price) {
      this.title = title;
      this.imageUrl = image;
      this.description = desc;
      this.price = price;
    }
  }
  
  class ShoppingCart {
    items = [];
  
    set cartItems(value) {
      this.items = value;
      this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
    }
  
    get totalAmount() {
      const sum = this.items.reduce(
        (prevValue, curItem) => prevValue + curItem.price, 0);
      return sum;     //or alert(sum);=>i did this 
    }
  
    addProduct(product) {
      const updatedItems = [...this.items];
      updatedItems.push(product);
      this.cartItems = updatedItems;
    }
  
    render() {
      const cartEl = document.createElement('section');
      cartEl.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order Now!</button>
      `;
      cartEl.className = 'cart';
      this.totalOutput = cartEl.querySelector('h2');
      return cartEl;
    }
  }
  
  class ProductItem {
    constructor(product) {
      this.product = product;
    }
  
    addToCart() {
      App.addProductToCart(this.product);
    }
  
    render() {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
          <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}" >
            <div class="product-item__content">
              <h2>${this.product.title}</h2>
              <h3>\$${this.product.price}</h3>
              <p>${this.product.description}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        `;
      const addCartButton = prodEl.querySelector('button');
      addCartButton.addEventListener('click', this.addToCart.bind(this));
      return prodEl;
    }
  }
  
  class ProductList {
    products = [
      new Product(
        'A Pillow',
        'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',
        'A soft pillow!',
        19.99
      ),
      new Product(
        'A Carpet',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
        'A carpet which you might like - or not.',
        89.99
      )
    ];
  
    constructor() {}
  
    render() {
      const prodList = document.createElement('ul');
      prodList.className = 'product-list';
      for (const prod of this.products) {
        const productItem = new ProductItem(prod);
        const prodEl = productItem.render();
        prodList.append(prodEl);
      }
      return prodList;
    }
  }
  
  class Shop {
    render() {
      const renderHook = document.getElementById('app');
  
      this.cart = new ShoppingCart();
      const cartEl = this.cart.render();
      const productList = new ProductList();
      const prodListEl = productList.render();
  
      renderHook.append(cartEl);
      renderHook.append(prodListEl);
    }
  }
  
  class App {
    static cart;
  
    static init() {
      const shop = new Shop();
      shop.render();
      this.cart = shop.cart;
    }
  
    static addProductToCart(product) {
      this.cart.addProduct(product);
    }
  }
  
  App.init();*/
  





  /*//9.base component class
  class Product {
    // title = 'DEFAULT';
    // imageUrl;
    // description;
    // price;
  
    constructor(title, image, desc, price) {
      this.title = title;
      this.imageUrl = image;
      this.description = desc;
      this.price = price;
    }
  }
  
  class ElementAttribute {
    constructor(attrName, attrValue) {
      this.name = attrName;
      this.value = attrValue;
    }
  }
  
  class Component {
    constructor(renderHookId) {
      this.hookId = renderHookId;
    }
  
    createRootElement(tag, cssClasses, attributes) {
      const rootElement = document.createElement(tag);
      if (cssClasses) {
        rootElement.className = cssClasses;
      }
      if (attributes && attributes.length > 0) {
        for (const attr of attributes) {
          rootElement.setAttribute(attr.name, attr.value);
        }
      }
      document.getElementById(this.hookId).append(rootElement);
      return this.rootElement;
    }
  }
  
  class ShoppingCart {
    items = [];
  
    set cartItems(value) {
      this.items = value;
      this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
    }
  
    get totalAmount() {
      const sum = this.items.reduce(
        (prevValue, curItem) => prevValue + curItem.price,
        0
      );
      return sum;
    }
  
    addProduct(product) {
      const updatedItems = [...this.items];
      updatedItems.push(product);
      this.cartItems = updatedItems;
    }
  
    render() {
      const cartEl = document.createElement('section');
      cartEl.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order Now!</button>
      `;
      cartEl.className = 'cart';
      this.totalOutput = cartEl.querySelector('h2');
      return cartEl;
    }
  }
  
  class ProductItem {
    constructor(product) {
      this.product = product;
    }
  
    addToCart() {
      App.addProductToCart(this.product);
    }
  
    render() {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
          <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}" >
            <div class="product-item__content">
              <h2>${this.product.title}</h2>
              <h3>\$${this.product.price}</h3>
              <p>${this.product.description}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        `;
      const addCartButton = prodEl.querySelector('button');
      addCartButton.addEventListener('click', this.addToCart.bind(this));
      return prodEl;
    }
  }
  
  class ProductList {
    products = [
      new Product(
        'A Pillow',
        'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',
        'A soft pillow!',
        19.99
      ),
      new Product(
        'A Carpet',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
        'A carpet which you might like - or not.',
        89.99
      )
    ];
  
    constructor() {}
  
    render() {
      const prodList = document.createElement('ul');
      prodList.className = 'product-list';
      for (const prod of this.products) {
        const productItem = new ProductItem(prod);
        const prodEl = productItem.render();
        prodList.append(prodEl);
      }
      return prodList;
    }
  }
  
  class Shop {
    render() {
      const renderHook = document.getElementById('app');
  
      this.cart = new ShoppingCart();
      const cartEl = this.cart.render();
      const productList = new ProductList();
      const prodListEl = productList.render();
  
      renderHook.append(cartEl);
      renderHook.append(prodListEl);
    }
  }
  
  class App {
    static cart;
  
    static init() {
      const shop = new Shop();
      shop.render();
      this.cart = shop.cart;
    }
  
    static addProductToCart(product) {
      this.cart.addProduct(product);
    }
  }
  
  App.init();*/
  





  /*//10.Implementing inheritance OR-shopping cart extending
  class Product {
    // title = 'DEFAULT';
    // imageUrl;
    // description;
    // price;
  
    constructor(title, image, desc, price) {
      this.title = title;
      this.imageUrl = image;
      this.description = desc;
      this.price = price;
    }
  }
  
  class ElementAttribute {
    constructor(attrName, attrValue) {
      this.name = attrName;
      this.value = attrValue;
    }
  }
  
  class Component {
    constructor(renderHookId) {
      this.hookId = renderHookId;
    }
  
    createRootElement(tag, cssClasses, attributes) {
      const rootElement = document.createElement(tag);
      if (cssClasses) {
        rootElement.className = cssClasses;
      }
      if (attributes && attributes.length > 0) {
        for (const attr of attributes) {
          rootElement.setAttribute(attr.name, attr.value);
        }
      }
      document.getElementById(this.hookId).append(rootElement);
      return rootElement;
    }
  }
  
  class ShoppingCart extends Component {
    items = [];
  
    set cartItems(value) {
      this.items = value;
      this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
    }
  
    get totalAmount() {
      const sum = this.items.reduce(
        (prevValue, curItem) => prevValue + curItem.price,
        0
      );
      return sum;
    }
  
    constructor(renderHookId) {
      super(renderHookId);
    }
  
    addProduct(product) {
      const updatedItems = [...this.items];
      updatedItems.push(product);
      this.cartItems = updatedItems;
    }
  
    render() {
      const cartEl = this.createRootElement('section', 'cart');
      cartEl.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order Now!</button>
      `;
      this.totalOutput = cartEl.querySelector('h2');
    }
  }
  
  class ProductItem {
    constructor(product) {
      this.product = product;
    }
  
    addToCart() {
      App.addProductToCart(this.product);
    }
  
    render() {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
          <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}" >
            <div class="product-item__content">
              <h2>${this.product.title}</h2>
              <h3>\$${this.product.price}</h3>
              <p>${this.product.description}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        `;
      const addCartButton = prodEl.querySelector('button');
      addCartButton.addEventListener('click', this.addToCart.bind(this));
      return prodEl;
    }
  }
  
  class ProductList {
    products = [
      new Product(
        'A Pillow',
        'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',
        'A soft pillow!',
        19.99
      ),
      new Product(
        'A Carpet',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
        'A carpet which you might like - or not.',
        89.99
      )
    ];
  
    constructor() {}
  
    render() {
      const prodList = document.createElement('ul');
      prodList.className = 'product-list';
      for (const prod of this.products) {
        const productItem = new ProductItem(prod);
        const prodEl = productItem.render();
        prodList.append(prodEl);
      }
      return prodList;
    }
  }
  
  class Shop {
    render() {
      const renderHook = document.getElementById('app');
  
      this.cart = new ShoppingCart('app');
      this.cart.render();
      const productList = new ProductList();
      const prodListEl = productList.render();
  
      renderHook.append(prodListEl);
    }
  }
  
  class App {
    static cart;
  
    static init() {
      const shop = new Shop();
      shop.render();
      this.cart = shop.cart;
    }
  
    static addProductToCart(product) {
      this.cart.addProduct(product);
    }
  }
  
  App.init();*/
  





  /*//11.using inheritance everywhere
  class Product {
    // title = 'DEFAULT';
    // imageUrl;
    // description;
    // price;
  
    constructor(title, image, desc, price) {
      this.title = title;
      this.imageUrl = image;
      this.description = desc;
      this.price = price;
    }
  }
  
  class ElementAttribute {
    constructor(attrName, attrValue) {
      this.name = attrName;
      this.value = attrValue;
    }
  }
  
  class Component {
    constructor(renderHookId) {
      this.hookId = renderHookId;
    }
  
    createRootElement(tag, cssClasses, attributes) {
      const rootElement = document.createElement(tag);
      if (cssClasses) {
        rootElement.className = cssClasses;
      }
      if (attributes && attributes.length > 0) {
        for (const attr of attributes) {
          rootElement.setAttribute(attr.name, attr.value);
        }
      }
      document.getElementById(this.hookId).append(rootElement);
      return rootElement;
    }
  }
  
  class ShoppingCart extends Component {
    items = [];
  
    set cartItems(value) {
      this.items = value;
      this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
        2
      )}</h2>`;
    }
  
    get totalAmount() {
      const sum = this.items.reduce(
        (prevValue, curItem) => prevValue + curItem.price,
        0
      );
      return sum;
    }
  
    constructor(renderHookId) {
      super(renderHookId);
    }
  
    addProduct(product) {
      const updatedItems = [...this.items];
      updatedItems.push(product);
      this.cartItems = updatedItems;
    }
  
    render() {
      const cartEl = this.createRootElement('section', 'cart');
      cartEl.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order Now!</button>
      `;
      this.totalOutput = cartEl.querySelector('h2');
    }
  }
  
  class ProductItem extends Component {
    constructor(product, renderHookId) {
      super(renderHookId);
      this.product = product;
    }
  
    addToCart() {
      App.addProductToCart(this.product);
    }
  
    render() {
      const prodEl = this.createRootElement('li', 'product-item');
      prodEl.innerHTML = `
          <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}" >
            <div class="product-item__content">
              <h2>${this.product.title}</h2>
              <h3>\$${this.product.price}</h3>
              <p>${this.product.description}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        `;
      const addCartButton = prodEl.querySelector('button');
      addCartButton.addEventListener('click', this.addToCart.bind(this));
    }
  }
  
  class ProductList extends Component {
    products = [
      new Product(
        'A Pillow',
        'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',
        'A soft pillow!',
        19.99
      ),
      new Product(
        'A Carpet',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
        'A carpet which you might like - or not.',
        89.99
      )
    ];
  
    constructor(renderHookId) {
      super(renderHookId);
    }
  
    render() {
      this.createRootElement('ul', 'product-list', [
        new ElementAttribute('id', 'prod-list')
      ]);
      for (const prod of this.products) {
        const productItem = new ProductItem(prod, 'prod-list');
        productItem.render();
      }
    }
  }
  
  class Shop {
    render() {
      this.cart = new ShoppingCart('app');
      this.cart.render();
      const productList = new ProductList('app');
      productList.render();
    }
  }
  
  class App {
    static cart;
  
    static init() {
      const shop = new Shop();
      shop.render();
      this.cart = shop.cart;
    }
  
    static addProductToCart(product) {
      this.cart.addProduct(product);
    }
  }
  
  App.init();*/
  





  /*//12.render in constructor
  class Product {
    // title = 'DEFAULT';
    // imageUrl;
    // description;
    // price;
  
    constructor(title, image, desc, price) {
      this.title = title;
      this.imageUrl = image;
      this.description = desc;
      this.price = price;
    }
  }
  
  class ElementAttribute {
    constructor(attrName, attrValue) {
      this.name = attrName;
      this.value = attrValue;
    }
  }
  
  class Component {
    constructor(renderHookId) {
      this.hookId = renderHookId;
      this.render();
    }
  
    render() {}
  
    createRootElement(tag, cssClasses, attributes) {
      const rootElement = document.createElement(tag);
      if (cssClasses) {
        rootElement.className = cssClasses;
      }
      if (attributes && attributes.length > 0) {
        for (const attr of attributes) {
          rootElement.setAttribute(attr.name, attr.value);
        }
      }
      document.getElementById(this.hookId).append(rootElement);
      return rootElement;
    }
  }
  
  class ShoppingCart extends Component {
    items = [];
  
    set cartItems(value) {
      this.items = value;
      this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
        2
      )}</h2>`;
    }
  
    get totalAmount() {
      const sum = this.items.reduce(
        (prevValue, curItem) => prevValue + curItem.price,
        0
      );
      return sum;
    }
  
    constructor(renderHookId) {
      super(renderHookId);
    }
  
    addProduct(product) {
      const updatedItems = [...this.items];
      updatedItems.push(product);
      this.cartItems = updatedItems;
    }
  
    render() {
      const cartEl = this.createRootElement('section', 'cart');
      cartEl.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order Now!</button>
      `;
      this.totalOutput = cartEl.querySelector('h2');
    }
  }
  
  class ProductItem extends Component {
    constructor(product, renderHookId) {
      super(renderHookId);
      this.product = product;
    }
  
    addToCart() {
      App.addProductToCart(this.product);
    }
  
    render() {
      const prodEl = this.createRootElement('li', 'product-item');
      prodEl.innerHTML = `
          <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}" >
            <div class="product-item__content">
              <h2>${this.product.title}</h2>
              <h3>\$${this.product.price}</h3>
              <p>${this.product.description}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        `;
      const addCartButton = prodEl.querySelector('button');
      addCartButton.addEventListener('click', this.addToCart.bind(this));
    }
  }
  
  class ProductList extends Component {
    products = [
      new Product(
        'A Pillow',
        'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',
        'A soft pillow!',
        19.99
      ),
      new Product(
        'A Carpet',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
        'A carpet which you might like - or not.',
        89.99
      )
    ];
  
    constructor(renderHookId) {
      super(renderHookId);
    }
  
    render() {
      this.createRootElement('ul', 'product-list', [
        new ElementAttribute('id', 'prod-list')
      ]);
      for (const prod of this.products) {
        new ProductItem(prod, 'prod-list');
      }
    }
  }
  
  class Shop {
    constructor() {
      this.render();
    }
  
    render() {
      this.cart = new ShoppingCart('app');
      new ProductList('app');
    }
  }
  
  class App {
    static cart;
  
    static init() {
      const shop = new Shop();
      this.cart = shop.cart;
    }
  
    static addProductToCart(product) {
      this.cart.addProduct(product);
    }
  }
  
  App.init();*/
  





 /* //13.Error function methods property or making sure order now button is click
  class Product {
    // title = 'DEFAULT';
    // imageUrl;
    // description;
    // price;
  
    constructor(title, image, desc, price) {
      this.title = title;
      this.imageUrl = image;
      this.description = desc;
      this.price = price;
    }
  }
  
  class ElementAttribute {
    constructor(attrName, attrValue) {
      this.name = attrName;
      this.value = attrValue;
    }
  }
  
  class Component {
    constructor(renderHookId, shouldRender = true) {
      this.hookId = renderHookId;
      if (shouldRender) {
        this.render();
      }
    }
  
    render() {}
  
    createRootElement(tag, cssClasses, attributes) {
      const rootElement = document.createElement(tag);
      if (cssClasses) {
        rootElement.className = cssClasses;
      }
      if (attributes && attributes.length > 0) {
        for (const attr of attributes) {
          rootElement.setAttribute(attr.name, attr.value);
        }
      }
      document.getElementById(this.hookId).append(rootElement);
      return rootElement;
    }
  }
  
  class ShoppingCart extends Component {
    items = [];
  
    set cartItems(value) {
      this.items = value;
      this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
        2
      )}</h2>`;
    }
  
    get totalAmount() {
      const sum = this.items.reduce(
        (prevValue, curItem) => prevValue + curItem.price,
        0
      );
      return sum;
    }
  
    constructor(renderHookId) {
      super(renderHookId, false);
      this.orderProducts = () => {
        console.log('Ordering...');
        console.log(this.items);
      };
      this.render();
    }
  
    addProduct(product) {
      const updatedItems = [...this.items];
      updatedItems.push(product);
      this.cartItems = updatedItems;
    }
  
    render() {
      const cartEl = this.createRootElement('section', 'cart');
      cartEl.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order Now!</button>
      `;
      const orderButton = cartEl.querySelector('button');
      // orderButton.addEventListener('click', () => this.orderProducts());
      orderButton.addEventListener('click', this.orderProducts);
      this.totalOutput = cartEl.querySelector('h2');
    }
  }
  
  class ProductItem extends Component {
    constructor(product, renderHookId) {
      super(renderHookId, false);
      this.product = product;
      this.render();
    }
  
    addToCart() {
      App.addProductToCart(this.product);
    }
  
    render() {
      const prodEl = this.createRootElement('li', 'product-item');
      prodEl.innerHTML = `
          <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}" >
            <div class="product-item__content">
              <h2>${this.product.title}</h2>
              <h3>\$${this.product.price}</h3>
              <p>${this.product.description}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        `;
      const addCartButton = prodEl.querySelector('button');
      addCartButton.addEventListener('click', this.addToCart.bind(this));
    }
  }
  
  class ProductList extends Component {
    products = [];
  
    constructor(renderHookId) {
      super(renderHookId);
      this.fetchProducts();
    }
  
    fetchProducts() {
      this.products = [
        new Product(
          'A Pillow',
          'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',
          'A soft pillow!',
          19.99
        ),
        new Product(
          'A Carpet',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
          'A carpet which you might like - or not.',
          89.99
        )
      ];
      this.renderProducts();
    }
  
    renderProducts() {
      for (const prod of this.products) {
        new ProductItem(prod, 'prod-list');
      }
    }
  
    render() {
      this.createRootElement('ul', 'product-list', [
        new ElementAttribute('id', 'prod-list')
      ]);
      if (this.products && this.products.length > 0) {
        this.renderProducts();
      }
    }
  }
  
  class Shop {
    constructor() {
      this.render();
    }
  
    render() {
      this.cart = new ShoppingCart('app');
      new ProductList('app');
    }
  }
  
  class App {
    static cart;
  
    static init() {
      const shop = new Shop();
      this.cart = shop.cart;
    }
  
    static addProductToCart(product) {
      this.cart.addProduct(product);
    }
  }
  
  App.init();*/






  //14.private property
  class Product {
    // title = 'DEFAULT';
    // imageUrl;
    // description;
    // price;
  
    constructor(title, image, desc, price) {
      this.title = title;
      this.imageUrl = image;
      this.description = desc;
      this.price = price;
    }
  }
  
  class ElementAttribute {
    constructor(attrName, attrValue) {
      this.name = attrName;
      this.value = attrValue;
    }
  }
  
  class Component {
    constructor(renderHookId, shouldRender = true) {
      this.hookId = renderHookId;
      if (shouldRender) {
        this.render();
      }
    }
  
    render() {}
  
    createRootElement(tag, cssClasses, attributes) {
      const rootElement = document.createElement(tag);
      if (cssClasses) {
        rootElement.className = cssClasses;
      }
      if (attributes && attributes.length > 0) {
        for (const attr of attributes) {
          rootElement.setAttribute(attr.name, attr.value);
        }
      }
      document.getElementById(this.hookId).append(rootElement);
      return rootElement;
    }
  }
  
  class ShoppingCart extends Component {
    items = [];
  
    set cartItems(value) {
      this.items = value;
      this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
        2
      )}</h2>`;
    }
  
    get totalAmount() {
      const sum = this.items.reduce(
        (prevValue, curItem) => prevValue + curItem.price,
        0
      );
      return sum;
    }
  
    constructor(renderHookId) {
      super(renderHookId, false);
      this.orderProducts = () => {
        console.log('Ordering...');
        console.log(this.items);
      };
      this.render();
    }
  
    addProduct(product) {
      const updatedItems = [...this.items];
      updatedItems.push(product);
      this.cartItems = updatedItems;
    }
  
    render() {
      const cartEl = this.createRootElement('section', 'cart');
      cartEl.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order Now!</button>
      `;
      const orderButton = cartEl.querySelector('button');
      // orderButton.addEventListener('click', () => this.orderProducts());
      orderButton.addEventListener('click', this.orderProducts);
      this.totalOutput = cartEl.querySelector('h2');
    }
  }
  
  class ProductItem extends Component {
    constructor(product, renderHookId) {
      super(renderHookId, false);
      this.product = product;
      this.render();
    }
  
    addToCart() {
      App.addProductToCart(this.product);
    }
  
    render() {
      const prodEl = this.createRootElement('li', 'product-item');
      prodEl.innerHTML = `
          <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}" >
            <div class="product-item__content">
              <h2>${this.product.title}</h2>
              <h3>\$${this.product.price}</h3>
              <p>${this.product.description}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        `;
      const addCartButton = prodEl.querySelector('button');
      addCartButton.addEventListener('click', this.addToCart.bind(this));
    }
  }
  
  class ProductList extends Component {
    #products = [];
  
    constructor(renderHookId) {
      super(renderHookId, false);
      this.render();
      this.fetchProducts();
    }
  
    fetchProducts() {
      this.#products = [
        new Product(
          'A Pillow',
          'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',
          'A soft pillow!',
          19.99
        ),
        new Product(
          'A Carpet',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
          'A carpet which you might like - or not.',
          89.99
        )
      ];
      this.renderProducts();
    }
  
    renderProducts() {
      for (const prod of this.#products) {
        new ProductItem(prod, 'prod-list');
      }
    }
  
    render() {
      this.createRootElement('ul', 'product-list', [
        new ElementAttribute('id', 'prod-list')
      ]);
      if (this.#products && this.#products.length > 0) {
        this.renderProducts();
      }
    }
  }
  
  class Shop {
    constructor() {
      this.render();
    }
  
    render() {
      this.cart = new ShoppingCart('app');
      new ProductList('app');
    }
  }
  
  class App {
    static cart;
  
    static init() {
      const shop = new Shop();
      this.cart = shop.cart;
    }
  
    static addProductToCart(product) {
      this.cart.addProduct(product);
    }
  }
  
  App.init();
  