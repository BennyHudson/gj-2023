import React, { ReactElement, FC, useContext, useState } from 'react'
import { Form, Formik } from 'formik'

import { ShippingAddressProps } from './ShippingAddress.types'
import CheckoutPanel from '../CheckoutPanel'
import PageContext, { PageContextProps } from '@context/PageContext'
import ShippingForm from '@components/ShippingForm'
import { shippingValidation } from '@components/ShippingForm/ShippingForm'
import TextField from '@components/TextField'
import EditButton from '@components/EditButton'

const ShippingAddress: FC<ShippingAddressProps> = ({
  panelIndex,
  activePanel,
  setActivePanel,
  checkoutForm,
  setCheckoutForm,
}: ShippingAddressProps): ReactElement => {
  const [errorMessage, setErrorMessage] = useState()
  const { customer, customerId, cart, setShippingRate, getCustomerData } = useContext(PageContext) as PageContextProps

  console.log(checkoutForm)

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
          {(props) => (
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

export default ShippingAddress
