import { newE2EPage } from '@stencil/core/testing';

describe('hc-row', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-row></hc-row>');

    const element = await page.find('hc-row');
    expect(element).toHaveClass('hydrated');
  });
});
