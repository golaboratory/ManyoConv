<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center">
            <v-card
              class="mx-auto"
              outlined
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">万葉仮名変換</v-list-item-title>
                  <v-list-item-subtitle>かなに変換したい万葉仮名を入力し、変換をタッチしてください</v-list-item-subtitle>
                  <v-text-field
                    v-model="manyo"
                    label="万葉仮名"
                    solo
                  ></v-text-field>
                </v-list-item-content>

              </v-list-item>

              <v-card-actions>
                <v-spacer/>
                <v-btn
                  large
                  rounded
                  color="primary"
                  :disabled="enableButton"
                >
                  変換
                </v-btn>
                <v-spacer/>
              </v-card-actions>
            </v-card>
            <template v-if="existsList">
              <ul v-for="item in convList" v-bind:key="item.manyo">
                <li>
                  {{ item.manyo }}
                </li>
                <li>
                  {{ item.kana }}
                </li>
              </ul>
            </template>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script src="./Main.js"></script>
<style href="./Main.css" scoped />
