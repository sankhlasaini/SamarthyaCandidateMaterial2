import { SamarthyaPlacementPage } from './app.po';

describe('samarthya-placement App', function() {
  let page: SamarthyaPlacementPage;

  beforeEach(() => {
    page = new SamarthyaPlacementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
