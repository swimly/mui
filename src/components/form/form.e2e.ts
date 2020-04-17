import { newE2EPage } from '@stencil/core/testing';

describe('hc-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-form></hc-form>');

    const element = await page.find('hc-form');
    expect(element).toHaveClass('hydrated');
  });
});
