<template>

  <div class="shadow-2XL">
    
    <h1 class="ml-2 m-4 lg:font-bold">{{data.name}}</h1>
    <v-img :src = "`${data.image}`" :lazy-src= "`${data.image}`" height = "200"  contain></v-img>
    <div>
    <v-card-text v-show="masterNumber()">
              <h3 class="lg:font-bold">Masters:</h3>
              {{data.masters}}
    </v-card-text>
    <v-card-text v-show="!masterNumber()">
              <h3 class="lg:font-bold">Masters:</h3>
              <ul>
                <li v-for="aff in data.masters" v-bind:key="aff.id">{{aff}}</li>
              </ul>
    </v-card-text>
    <v-card-text>
              <h3 class="lg:font-bold">Apprentices:</h3>
              <ul>
                <li v-for="aff in data.apprentices" v-bind:key="aff.id">{{aff}}</li>
              </ul>
    </v-card-text>
    <v-card-text>
              <h3 class="lg:font-bold">Born Location:</h3>
              {{data.bornLocation}} 
    </v-card-text>
    <v-card-text>
              <h3 class="lg:font-bold">Died Location</h3>
              {{data.diedLocation}}
    </v-card-text>
    <v-card-text>
              <h3 class="lg:font-bold">Species:</h3>
              {{data.species}} 
    </v-card-text>
    <v-card-text>
              <h3 class="lg:font-bold">Find out more on:</h3>
              <a :href="data.wiki" class="hover:font-bold">{{data.wiki}} </a>
    </v-card-text>
    </div>
  </div>
</template>

<script>

export default {
  props: ['data'],
  methods: {
    masterNumber(){
      if(this.data.masters){
        if(!Array.isArray(this.data.masters)){
          return true
        }
        else{
          return false
        }
      }
      else{
        return false
      }

    }
  }
}
</script>
