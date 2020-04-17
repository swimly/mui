import { newE2EPage } from '@stencil/core/testing';

describe('hc-badge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-badge></hc-badge>');

    const element = await page.find('hc-badge');
    expect(element).toHaveClass('hydrated');
  });
});
