import { newE2EPage } from '@stencil/core/testing';

describe('hc-panel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-panel></hc-panel>');

    const element = await page.find('hc-panel');
    expect(element).toHaveClass('hydrated');
  });
});
