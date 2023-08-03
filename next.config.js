/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const inProd = process.env.NODE_ENV === 'production'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')

export default withPWA({
  // next.js config
  pwa: {
    dest: 'public',
    disable: !inProd
  }
})
