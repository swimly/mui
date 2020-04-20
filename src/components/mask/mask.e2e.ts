import { newE2EPage } from '@stencil/core/testing';

describe('hc-mask', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-mask></hc-mask>');

    const element = await page.find('hc-mask');
    expect(element).toHaveClass('hydrated');
  });
});
