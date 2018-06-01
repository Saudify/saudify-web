import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo(): AppPage {
    browser.get('/');
    return this;
  }

  getMapElement(): ElementFinder {
    return element(by.css('section.map'));
  }
}
