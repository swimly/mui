import { newE2EPage } from '@stencil/core/testing';

describe('hc-imagebox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-imagebox></hc-imagebox>');

    const element = await page.find('hc-imagebox');
    expect(element).toHaveClass('hydrated');
  });
});
