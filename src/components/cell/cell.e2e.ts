import { newE2EPage } from '@stencil/core/testing';

describe('hc-cell', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-cell></hc-cell>');

    const element = await page.find('hc-cell');
    expect(element).toHaveClass('hydrated');
  });
});
