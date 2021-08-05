import { Injectable } from '@angular/core';
import { EventsService } from './index';

@Injectable({
    providedIn: 'root',
})
export class CommonService {

    constructor(private events: EventsService) { }
    startedClass = false;
    completedClass = false;
    onStarted() {
        this.events.publish('CallApiCount');
        this.startedClass = true;
        setTimeout(() => {
            this.startedClass = false;
        }, 800);
    }

    onCompleted() {
        this.completedClass = true;
        setTimeout(() => {
            this.completedClass = false;
        }, 800);
    }
}
