import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EditorComponent } from './editor.component';
import { EditableArticleResolver } from './editable-article-resolver.service';
import { AuthGuard } from '../core';
import { SharedModule } from '../shared';
import { EditorRoutingModule } from './editor-routing.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { SafeHtmlPipe } from './safe-html.pipe';
@NgModule({
  imports: [SharedModule, 
    EditorRoutingModule,
    AngularEditorModule
  ],
  declarations: [EditorComponent, SafeHtmlPipe],
  providers: [EditableArticleResolver]
})
export class EditorModule {}
