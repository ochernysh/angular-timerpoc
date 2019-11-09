import { Component, Input } from '@angular/core';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class TimerComponent  {
  @Input() name: string;
}
