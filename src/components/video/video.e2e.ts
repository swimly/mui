import { newE2EPage } from '@stencil/core/testing';

describe('hc-video', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-video></hc-video>');

    const element = await page.find('hc-video');
    expect(element).toHaveClass('hydrated');
  });
});
