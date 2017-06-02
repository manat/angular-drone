import { AngularDronePage } from './app.po';

describe('angular-drone App', () => {
  let page: AngularDronePage;

  beforeEach(() => {
    page = new AngularDronePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
