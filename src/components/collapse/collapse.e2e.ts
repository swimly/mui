import { newE2EPage } from '@stencil/core/testing';

describe('hc-collapse', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-collapse></hc-collapse>');

    const element = await page.find('hc-collapse');
    expect(element).toHaveClass('hydrated');
  });
});
