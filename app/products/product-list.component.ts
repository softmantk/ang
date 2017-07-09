/**
 * Created by SOFTMAN on 06-07-2017.
 */
import {Component} from '@angular/core';
import {IProduct} from './product';
import {OnInit} from '@angular/core';
import {ProductService} from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css'],
    moduleId: module.id
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product-Lister';
    imgWidth: number = 50;
    imgMargin: number = 2;
    showImg: boolean = true;
    filterData: string;
    products: IProduct[] ;
    constructor(private _productService: ProductService) {
    }
    toggleImg(): void {
        this.showImg = !this.showImg;
    };
    ngOnInit(): void {
        console.log('In OnInit');
        this.products = this._productService.getProducts();
    };
    called(message: string): void {
        this.pageTitle = 'Product List:' + message;
    }
}


