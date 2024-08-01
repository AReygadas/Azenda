<script setup>
  import {defineProps} from 'vue'

  const props = defineProps (
    {
      module:{
        type:String
      },
      route:{
        type:String
      },
      image:{
        type:String
      },
      subtitle:{
        type:String
      }
    }
  )
  function getImageUrl() {
  // This path must be correct for your file
    return new URL(`../../assets/${props.image}`, import.meta.url)
  }
</script>

<template>
  <RouterLink :to="props.route" class="🏴">
    <div class="card">
      <div class="content">
        <div class="img"><img :src="getImageUrl()"></div>
        <div class="cardContent">
          <h3>{{props.module}}<br><span>{{props.subtitle}}</span></h3>
        </div>
      </div>
      <ul class="sci">
        <li style="--i:1">
          <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
        </li>
        <li style="--i:2">
          <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
        </li>
        <li style="--i:3">
          <a href="#"><i class="fa fa-github" aria-hidden="true"></i></a>
        </li>
      </ul>
    </div>
  </RouterLink>
</template>

<style scoped>
@keyframes colorful {
  0% {
    filter: hue-rotate(0deg);
  }

  100% {
    filter: hue-rotate(360deg);
  }
}

.card {
  position: relative;
  width: 250px;
  height: 300px;
  background: #263e5c;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  backdrop-filter: blur(40px);
  border: solid 2px transparent;
  background-clip: padding-box;
  box-shadow: 0px 10px 10px rgba(46, 54, 68, 0.3);
}

 .card .content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0.5;
  transition: 0.5s;
}

.card .content .img {
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 10px solid rgba(6, 97, 183, 0.888);
}

.card .content .img img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card .content .cardContent h3 {
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  margin: 20px 0 10px;
  line-height: 1.1em;
}

.card .content .cardContent h3 span {
  font-size: 12px;
  font-weight: 300;
  text-transform: initial;
}

.card .sci {
  position: absolute;
  bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.card .sci li {
  margin: 0 10px;
  transform: translateY(40px);
  opacity: 0;
  transition: 0.5s;
  transition-delay: calc(0.1s * var(--i));
}

.card .sci li a {
  font-size: 24px;
}

.card:hover .content {
  opacity: 1;
  transform: translateY(-20px);
}

.card:hover .sci li {
  transform: translateY(0px);
  opacity: 1;
}
.🏴 {
  text-decoration: none;  
  
}
</style>