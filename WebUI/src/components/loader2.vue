<template>
    <div class='loader'></div>
</template>
<style scoped>
*, *:before, *:after {
    box-sizing: border-box;
  }
  
  html {
    font-size: 18px;
  }
  
  body {
    font-family: "Roboto", sans-serif;
    font-size: 1em;
    line-height: 1.6;
    background: #F2F1EF;
  }
  
  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 10px;
    background: #253d5b;
    border-radius: 5px;
    -webkit-animation: load 1.8s ease-in-out infinite;
            animation: load 1.8s ease-in-out infinite;
  }
  .loader:before, .loader:after {
    position: absolute;
    display: block;
    content: "";
    -webkit-animation: load 1.8s ease-in-out infinite;
            animation: load 1.8s ease-in-out infinite;
    height: 10px;
    border-radius: 5px;
  }
  .loader:before {
    top: -20px;
    left: 10px;
    width: 40px;
    background: #c9a959;
  }
  .loader:after {
    bottom: -20px;
    width: 35px;
    background: #999999;
  }
  
  @-webkit-keyframes load {
    0% {
      transform: translateX(40px);
    }
    50% {
      transform: translateX(-30px);
    }
    100% {
      transform: translateX(40px);
    }
  }
  
  @keyframes load {
    0% {
      transform: translateX(40px);
    }
    50% {
      transform: translateX(-30px);
    }
    100% {
      transform: translateX(40px);
    }
  }
</style>