import { Component, OnInit, Input } from '@angular/core';
import { TextModel } from 'src/app/models/text.model';

@Component({
  selector: 'app-simple-text',
  templateUrl: './simple-text.component.html',
  styleUrls: ['./simple-text.component.scss']
})
export class SimpleTextComponent implements OnInit {
  @Input() content: TextModel;
  constructor() { }

  ngOnInit(): void {
  }

  getSize(): string {
    return `${this.content.textSize}px`;
  }
  
  getStyle(): string {
    return this.content.textStyle;
  }
  
  getWeight(): string {
    return this.content.textWeight;
  }

  getFamily(): string {
    return this.content.fontFamily;
  }

  getDecoration(): string {
    return this.content.textDecoration;
  }
}
