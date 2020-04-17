import { newE2EPage } from '@stencil/core/testing';

describe('hc-notify', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-notify></hc-notify>');

    const element = await page.find('hc-notify');
    expect(element).toHaveClass('hydrated');
  });
});
