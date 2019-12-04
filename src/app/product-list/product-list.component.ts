import { Component } from '@angular/core';
  var products = [
  {
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    name: 'Phone Standard',
    price: 299,
    description: ''
  }
];

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  removeItem = function(item){
     var index = this.products.findIndex(function (o) {
            return o === item;
        })
        if (index !== -1) this.products.splice(index, 1);
  }
  share() {
    window.alert('The product has been shared!');
  }
}