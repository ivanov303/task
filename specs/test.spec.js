import {mainPage} from "../pageObjects/MainPage";
import {attributesPage} from "../pageObjects/AttributesPage";
import {scrollingPage} from "../pageObjects/ScrollingPage";
import {scrollingViewPage} from "../pageObjects/ScrollingViewPage";

describe('Base suite: ', () => {

    it(`Button test`, () => {
        mainPage.clickAttributesButton();
        attributesPage.clickButton();
        expect(attributesPage.$button).toHaveAttr('value', '1')
    });

    it(`Switcher test`, () => {
        mainPage.clickAttributesButton();
        expect(attributesPage.$switcher).toHaveAttr('value', '1')
        attributesPage.moveSwitcher();
        expect(attributesPage.$switcher).toHaveAttr('value', '0')
    });

    it(`Scrolling test`, () => {
        mainPage.clickScrollingButton();
        scrollingPage.clickScrollingButton();
        scrollingViewPage.scrollDown();
        browser.pause(2000);
        scrollingViewPage.scrollUp();
    });
});
