import { newE2EPage } from '@stencil/core/testing';

describe('hc-picker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-picker></hc-picker>');

    const element = await page.find('hc-picker');
    expect(element).toHaveClass('hydrated');
  });
});
