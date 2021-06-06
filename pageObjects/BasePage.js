import { config } from '../config/wdio.shared.conf';

export class BasePage {

    constructor() {
        this.platform = config.capabilities[0].platformName
    }

    verticalSwipe (pointY1, pointY2) {
        browser.touchAction([
            { action: 'press', x: 300, y: pointY1 },
            { action: 'wait', ms: 400 },
            { action: 'moveTo', x: 300, y: pointY2 },
            'release'
        ]);
    }

    scrollDown () {
        if (this.platform === 'iOS'){
            this.verticalSwipe(600,200);
        } else {
            this.verticalSwipe(1200,400);
        }
    }

    scrollUp () {
        if (this.platform === 'iOS'){
            this.verticalSwipe(300,600);
        } else {
            this.verticalSwipe(400,1200);
        }
    }



    clickElement (element, timeMilliSec = 5000) {
        element.waitForDisplayed(timeMilliSec);
        element.click();
    }

    typeInElement (element, text, timeMilliSec = 5000) {
        element.waitForDisplayed(timeMilliSec);
        element.addValue(text);
    }
}

