<template>
  <ion-page>
    <ion-content>

      <div class="tac">
        <ion-img class="logo" :src="'../assets/winner.png'"></ion-img>
        <h1>Winner: <b>{{name}}</b></h1>
      </div>

    </ion-content>

    <ion-footer>
      <ion-button  expand="full" color="danger" @click="again()">Again</ion-button>
      <ion-button  expand="full" color="danger" @click="newGame()">New game</ion-button>
    </ion-footer>

  </ion-page>
</template>

<script>
  import { IonContent, IonFooter, IonButton, IonImg, IonPage } from '@ionic/vue';
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
    components: { IonContent, IonFooter, IonButton, IonImg, IonPage }
  });

</script>

<style scoped>
  img {
    width: 80%;
    margin: 10px auto;
    margin-top: 40px;
  }

  .tac {
    text-align: center;
  }
</style>
