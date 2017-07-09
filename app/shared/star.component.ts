import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
/**
 * Created by SOFTMAN on 09-07-2017.
 */

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})


export class StarComponent implements OnChanges {
    @Input() rating: number;
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();
    starWidth: number;
    ngOnChanges(): void {
        this.starWidth = this.rating  * 86 / 5;
    }
    onClick(): void {
        this.notify.emit(` Haha Clicked ${this.rating}`);
        console.log('I am called', this);
    }
}
