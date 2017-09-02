import { OnlineApplicationFrontendPage } from './app.po';

describe('SherwoodBET - frontend app', () => {
  let page: SherwoodBetFrontendPage;

  beforeEach(() => {
    page = new SherwoodBetFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
