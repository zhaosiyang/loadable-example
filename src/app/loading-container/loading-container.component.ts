import {Component, Input } from '@angular/core';
import {Loadable} from '../../loadable/loadable';

@Component({
  selector: 'loading-container',
  template: `
    <div *ngIf="loadable.loading">This is loading spinner...</div>
    <div *ngIf="loadable.error">{{loadable?.error?.message || 'Something went wrong'}}</div>
    <ng-container *ngIf="loadable.success">
        <ng-content></ng-content>
    </ng-container>
  `
})
export class LoadingContainerComponent {
  @Input() loadable: Loadable;
}
