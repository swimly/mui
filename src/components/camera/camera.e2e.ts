import { newE2EPage } from '@stencil/core/testing';

describe('hc-camera', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-camera></hc-camera>');

    const element = await page.find('hc-camera');
    expect(element).toHaveClass('hydrated');
  });
});
