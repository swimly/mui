import { newE2EPage } from '@stencil/core/testing';

describe('hc-sticky', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-sticky></hc-sticky>');

    const element = await page.find('hc-sticky');
    expect(element).toHaveClass('hydrated');
  });
});
