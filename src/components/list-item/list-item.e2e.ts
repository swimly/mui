import { newE2EPage } from '@stencil/core/testing';

describe('hc-list-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-list-item></hc-list-item>');

    const element = await page.find('hc-list-item');
    expect(element).toHaveClass('hydrated');
  });
});
