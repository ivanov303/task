import { BasePage } from './BasePage'

class MainPage extends BasePage {

    get $portraitButton () {
        return $('~Portrait');
    }

    get $attributesButton () {
        return $('~Attributes');
    }

    get $scrollingButton () {
        return $('~Scrolling');
    }

    clickAttributesButton () {
        this.clickElement(this.$attributesButton)
    }

    clickScrollingButton () {
        this.clickElement(this.$scrollingButton)
    }
}

export const mainPage = new MainPage();