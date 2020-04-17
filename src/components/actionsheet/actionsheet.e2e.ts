import { newE2EPage } from '@stencil/core/testing';

describe('hc-actionsheet', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-actionsheet></hc-actionsheet>');

    const element = await page.find('hc-actionsheet');
    expect(element).toHaveClass('hydrated');
  });
});
