import { newE2EPage } from '@stencil/core/testing';

describe('hc-col', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-col></hc-col>');

    const element = await page.find('hc-col');
    expect(element).toHaveClass('hydrated');
  });
});
