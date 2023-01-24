import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-config-buttons',
  templateUrl: './config-buttons.component.html',
  styleUrls: ['./config-buttons.component.scss'],
})
export class ConfigButtonsComponent {
  @Input() icon: string | undefined;
  @Input() desc: string | undefined;
  @Input() titulo: string | undefined;
}
