import { newE2EPage } from '@stencil/core/testing';

describe('hc-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-input></hc-input>');

    const element = await page.find('hc-input');
    expect(element).toHaveClass('hydrated');
  });
});
