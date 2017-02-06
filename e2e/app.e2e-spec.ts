import { GandhiTheSpyPage } from './app.po';

describe('gandhi-the-spy App', function() {
  let page: GandhiTheSpyPage;

  beforeEach(() => {
    page = new GandhiTheSpyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
