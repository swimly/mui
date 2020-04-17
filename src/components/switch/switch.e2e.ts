import { newE2EPage } from '@stencil/core/testing';

describe('hc-switch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-switch></hc-switch>');

    const element = await page.find('hc-switch');
    expect(element).toHaveClass('hydrated');
  });
});
