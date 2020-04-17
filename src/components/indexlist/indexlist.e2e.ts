import { newE2EPage } from '@stencil/core/testing';

describe('hc-indexlist', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-indexlist></hc-indexlist>');

    const element = await page.find('hc-indexlist');
    expect(element).toHaveClass('hydrated');
  });
});
