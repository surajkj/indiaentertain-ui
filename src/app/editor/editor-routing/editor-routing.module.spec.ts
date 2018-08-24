import { EditorRoutingModule } from './editor-routing.module';

describe('EditorRoutingModule', () => {
  let editorRoutingModule: EditorRoutingModule;

  beforeEach(() => {
    editorRoutingModule = new EditorRoutingModule();
  });

  it('should create an instance', () => {
    expect(editorRoutingModule).toBeTruthy();
  });
});
