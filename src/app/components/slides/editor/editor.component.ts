import { Component, OnInit } from '@angular/core';
import { TextModel } from 'src/app/models/text.model';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  selectedText: TextModel;
  constructor() { 
    this.selectedText = {
      content: 'Titulo',
      textStyle: '',
      textSize: 21,
      textDecoration: '',
      textWeight: 'bold',
      fontFamily: 'heveltica'
    }
  }
  ngOnInit(): void {
  }

  contentChanged(contentChanged: TextModel) {
    this.selectedText = contentChanged;
  }
}
