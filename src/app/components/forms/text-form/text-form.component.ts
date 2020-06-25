import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { TextModel } from 'src/app/models/text.model';

@Component({
  selector: 'app-text-form',
  templateUrl: './text-form.component.html',
  styleUrls: ['./text-form.component.scss']
})
export class TextFormComponent implements OnInit {
  @Input() content: TextModel;
  @Output() contentChanged = new EventEmitter<string>();
  availableSizes: Array<number>;
  contentGroup: FormGroup;
  boldActivated: Boolean;
  italicActivated: Boolean;
  underlineActivated: Boolean;

  constructor(public formBuilder: FormBuilder) { 
    this.availableSizes = [8, 10, 12, 14, 16, 18, 20, 30, 45, 60];
  }

  ngOnInit(): void {
    this.contentGroup = this.formBuilder.group({
      content: this.formBuilder.control(this.content.content),
      fontFamily: this.formBuilder.control(this.content.fontFamily),
      textSize: this.formBuilder.control(this.content.textSize),
      textDecoration: this.formBuilder.control(this.content.textDecoration),
      textStyle: this.formBuilder.control(this.content.textStyle),
      textWeight: this.formBuilder.control(this.content.textWeight)
    });
    this.boldActivated = this.content.textWeight === 'bold';
    this.italicActivated = this.content.textStyle === 'italic';
    this.underlineActivated = this.content.textDecoration === 'underline';
  }

  emitContentChange() {
    this.contentChanged.emit(this.contentGroup.value);
  }

  toggleBoldWeight() {
    this.boldActivated = !this.boldActivated;
    this.contentGroup.get('textWeight')
      .setValue(this.boldActivated ? 'bold' : '');
    this.emitContentChange();
  }

  toggleItalicStyle() {
    this.italicActivated = !this.italicActivated;
    this.contentGroup.get('textStyle')
      .setValue(this.italicActivated ? 'italic' : '');
    this.emitContentChange();
  }

  toggleUnderlineDecoration() {
    this.underlineActivated = !this.underlineActivated;
    this.contentGroup.get('textDecoration')
      .setValue(this.underlineActivated ? 'underline' : '');
    this.emitContentChange();
  }
}