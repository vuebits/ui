import { TestOptions } from '../../../models';

export const defaultTest: TestOptions = {
  test: {
    elAttrName: 'data-test',
    elNamePrefix: '',
  },
  testElName (name: string) {
    return {
      [this.test.elAttrName]: `${this.test.elNamePrefix}${name}`,
    };
  },
};
