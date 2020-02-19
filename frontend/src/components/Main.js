import axios from 'axios'
import Vue from 'vue'

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
      Vue.set(this, 'manyo', '')
      axios.post('/convert', {
        manyo: text,
        kana: ''
      })
        .then((res) => {
          // alert(JSON.stringify(res.data))
          const list = this.convList
          list.unshift(res.data)
          Vue.set(this, 'convList', list)
        })
    }
  }
}
