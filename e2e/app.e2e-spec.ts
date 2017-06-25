import { NgHeroePage } from './app.po';

describe('ng-heroe App', function() {
  let page: NgHeroePage;

  beforeEach(() => {
    page = new NgHeroePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
