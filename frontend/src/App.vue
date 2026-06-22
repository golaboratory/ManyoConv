<template>
  <v-app id="inspire">
    <v-app-bar app color="indigo" dark>
      <v-toolbar-title>万葉仮名変換</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row align="center">
          <v-col class="text-center">
            <v-card class="mx-auto" outlined>
              <v-card-text>
                <div class="text-subtitle-1">かなに変換したい万葉仮名を入力し、変換をタッチしてください</div>
                <v-text-field
                  v-model="manyo"
                  label="万葉仮名"
                  style="text-align:center"
                  solo
                ></v-text-field>
              </v-card-text>

              <v-card-actions>
                <v-spacer/>
                <v-btn
                  size="large"
                  rounded
                  color="primary"
                  :disabled="enableButton"
                  @click="convert"
                >
                  変換
                </v-btn>
                <v-spacer/>
              </v-card-actions>
            </v-card>

          </v-col>
        </v-row>
        <v-row align="center">
          <v-col class="text-center"
            cols="12"
            sm="12"
            md="6"
            lg="4"
            xl="3"
            v-for="item in convList"
            :key="item.manyo">
            <v-card class="mx-auto" outlined>
              <v-card-text>
                <p class="text-h4 text--primary">
                  {{ item.manyo }}
                </p>
                <v-icon size="x-large">mdi-chevron-down</v-icon>
                <p class="text-h4 text--primary">
                  {{ item.kana }}
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer color="indigo" app>
      <span class="text-white">GoLaboratory &copy; 2024</span>
    </v-footer>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {
      manyo: '',
      convList: []
    }
  },
  computed: {
    enableButton () {
      return this.manyo === ''
    }
  },
  methods: {
    async convert () {
      const text = this.manyo
      this.manyo = ''
      try {
        const res = await axios.post('/convert', {
          manyo: text,
          kana: ''
        })
        this.convList.unshift(res.data)
      } catch (error) {
        console.error("Error converting:", error)
      }
    }
  }
}
</script>
