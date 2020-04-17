import { newE2EPage } from '@stencil/core/testing';

describe('hc-dropdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-dropdown></hc-dropdown>');

    const element = await page.find('hc-dropdown');
    expect(element).toHaveClass('hydrated');
  });
});
