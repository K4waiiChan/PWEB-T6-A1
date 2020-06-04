import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/layout/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { EditorComponent } from './components/slides/editor/editor.component';
import { CreatePresentationComponent } from './presentations/create-presentation/create-presentation.component';
import { SimpleTextComponent } from './components/slides/simple-text/simple-text.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
    EditorComponent,
    CreatePresentationComponent,
    SimpleTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
