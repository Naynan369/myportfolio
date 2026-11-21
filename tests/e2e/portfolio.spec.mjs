import { expect, test } from '@playwright/test'

test('switches between English and translated Italian without exposing the key', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  await expect(page.locator('.translation-notice')).toHaveCount(0)

  await page.getByRole('button', { name: 'Italiano' }).click()
  await expect(page).toHaveURL('/it')
  await expect(page.locator('html')).toHaveAttribute('lang', 'it-x-mtfrom-en')
  await expect(page.getByText('IT Data Analysis Student & Software Developer')).toBeVisible()
  await expect(page.locator('.translation-notice img')).toBeVisible()
  await expect(page.locator('.contact-section .translation-notice')).toHaveCount(1)

  await page.getByRole('button', { name: 'IT Menu' }).click()
  await expect(page.getByRole('button', { name: 'Chiudi' })).toBeVisible()
  await expect(page.getByRole('button', { name: /Vicino/i })).toHaveCount(0)

  const pageData = await page.locator('#__NEXT_DATA__').textContent()
  expect(pageData).not.toContain('ci-fixture-key')

  await page.getByRole('button', { name: 'Chiudi' }).click()
  await page.getByRole('button', { name: 'English' }).click()
  await expect(page).toHaveURL('/')
  await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  await expect(page.locator('.translation-notice')).toHaveCount(0)
})

test('translates the Evently case study and keeps its demo link', async ({ page }) => {
  await page.goto('/it/evently')
  await expect(page.locator('.detail-lead')).toContainText('IT Event discovery')
  await expect(page.getByRole('link', { name: 'IT Live demo' })).toHaveAttribute('href', 'https://evently-beige-omega.vercel.app/')
  await expect(page.locator('html')).toHaveAttribute('lang', 'it-x-mtfrom-en')
  await expect(page.locator('.contact-section .translation-notice')).toHaveCount(1)
})

test('shows Pantry in the project list and its case study in both languages', async ({ page }) => {
  await page.goto('/')
  const card = page.locator('.project-card--food-delivery')
  await expect(card.getByRole('heading', { name: 'Pantry' })).toBeVisible()
  await card.getByRole('link', { name: 'View case study: Pantry' }).click()
  await expect(page).toHaveURL('/food-delivery')
  await expect(page.getByRole('heading', { name: 'Pantry', exact: true })).toBeVisible()
  await expect(page.locator('.detail-gallery img')).toHaveCount(2)
  await expect(page.getByRole('link', { name: 'Request a walkthrough' })).toHaveAttribute('href', 'mailto:samuel.zewge@icloud.com?subject=Pantry%20project%20walkthrough')

  await page.goto('/it/food-delivery')
  await expect(page.getByRole('heading', { name: 'Pantry', exact: true })).toBeVisible()
  await expect(page.locator('.detail-lead')).toContainText('IT A grocery replacement app')
  await expect(page.getByRole('link', { name: 'IT Request a walkthrough' })).toBeVisible()
})
