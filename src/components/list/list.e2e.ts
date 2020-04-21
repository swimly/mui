import { newE2EPage } from '@stencil/core/testing';

describe('hc-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-list></hc-list>');

    const element = await page.find('hc-list');
    expect(element).toHaveClass('hydrated');
  });
});
