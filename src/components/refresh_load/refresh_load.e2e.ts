import { newE2EPage } from '@stencil/core/testing';

describe('hc-refresh_load', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-refresh_load></hc-refresh_load>');

    const element = await page.find('hc-refresh_load');
    expect(element).toHaveClass('hydrated');
  });
});
