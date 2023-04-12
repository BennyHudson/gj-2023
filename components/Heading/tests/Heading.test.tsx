// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

/* eslint-disable react/react-in-jsx-scope */

/** *************************************************************************** */

/** Import - helpers                                                            */

/** --------------------------------------------------------------------------- */

/** Imports that are not being mocked or tested                                 */

/** *************************************************************************** */

/** *************************************************************************** */

/** Import - tested files                                                       */

/** --------------------------------------------------------------------------- */

/** Imports that unit tests will be written against                             */

/** *************************************************************************** */
import Heading from '../Heading'

/** *************************************************************************** */
/** Import - mocked files                                                       */
/** --------------------------------------------------------------------------- */
/** Imports that are defined only to be mocked eg stores, utils. helpers        */
/** *************************************************************************** */

/** *************************************************************************** */
/** Jest mocks                                                                  */
/** --------------------------------------------------------------------------- */
/** Globally defined jest mocks                                                 */
/** *************************************************************************** */

/** *************************************************************************** */
/** Unit testing                                                                */
/** *************************************************************************** */

describe('<Heading />', () => {
  describe('render', () => {
    it('should render standard text', () => {
      const wrapper = shallow(<Heading text='Hello' />)
      expect(wrapper.text()).toBe('Hello')
    })
    it('should render standard text & highlight', () => {
      const wrapper = shallow(<Heading text='Hello' highlightText='Ben' />)
      expect(wrapper.text()).toBe('Ben Hello')
    })
    it('should render standard text & highlight & suffix', () => {
      const wrapper = shallow(<Heading text='Hello' highlightText='Ben' suffixText='Hudson' />)
      expect(wrapper.text()).toBe('Hello Ben Hudson')
    })
  })
})
