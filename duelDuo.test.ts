
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    
    const displayed = await title.isDisplayed()
    
    expect(displayed).toBe(true)
    driver.sleep(2000)
})

test('clicks draw button',async () => {
    await driver.findElement(By.id('draw')).click()
})

test('see all robots button', async () => {
    

    await driver.findElement(By.id('see-all')).click()
})