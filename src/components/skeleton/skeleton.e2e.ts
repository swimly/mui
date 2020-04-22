import { newE2EPage } from '@stencil/core/testing';

describe('hc-skeleton', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-skeleton></hc-skeleton>');

    const element = await page.find('hc-skeleton');
    expect(element).toHaveClass('hydrated');
  });
});
