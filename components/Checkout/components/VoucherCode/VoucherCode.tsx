import React, { ReactElement, FC, useState } from 'react'
import { Form, Formik } from 'formik'

import { VoucherCodeProps } from './VoucherCode.types'
import CheckoutPanel from '../CheckoutPanel'
import TextField from '@components/TextField'
import EditButton from '@components/EditButton'

const VoucherCode: FC<VoucherCodeProps> = ({
  panelIndex,
  activePanel,
  setActivePanel,
  checkoutForm,
  setCheckoutForm,
}: VoucherCodeProps): ReactElement => {
  const [errorMessage, setErrorMessage] = useState()

  return (
    <CheckoutPanel panelIndex={panelIndex} activePanel={activePanel} setActivePanel={setActivePanel} title='Voucher Code'>
      {activePanel === panelIndex && (
        <Formik
          // validationSchema={shippingValidation}
          // validateOnBlur={false}
          // validateOnChange={false}
          initialValues={{
            voucherCode: checkoutForm?.voucher?.code,
          }}
          onSubmit={async (values) => {
            if (values.voucherCode) {
              const voucherCodeRes = await fetch('/api/checkout/voucher-code', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  voucherCode: values.voucherCode,
                }),
              })

              if (voucherCodeRes.status === 200) {
                const voucher = await voucherCodeRes.json() 
                setErrorMessage()             
                setCheckoutForm({...checkoutForm, voucher})
                setActivePanel(activePanel + 1)
                return
              }

              setErrorMessage('Please enter a valid voucher code')
                            
              return
            }

            setActivePanel(activePanel + 1)
          }}
        >
          {() => (
            <Form>
              <TextField label='Got a voucher code? Enter it here:' id='voucherCode' target='voucherCode' validationMessage={errorMessage} />
              <EditButton text='Continue' type='submit' />
            </Form>
          )}
        </Formik>
      )}
    </CheckoutPanel>
  )
}

export default VoucherCode
