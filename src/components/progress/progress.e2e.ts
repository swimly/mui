import { newE2EPage } from '@stencil/core/testing';

describe('hc-progress', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-progress></hc-progress>');

    const element = await page.find('hc-progress');
    expect(element).toHaveClass('hydrated');
  });
});
