import { newE2EPage } from '@stencil/core/testing';

describe('hc-toast', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-toast></hc-toast>');

    const element = await page.find('hc-toast');
    expect(element).toHaveClass('hydrated');
  });
});
