import { newE2EPage } from '@stencil/core/testing';

describe('hc-form-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-form-item></hc-form-item>');

    const element = await page.find('hc-form-item');
    expect(element).toHaveClass('hydrated');
  });
});
