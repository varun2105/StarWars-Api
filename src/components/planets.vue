<template>

<div>
  <div class="columns medium-3" v-for="(result, index) in results" v-bind:key="index">
      <v-card class="mx-auto" width="400" hover>
       
        <v-card-title>{{result.name}}</v-card-title>

        <div class="card-section">
          <p>Climate: {{result.climate}}</p>
          <p>Gravity: {{result.gravity}}</p>
          <p>Population: {{result.population}}</p>
        </div>
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
</div>
</template>

<script>

import axios from "axios";

export default {
  name: 'Planets',
  components:{
    
  },
  data() {
    return {
      results: [],
      pagination: {
        page: 1,
        total: 0,
        perPage: 10,
        visible: 10
      },
      results1: [],
      nextIcon: "navigate_next",
      prevIcon: "navigate_before"
    }
  },
  methods: {
    next() {
      this.results1 = [];
      this.pagination.page = this.pagination.page + 1;
      // this.results = this.results.filter(
      //   results =>
      //     results.id > (this.pagination.page - 1) * this.pagination.perPage &&
      //     results.id <= this.pagination.page * this.pagination.perPage
      // );
      axios
        .get(`https://swapi.co/api/planets/?page=${this.pagination.page}`)
        .then(res => {
          this.results = res.data.results;
          // this.pagination.total = Math.ceil(
          //   this.results.length / this.pagination.perPage
          // );
          // this.results1 = this.results.filter(
          //   results =>
          //     results.id >
          //       (this.pagination.page - 1) * this.pagination.perPage &&
          //     results.id <= this.pagination.page * this.pagination.perPage
          // );
         
        })
        .catch();
    }
  },
created() {
    axios
      .get(`https://swapi.co/api/planets/`)
      .then(res => {
        this.results = res.data.results;
        this.pagination.total = res.data.count/this.pagination.perPage
        // for (var i = 0; i < this.results.length; i++) {
        //   this.showCardExt.push({ visible: false });
        // }
        // this.pagination.total =
        //   Math.ceil(this.results.length / this.pagination.perPage) - 1;
        // this.results1 = this.results.filter(
        //   results =>
        //     results.id > this.pagination.page - 1 * this.pagination.perPage &&
        //     results.id <= this.pagination.page * this.pagination.perPage
        // );

      })
      .catch();
  }
}
</script>