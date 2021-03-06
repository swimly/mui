import { newE2EPage } from '@stencil/core/testing';

describe('hc-calendar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-calendar></hc-calendar>');

    const element = await page.find('hc-calendar');
    expect(element).toHaveClass('hydrated');
  });
});
