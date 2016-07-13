import { Component } from '@angular/core';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [AlertComponent]
})
export class AppComponent {
  title = 'app works!';
}
