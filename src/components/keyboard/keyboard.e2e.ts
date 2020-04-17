import { newE2EPage } from '@stencil/core/testing';

describe('hc-keyboard', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-keyboard></hc-keyboard>');

    const element = await page.find('hc-keyboard');
    expect(element).toHaveClass('hydrated');
  });
});
