import { newE2EPage } from '@stencil/core/testing';

describe('hc-collapse-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-collapse-item></hc-collapse-item>');

    const element = await page.find('hc-collapse-item');
    expect(element).toHaveClass('hydrated');
  });
});
