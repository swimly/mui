import { newE2EPage } from '@stencil/core/testing';

describe('hc-echarts', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-echarts></hc-echarts>');

    const element = await page.find('hc-echarts');
    expect(element).toHaveClass('hydrated');
  });
});
