import { newE2EPage } from '@stencil/core/testing';

describe('hc-swiper-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-swiper-item></hc-swiper-item>');

    const element = await page.find('hc-swiper-item');
    expect(element).toHaveClass('hydrated');
  });
});
