import { newE2EPage } from '@stencil/core/testing';

describe('hc-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-checkbox></hc-checkbox>');

    const element = await page.find('hc-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
