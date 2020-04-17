import { newE2EPage } from '@stencil/core/testing';

describe('hc-affix', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-affix></hc-affix>');

    const element = await page.find('hc-affix');
    expect(element).toHaveClass('hydrated');
  });
});
