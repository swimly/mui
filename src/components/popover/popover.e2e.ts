import { newE2EPage } from '@stencil/core/testing';

describe('hc-popover', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-popover></hc-popover>');

    const element = await page.find('hc-popover');
    expect(element).toHaveClass('hydrated');
  });
});
