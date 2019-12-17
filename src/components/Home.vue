<template>

   <div>
       
  <modals-container />
    <div class="columns medium-3" v-for="result in results1" v-bind:key="result.id">
      <v-card class="mx-auto" max-width="400" hover>
        <v-img :src="`${result.image}`" :lazy-src="`${result.image}`" height="200" contain></v-img>
        <v-card-title>{{result.name}}</v-card-title>

        <div class="card-section">
          <p>Homeworld: {{result.homeworld}}</p>
          <p>Mass: {{result.mass}}, Height: {{result.height}} m.</p>
        </div>
       
        <v-card-actions class="text-center">
            <v-btn
              class="ma-2 rounded text-white" outlined 
              text
              @click="showDynamicComponentModal(result.id)">Details</v-btn>
            <v-spacer></v-spacer>
            <v-btn
              icon
              @click="showCardExt[result.id - 1].visible = !showCardExt[result.id - 1].visible"
            >
              <font-awesome-icon v-if="showCardExt[result.id - 1].visible" icon="chevron-up" />
              <font-awesome-icon v-if="!showCardExt[result.id - 1].visible" icon="chevron-down" />
            </v-btn>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="showCardExt[result.id - 1].visible">
            <v-divider></v-divider>

            <v-card-text>
              <h3 class="lg:font-bold">Affliations:</h3>
              <ul>
                <li v-for="(aff, index) in result.affiliations" v-bind:key="`aff-${index}`">{{aff}}</li>
              </ul>
            </v-card-text>
          </div>
        </v-expand-transition>
        
      </v-card>
      <br />
    </div>
    <v-pagination
      v-model="pagination.page"
      :length="pagination.total"
      :next-icon="nextIcon"
      :prev-icon="prevIcon"
      circle
      dark
      @input="next"
    ></v-pagination>
    <modal name="detailsChar" @before-open="beforeOpen">{{beforeOpen.name}}</modal>
   </div>

</template>


<script src="https://unpkg.com/vue"></script>

<script>
import axios from "axios";
import Vue from "vue";
import Vuetify from "vuetify";
import customModal from "./customModal";
var vm = new Vue();

export default {
  name: "Home",
  components: {
    customModal
  },
  data() {
    return {
      results: [],
      pageNumber: 1,
      prevVal: true,
      nextVal: false,
      photos: [],
      pagination: {
        page: 1,
        total: 0,
        perPage: 8,
        visible: 10
      },
      results1: [],
      nextIcon: "navigate_next",
      prevIcon: "navigate_before",
      upIcon: "mdi-chevron-up",
      downIcon: "mdi-chevron-down",
      modal: false,
      detailData: [],
      showCardExt: [
        {
          visible: false
        }
      ]
    };
  },
  methods: {
    next() {
      this.results1 = [];
      this.pagination.page = this.pagination.page + 1;
      this.results1 = this.results.filter(
        results =>
          results.id > (this.pagination.page - 1) * this.pagination.perPage &&
          results.id <= this.pagination.page * this.pagination.perPage
      );
      axios
        .get(`https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json`)
        .then(res => {
          this.results = res.data;
          this.pagination.total = Math.ceil(
            this.results.length / this.pagination.perPage
          );
          this.results1 = this.results.filter(
            results =>
              results.id >
                (this.pagination.page - 1) * this.pagination.perPage &&
              results.id <= this.pagination.page * this.pagination.perPage
          );
          console.log(this.results1);
        })
        .catch(err => console.log(err));
    },
    showDetails(key) {
      if (this.modal == false) {
        this.modal = true;
        this.detailData = this.results.filter(results => results.id == key);
        console.log(this.detailData);
        this.show(this.detailData[0]);
      } else {
        this.modal = false;
        this.hide();
      }
    },
    show() {
      this.$modal.show({
        template: `
          <div class="example-modal-content">
            <button class="btn">Close this using name</button>
            <button class="btn">Close this using events</button>
          </div>
        `
      });
    },
    hide() {
      this.$modal.hide("detailsChar");
    },
    beforeOpen(event) {
      console.log("Run");
      console.log(event.params.data);
    },
    showDynamicComponentModal(key) {
      this.detailData = this.results.filter(results => results.id == key);
      this.$modal.show(customModal, {
        data: this.detailData[0]
      },{
        height: 'auto'
      },
      {
        width: 'auto'
      });
    }
  },
  created() {
    axios
      .get(`https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json`)
      .then(res => {
        this.results = res.data;
        for (var i = 0; i < this.results.length; i++) {
          this.showCardExt.push({ visible: false });
        }
        this.pagination.total =
          Math.ceil(this.results.length / this.pagination.perPage) - 1;
        this.results1 = this.results.filter(
          results =>
            results.id > this.pagination.page - 1 * this.pagination.perPage &&
            results.id <= this.pagination.page * this.pagination.perPage
        );

        console.log(this.results1);
      })
      .catch(err => console.log(err));
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

button {
  width: 100px;
  height: 40px;
  background-color: #eef;
}

img {
  width: 200px;
  height: 200px;
}

.bg-smoke {
  background-color: rgba(0, 0, 0, 0.8);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
