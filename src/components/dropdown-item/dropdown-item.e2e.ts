import { newE2EPage } from '@stencil/core/testing';

describe('hc-dropdown-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-dropdown-item></hc-dropdown-item>');

    const element = await page.find('hc-dropdown-item');
    expect(element).toHaveClass('hydrated');
  });
});
