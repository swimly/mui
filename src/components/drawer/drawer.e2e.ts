import { newE2EPage } from '@stencil/core/testing';

describe('hc-drawer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-drawer></hc-drawer>');

    const element = await page.find('hc-drawer');
    expect(element).toHaveClass('hydrated');
  });
});
