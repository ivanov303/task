import { BasePage } from './BasePage'

class AttributesPage extends BasePage {

    get $button(){
        return $('//XCUIElementTypeButton[@name="Button"]')
    }

    get $switcher () {
        return $('//XCUIElementTypeSwitch')
    }


    clickButton () {
        this.clickElement(this.$button)
    }

    moveSwitcher () {
        this.clickElement(this.$switcher)
    }
}

export const attributesPage = new AttributesPage()