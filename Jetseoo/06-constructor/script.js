function Product(name, weight, price, count) {
  this.name = name;
  this.weight = weight;
  this.price = price;
  this.count = count;

  this.setProp = function ( propName =
    prompt('Choose property to change (name / weight / price / count)')
    ) {
    if (!propName) return alert('Invalid input')

    switch (propName.toLowerCase()) {
      case 'name':
        this.name = prompt('Set new product name:')
        break;
      case 'weight':
        this.weight = +prompt('Set new product weight:')
        break;
      case 'price':
        this.price = +prompt('Set new product price')
        break;
      case 'count':
        this.count = +prompt('Set new product count:')
        break;
      default:
        alert('Bad input! Type one of the list: name, weight, price, count')
        break;
    }    
  }

  this.showProps = function ( propName =
    prompt('Choose property to show (name / weight / price / count)')) {
    if (!propName) return alert('Invalid input')

    switch (propName.toLowerCase()) {
      case 'name':
        console.log('Product name:', this.name);
        break;
      case 'weight':
        console.log('Product weight:', this.weight);
        break;
      case 'price':
        console.log('Product price:', this.price);
        break;
      case 'count':
        console.log('Product count:', this.count);
        break;
      default:
        alert('Bad input! Type one of the list: name, weight, price, count')
        break;
    }
  }
  
  this.sell = function () {
    let amount = +prompt('How many items were sold?')
    if (!amount) return alert('invalid amount')
    if (amount > this.count) return alert('You cant sell more than you have!')
    this.count =- amount
  }
}

const apple = new Product(
  prompt('Set product name:'),
  +prompt('Set product weight:'),
  +prompt('Set product price:'),
  +prompt('Set product count:')
)