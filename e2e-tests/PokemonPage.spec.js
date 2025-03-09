const { test, describe, expect, beforeEach } = require('@playwright/test')

describe('Pokedex', () => {
  test('can navigate to pokemon page', async ({ page }) => {
    await page.goto('http://localhost:8080')
    await page.getByText('ivysaur').click()
    await expect(page.getByText('chlorophyll ')).toBeVisible()
  })
})