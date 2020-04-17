import { newE2EPage } from '@stencil/core/testing';

describe('hc-tag', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-tag></hc-tag>');

    const element = await page.find('hc-tag');
    expect(element).toHaveClass('hydrated');
  });
});
