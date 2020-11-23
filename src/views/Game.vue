<template>
  <ion-page>
    <ion-content>
      <ion-icon class="close" @click="closeApp()" name="close-circle"></ion-icon>
      <section class="score">
        <h1><b>{{persons[index].name}}</b></h1>
        <h2>Score: <b>{{persons[index].score}}</b></h2>
      </section>
      <section class="points">
        <div class="row">
          <ion-button color="primary" @click="subtractPlayerScore(1)">1</ion-button>
          <ion-button color="primary" @click="subtractPlayerScore(2)" >2</ion-button>
        </div>
        <div class="row">
          <ion-button color="primary" @click="subtractPlayerScore(5)" >5</ion-button>
          <ion-button color="primary" @click="subtractPlayerScore(10)" >10</ion-button>
        </div>
        <div class="row">
          <ion-button class="pro" color="primary" @click="subtractPlayerScore(20)" >20</ion-button>
        </div>
      </section>
    </ion-content>
    <ion-footer>
      <button class="next" @click="nextPlayer()">Next player</button>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import { IonIcon, toastController} from '@ionic/vue';
import { defineComponent } from 'vue';
import {mapActions, mapGetters} from "vuex";

export default defineComponent({
  name: 'Game',
  computed: {
    ...mapGetters({
      persons: 'getPersons',
      index: 'getIndex',
    }),
  },
  methods: {
    ...mapActions(['subtractScore', 'changeActivePlayer']),

    subtractPlayerScore: function (num: number) {
      if (this.persons[this.index].score - num < 0) {
        this.openToast();
      } else if (this.persons[this.index].score - num == 0) {
        this.$router.push(`/winner/${this.persons[this.index].name}`)
      } else {
        this.subtractScore(num);
      }
    },

    nextPlayer: function () {
      this.changeActivePlayer();
    },

    closeApp: function () {
      this.$router.push('/home')
    },

    async openToast() {
      const toast = await toastController.create({ message: 'U facked it :(', duration: 2000, position: 'top', color: 'danger' });
      return toast.present();
    }
  },
  components: { IonIcon },
});
</script>

<style scoped>
  .score {
    text-align: center;
  }

  .next {
    width: 100%;
    padding: 15px;
    margin: 0 auto;
  }
  .row ion-button {
    width: 45%;
    margin: 2.5%
  }
  .row .pro {
    width: 95%;
    margin: 2.5%
  }

  .close {
    position: fixed;
    top: 20px;
    right: 10px;
    font-size: 2em;
  }
</style>
