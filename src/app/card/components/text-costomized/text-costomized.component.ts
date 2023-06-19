import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-costomized',
  templateUrl: './text-costomized.component.html',
  styleUrls: ['./text-costomized.component.css']
})
export class TextCostomizedComponent {
  @Input()
  public textBody!: string;
}
