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

      <div class="bottom">
        <ion-button @click="startGame()" expand="full" color="danger" >Start</ion-button>
      </div>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonButton, IonContent, IonIcon, IonImg, IonInput, IonPage, toastController } from '@ionic/vue';
  import { add, trash } from 'ionicons/icons';
  import { defineComponent } from 'vue';
  import { getPersons, getScore, setScore, setPersons } from "../data/Game";

  export default defineComponent({
    name: 'Home',
    data() {
      return {
        score: getScore(),
        isDisabled: true,
        persons: getPersons()
      }
    },
    setup() {
      return {
        add, trash
      }
    },
    methods: {

      addPlayer: function () {
        const container = this.$el.querySelector("#wrapper");
        container.scrollTop = container.scrollHeight;
        this.persons.push({id: this.persons.length+1, name: "", score: 301});
      },

      deletePlayer: function (id: number) {
        this.persons = this.persons.filter(person => person.id != id);
        this.persons.forEach((person, index) => {
          person.id = index;
        });
      },

      startGame: function () {

        if (this.persons.length == 0 || this.persons.find(person => person.name == "" || person.name == null) || this.score <= 0) {
          this.openToast();
          return;
        }

        setPersons(this.persons);
        setScore(this.score);
        this.$router.push('/game');
      },

      async openToast() {
        const toast = await toastController
                .create({
                  message: 'Fill all data',
                  duration: 2000,
                  position: 'top',
                  color: 'danger',
                });
        return toast.present();
      },
    },
    components: {
      IonContent,
      IonPage,
      IonInput,
      IonIcon,
      IonButton,
      IonImg
    },
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

  .bottom {
    position: fixed;
    width: 100%;
    bottom: 2px;
    left: 0;
  }

  #wrapper {
    max-height: 25vh;
    overflow: auto;
  }

</style>
