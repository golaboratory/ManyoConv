<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-toolbar-title>万葉仮名変換</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container>
        <v-row
          align="center"
        >
          <v-col class="text-center">
            <v-card
              class="mx-auto"
              outlined
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-subtitle>かなに変換したい万葉仮名を入力し、変換をタッチしてください</v-list-item-subtitle>
                  <v-text-field
                    v-model="manyo"
                    label="万葉仮名"
                    style="text-align:center"
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
                  v-on:click="convert"
                >
                  変換
                </v-btn>
                <v-spacer/>
              </v-card-actions>
            </v-card>

          </v-col>
        </v-row>
        <v-row
          align="center"
        >
          <v-col class="text-center"
            :xs="12"
            :sm="12"
            :md="6"
            :lg="4"
            :xl="3"
            v-for="item in convList"
            v-bind:key="item.manyo">
            <v-card
              class="mx-auto"
              outlined
            >
              <v-card-text>
                <p class="display-1 text--primary">
                  {{ item.manyo }}
                </p>
                <v-icon x-large>expand_more</v-icon>
                <p class="display-1 text--primary">
                  {{ item.kana }}
                </p>
              </v-card-text>

            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">GoLaboratory &copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script src="./Main.js"></script>
<style href="./Main.css" scoped />
