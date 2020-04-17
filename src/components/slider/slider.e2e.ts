import { newE2EPage } from '@stencil/core/testing';

describe('hc-slider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-slider></hc-slider>');

    const element = await page.find('hc-slider');
    expect(element).toHaveClass('hydrated');
  });
});
