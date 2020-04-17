import { newE2EPage } from '@stencil/core/testing';

describe('hc-signature', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-signature></hc-signature>');

    const element = await page.find('hc-signature');
    expect(element).toHaveClass('hydrated');
  });
});
