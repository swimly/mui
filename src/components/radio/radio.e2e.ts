import { newE2EPage } from '@stencil/core/testing';

describe('hc-radio', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-radio></hc-radio>');

    const element = await page.find('hc-radio');
    expect(element).toHaveClass('hydrated');
  });
});
