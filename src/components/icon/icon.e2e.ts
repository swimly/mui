import { newE2EPage } from '@stencil/core/testing';

describe('hc-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-icon></hc-icon>');

    const element = await page.find('hc-icon');
    expect(element).toHaveClass('hydrated');
  });
});
