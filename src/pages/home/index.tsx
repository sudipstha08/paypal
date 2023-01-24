import React, { useEffect } from 'react'
import { config } from '@utils'

const HomePage = () => {
  const [loaded, setLoaded] = React.useState(false)
  const paypalRef = React.useRef()

  const addPaypalScript = () => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `https://www.paypal.com/sdk/js?client-id=${config.paypal.clientID}`
    script.async = true
    script.addEventListener('load', () => setLoaded(true))
    document.body.appendChild(script)
  }

  useEffect(() => {
    console.log('fsdfdsf===>', window)
    if (!window.paypal) {
      addPaypalScript()
    } else {
      // flags that it is ready
      setLoaded(true)
    }
  }, [])

  useEffect(() => {
    if (loaded) {
      setTimeout(() => {
        window.paypal
          ?.Buttons({
            createOrder: function (data, actions) {
              // Set up the transaction
              return actions.order.create({
                
                purchase_units: [
                  {
                    amount: {
                      value: '10',
                    },
                  },
                ],
              })
            },
            onApprove: function (data, actions) {
              return actions.order.capture().then(function (details) {
                alert('Transaction completed by ', details.payer.given_name)
              })
            },
          })
          .render('#paypal')
      }, 1)
    }
  }, [loaded])

  return (
    <div>
      <div id="paypal" ref={paypalRef} />
    </div>
  )
}

export default HomePage
