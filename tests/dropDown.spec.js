import {test,expect} from '@playwright/test'

test("select values from dropdown", async ({page}) => {
    await page.goto("https://freelance-learn-automation.vercel.app/signup")
    /* 
    best practice is to chose label it wont change dev can change value or index
    */
    await page.locator("#state").selectOption({label:"Goa"})
   // await page.waitForTimeout(2000)
    await page.locator("#state").selectOption({value:"Himachal Pradesh"})
   //  await page.waitForTimeout(2000)
    await page.locator("#state").selectOption({index:4})
 /*   const values = await page.locator("#state").textContent()
    console.log("All drop down value " + values)
    await expect(values.includes("Kerala1")).toBeTruthy()
    */
   let state = await page.$("#state")
   let allElements =await state.$$("option")
   console.log("hello"+ allElements)
   let dropDownStatus = false
   for (let i =0; i<allElements.length ;i++){
    let element = allElements[i]
    let value = await element.textContent()
    console.log("value from drop down using for loop"+ value)
    if (value.includes("Rajasthan")) {
        dropDownStatus=true
        break
    }
   
    
   }
   await expect(dropDownStatus).toBeTruthy()
   await page.locator("#hobbies").selectOption(['Playing','Swimming'])
   await page.waitForTimeout(2000)
})