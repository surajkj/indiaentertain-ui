import { ArticleRoutingModule } from './article-routing.module';

describe('ArticleRoutingModule', () => {
  let articleRoutingModule: ArticleRoutingModule;

  beforeEach(() => {
    articleRoutingModule = new ArticleRoutingModule();
  });

  it('should create an instance', () => {
    expect(articleRoutingModule).toBeTruthy();
  });
});
