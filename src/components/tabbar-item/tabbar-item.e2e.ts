import { newE2EPage } from '@stencil/core/testing';

describe('hc-tabbar-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-tabbar-item></hc-tabbar-item>');

    const element = await page.find('hc-tabbar-item');
    expect(element).toHaveClass('hydrated');
  });
});
