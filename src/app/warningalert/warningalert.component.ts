import { Component } from '@angular/core';

@Component({
    selector: 'app-warningalert',
    template: '<h2><span class="glyphicon glyphicon-warning-sign"></span> WARNING: Proceed with caution!</h2>',
    styles: [`
    h2 {
        background-color: red;
        color: yellow;
      }
      
    `]
})
export class WarningAlertComponent {
    
}