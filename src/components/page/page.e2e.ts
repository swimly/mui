import { newE2EPage } from '@stencil/core/testing';

describe('hc-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-page></hc-page>');

    const element = await page.find('hc-page');
    expect(element).toHaveClass('hydrated');
  });
});
