import { newE2EPage } from '@stencil/core/testing';

describe('hc-image', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-image></hc-image>');

    const element = await page.find('hc-image');
    expect(element).toHaveClass('hydrated');
  });
});
