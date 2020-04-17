import { newE2EPage } from '@stencil/core/testing';

describe('hc-tabbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-tabbar></hc-tabbar>');

    const element = await page.find('hc-tabbar');
    expect(element).toHaveClass('hydrated');
  });
});
