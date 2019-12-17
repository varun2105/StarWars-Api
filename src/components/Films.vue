<template>

<div class="bg-gray-100">
  
      <v-card class="mx-auto" width="800" height="800" hover>
       
        <v-card-title>{{results.title}}</v-card-title>

        <div class="card-section">
          <p>Director: {{results.director}}</p>
          <p>Release date: {{results.release_date}}, Producer: {{results.producer}}</p>

          <p class="m-10">{{results.opening_crawl}}</p>
        </div>
      </v-card>
      <br />
    
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
  name: 'Films',
  components:{
    
  },
  data() {
    return {
      results: [],
      pagination: {
        page: 1,
        total: 0,
        perPage: 1,
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
        .get(`https://swapi.co/api/films/${this.pagination.page}`)
        .then(res => {
          this.results = res.data;
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
      .get(`https://swapi.co/api/films/`)
      .then(res => {
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

     axios
      .get(`https://swapi.co/api/films/${this.pagination.page}`)
      .then(res => {
        this.results = res.data
        //this.pagination.total = res.data.count/this.pagination.perPage
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