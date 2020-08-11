<template>
  <div class="introduction">
    <h1>Hi, I'm Hongxu &#128075;</h1>
    <div class="intro">
      <p> My name is Hongxu Li. I'm a computer science graduate
      from University of Winnipeg.</p>
      <p>  I'm passinoate about being a web developer.</p>
      <p> I always keep an open mind and eager to learn new techniques.</p>
    </div>
    <p class="contact">
      got any question? <a href="mailto:hongxu1205@gmail.com" style="color:#865f4f">Contact me</a>
    </p>
  </div>
</template>
<script>
export default {
  data () {
    return {
    };
  }
}
</script>
<style lang="scss" scoped>

a{
  color: #ffffff;
  &:hover{
    color: #ffffff;
    text-decoration: none;
  }
}

.introduction{
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  animation: text-fall 4s;

  & h1{
    text-align: center;
  }
  .intro{
    line-height: 2em;

    p{
      text-align: center;
    }
  }
  .contact{
    text-align: center;
  }

}

@keyframes text-fall {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  50% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
