<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-img class="logo" :src="'../assets/logoMain.png'"></ion-img>
      <form>
        <div class="row">
          <p>Score</p>
          <ion-input type="number" v-model="score"></ion-input>
        </div>
        <div class="tac">
          <ion-icon color="danger" :icon="add" @click="addPlayer()" ></ion-icon>
        </div>
        <div>
          <div id="wrapper">
            <div class="row"  v-for="person in persons" :key="person.id" >
              <ion-input v-model="person.name" placeholder="Player name"></ion-input>
              <ion-icon :icon="trash" @click="deletePlayer(person.id)"></ion-icon>
            </div>
          </div>
        </div>
      </form>
    </ion-content>
    <ion-footer>
      <ion-button @click="startGame()" expand="full" color="danger" >Start</ion-button>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
  import { IonIcon, IonImg, IonInput, toastController } from '@ionic/vue';
  import { add, trash } from 'ionicons/icons';
  import { defineComponent } from 'vue';
  import { store } from "@/store/store";
  import { Person } from "@/model/Person";
  import {mapActions, mapGetters} from 'vuex';

  export default defineComponent({
    name: 'Home',
    setup() {
      return {
        add, trash
      }
    },
    computed: {
      ...mapGetters({ persons: 'getPersons' }),
      score: {
        get () { return store.state.score },
        set (value) { this.changeGlobalScore(value) }
      }
    },
    methods: {
      ...mapActions(['addPlayer', 'deletePlayer', 'changeGlobalScore', 'changePlayerDefaultScore']),

      startGame: function () {
        if (this.persons.length == 0 || this.persons.find((person: Person) => person.name == "" || person.name == null) || this.score <= 0) {
          return this.openToast();
        }
        this.changePlayerDefaultScore();
        this.$router.push('/game');
      },

      async openToast() {
        const toast = await toastController.create({ message: 'Fill all data', duration: 2000, position: 'top', color: 'danger' });
        return toast.present();
      },
    },
    components: { IonInput, IonIcon, IonImg },
  });
</script>

<style scoped>
  .logo {
    width: 70%;
    margin: 0 auto;
  }

  .row {
    width: 80%;
    margin-left: 10%;
    margin-top: 10px;
    position: relative;
  }

  p {
    margin-bottom: 3px;
    font-size: 1.2em;
    font-weight: 700;
  }

  .tac {
    text-align: center;
  }

  ion-input {
    width: 100%;
    text-align: center;
    padding: 5px 10px;
    background: #eee;
    border-bottom: 1px solid #cac9c9;
    margin-bottom: 7px;
  }

  .tac ion-icon {
    font-size: 40px;
  }

  .row ion-icon {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  ion-icon {
    font-size: 20px;
    z-index: 10;
    color: #3c3c3c;
  }

  #wrapper {
    max-height: 25vh;
    overflow: auto;
  }

</style>
