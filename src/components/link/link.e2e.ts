import { newE2EPage } from '@stencil/core/testing';

describe('hc-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-link></hc-link>');

    const element = await page.find('hc-link');
    expect(element).toHaveClass('hydrated');
  });
});
