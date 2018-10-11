import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	nums: number[] = [];
	numUpdate: any;
	numObserver: any;

	constructor(public navCtrl: NavController) {

		this.numUpdate = Observable.create(observer => {
			this.numObserver = observer;
		});

		this.numUpdate.subscribe((num) => {
			this.nums.push(num)
		})

		this.watch7(this.numObserver);
		this.watch3(this.numObserver);
		this.watch17(this.numObserver);
		this.watch60(this.numObserver);
		this.watch600(this.numObserver);
	}

	watch7(observer) {
		setInterval(() => {
			observer.next(7);
		}, 700)
	}

	watch3(observer) {
		setInterval(() => {
			observer.next(3);
		}, 300)
	}

	watch17(observer) {
		setInterval(() => {
			observer.next(17);
		}, 1700)
	}

	watch60(observer) {
		setInterval(() => {
			observer.next(60);
		}, 6000)
	}

	watch600(observer) {

		setTimeout(() => {
			observer.next(180);
			observer.complete();
		}, 18000)
	}

}
