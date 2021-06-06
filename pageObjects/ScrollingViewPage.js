import { BasePage } from './BasePage'

class ScrollingViewPage extends BasePage {

    get $scrollingView () {
        return $('**/XCUIElementTypeStaticText[`label == "ScrollView"`]');
    }
}

export const scrollingViewPage = new ScrollingViewPage()