import { test, expect } from '@playwright/test';

test('keyboard events in playwright', async ({ page }) => {
 await page.goto("https://www.google.com/")
 //await page.locator("textarea[name='q']").type("Mukesh Otwani")
 await page.locator("textarea[name='q']").focus()
 await page.keyboard.type("Mukesh Otwani!")
 //await page.waitForTimeout(2000)
// await page.keyboard.press("Enter")
// await page.waitForTimeout(2000)
/*await page.keyboard.press("Control+A")
await page.keyboard.press("Control+C")
await page.keyboard.press("Backspace")
//await page.waitForTimeout(2000)
await page.keyboard.press("Control+V")
//await page.waitForTimeout(2000)
*/
//await page.keyboard.type('Hello World!');
await page.keyboard.press('ArrowLeft')

await page.keyboard.down('Shift')
for (let i = 0; i < 'Otwani'.length; i++){
  await page.keyboard.press('ArrowLeft')
}
await page.keyboard.up('Shift')

await page.keyboard.press('Backspace')
// Result text will end up saying 'Hello!'
})