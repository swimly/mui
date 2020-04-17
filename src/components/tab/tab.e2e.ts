import { newE2EPage } from '@stencil/core/testing';

describe('hc-tab', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-tab></hc-tab>');

    const element = await page.find('hc-tab');
    expect(element).toHaveClass('hydrated');
  });
});
