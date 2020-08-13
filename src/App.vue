<template>
  <div id="app" class="bg-gray-200 min-h-screen antialiased text-gray-800">
    <div class="container mx-auto lg:px-64 py-8">
      <div class="bg-white shadow-md rounded p-8">
        <div class="flex justify-between items-center">
          <div>
            <h2 class="text-2xl font-semibold">Bowling-point algoritme</h2>
            <p>Simon Konstantyner</p>
            <p v-if="results.length !== 0" class="text-gray-500">Displaying {{ results.length }} results</p>
          </div>
          <div class="flex flex-col">
            <button
              class="bg-blue-500 text-white font-bold py-2 px-4 rounded"
              @click="getPoints"
            >
              Load Data from API
            </button>
            <small>Click the button to get more data</small>
          </div>
        </div>

        <transition v-if="loading" name="fade">
          <div class="bg-teal-300 text-teal-800 text-center rounded p-4 mt-6">
            <Spinner class="mx-auto" />
            <p>Fetching data</p>
          </div>
        </transition>

        <transition-group name="fade" tag="div" class="results">
          <div
            v-for="result in results" :key="result.token"
            class="rounded p-4 mt-6"
            :class="[result.status ? 'bg-green-500 text-green-100' : 'bg-red-500 text-red-100']"
          >
            <strong class="font-bold" v-text="result.status ? 'Success' : 'Error'"></strong>
            <ul class="list-disc list-inside mb-3">
              <li>Points: {{ result.points }}</li>
              <li>Token: {{ result.token }}</li>
              <li class="mt-3">Calculated Game Scores: {{ result.scores }}</li>
            </ul>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import Game from '@/Game'

import Spinner from '@/components/Spinner'

export default {
  name: 'App',
  components: {Spinner},
  data() {
    return {
      loading: false,
      results: [],
      result: {}
    }
  },
  methods: {
    async getPoints() {
      this.loading = true
      await this.$http.get('http://13.74.31.101/api/points')
        .then((response) => {
          this.result.points = response.data.points
          this.result.token  = response.data.token
          this.result.scores = new Game(this.result.points).getScore()

          this.$http.post('http://13.74.31.101/api/points', {
            token:  this.result.token,
            points: this.result.scores
          })
          .then((response) => {
            this.result.status = response.data.success

            this.loading = false

            this.results.unshift(this.result)

            this.result = {}
          })
        })
    }
  }
}
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
