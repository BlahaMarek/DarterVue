<template>
  <ion-page>
    <ion-content>

      <div class="tac">
        <ion-img class="logo" :src="'../assets/winner.png'"></ion-img>
        <h1>Winner: <b>{{name}}</b></h1>
      </div>

      <div class="bottom">
        <ion-button  expand="full" color="danger" @click="again()">Again</ion-button>
        <ion-button  expand="full" color="danger" @click="newGame()">New game</ion-button>
      </div>

    </ion-content>
  </ion-page>
</template>

<script>
  import { IonContent, IonButton, IonImg, IonPage } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import {  getScore, setScore } from "../data/Game";

  export default defineComponent({
    name: 'Winner',
    created () {
      this.fetchData()
    },
    watch: {
      '$route': 'fetchData'
    },
    data() {
      return {
        name: ""
      }
    },
    methods: {

      fetchData: function() {
        this.name = this.$route.params.winner;
      },

      again: function () {
        setScore(getScore());
        this.$router.push('/game');
      },

      newGame: function () {
        this.$router.push('/home');
      }

    },
    components: { IonContent, IonButton, IonImg, IonPage }
  });

</script>

<style scoped>
  .bottom {
    position: fixed;
    width: 100%;
    bottom: 2px;
    left: 0;
  }

  img {
    width: 80%;
    margin: 10px auto;
    margin-top: 40px;
  }

  .tac {
    text-align: center;
  }
</style>
