import { AppPage } from './app.po';

describe('saudify-web App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display map', (done: DoneFn) => {
    page
      .navigateTo()
      .getMapElement()
      .isDisplayed()
      .then(actual => {
        expect(actual).toBeTruthy();
        done();
      });
  });
});
