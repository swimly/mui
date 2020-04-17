import { newE2EPage } from '@stencil/core/testing';

describe('hc-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-button></hc-button>');

    const element = await page.find('hc-button');
    expect(element).toHaveClass('hydrated');
  });
});
