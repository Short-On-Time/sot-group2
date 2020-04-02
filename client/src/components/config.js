export default {
  server_port: process.env.PORT || 3001,
  stripe: {
    live: {
      secret: '',
      publishable: ''
    },
    test: {
      secret: '',
      publishable: 'pk_test_cKZ9ArATTFDXKwpXTE7SrSB800xveSplrK'
    }
  }
}
