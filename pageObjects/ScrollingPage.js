import { BasePage } from './BasePage'

class ScrollingPage extends BasePage {

    get $scrollingButton () {
        return $('~ScrollView');
    }

    clickScrollingButton () {
        this.clickElement(this.$scrollingButton)
    }
}

export const scrollingPage = new ScrollingPage()