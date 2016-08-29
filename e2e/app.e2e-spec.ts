import { TSLPage } from './app.po';

describe('tsl App', function() {
  let page: TSLPage;

  beforeEach(() => {
    page = new TSLPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
