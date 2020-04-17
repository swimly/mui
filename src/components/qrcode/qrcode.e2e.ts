import { newE2EPage } from '@stencil/core/testing';

describe('hc-qrcode', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-qrcode></hc-qrcode>');

    const element = await page.find('hc-qrcode');
    expect(element).toHaveClass('hydrated');
  });
});
