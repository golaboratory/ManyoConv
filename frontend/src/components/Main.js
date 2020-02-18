import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      loader: null,
      loading4: false,
      manyo: '',
      convList: []
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    }
  },
  computed: {
    enableButton () {
      return this.manyo === ''
    },
    existsList () {
      return this.convList.length !== 0
    }
  },
  methods: {
    convert () {
      const text = this.manyo
      this.manyo = ''
      axios.post('/convert', {
        manyo: text,
        kana: ''
      })
        .then((res) => {
          // console.log(res)
        })
    }
  }
}
