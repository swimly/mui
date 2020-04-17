import { newE2EPage } from '@stencil/core/testing';

describe('hc-image-preview', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-image-preview></hc-image-preview>');

    const element = await page.find('hc-image-preview');
    expect(element).toHaveClass('hydrated');
  });
});
