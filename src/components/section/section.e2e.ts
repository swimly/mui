import { newE2EPage } from '@stencil/core/testing';

describe('hc-section', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-section></hc-section>');

    const element = await page.find('hc-section');
    expect(element).toHaveClass('hydrated');
  });
});
