import { newE2EPage } from '@stencil/core/testing';

describe('hc-swiper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-swiper></hc-swiper>');

    const element = await page.find('hc-swiper');
    expect(element).toHaveClass('hydrated');
  });
});
