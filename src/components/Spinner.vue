<!-- https://epic-spinners.epicmax.co/?ref=madewithvuejs.com -->

<template>
  <div class="spring-spinner">
    <div class="spring-spinner-part top">
      <div class="spring-spinner-rotator"></div>
    </div>
    <div class="spring-spinner-part bottom">
      <div class="spring-spinner-rotator"></div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.spring-spinner, .spring-spinner * {
  box-sizing: border-box;
}

.spring-spinner {
  height: 20px;
  width: 20px;
}

.spring-spinner .spring-spinner-part {
  overflow: hidden;
  height: calc(20px / 2);
  width: 20px;
}

.spring-spinner  .spring-spinner-part.bottom {
   transform: rotate(180deg) scale(-1, 1);
 }

.spring-spinner .spring-spinner-rotator {
  width: 20px;
  height: 20px;
  border: calc(60px / 7) solid transparent;
  border-right-color: #285e61;
  border-top-color: #285e61;
  border-radius: 50%;
  box-sizing: border-box;
  animation: spring-spinner-animation 3s ease-in-out infinite;
  transform: rotate(-200deg);
}

@keyframes spring-spinner-animation {
  0% {
    border-width: calc(20px / 7);
  }
  25% {
    border-width: calc(20px / 23.33);
  }
  50% {
    transform: rotate(115deg);
    border-width: calc(20px / 7);
  }
  75% {
    border-width: calc(20px / 23.33);
  }
  100% {
    border-width: calc(20px / 7);
  }
}
</style>