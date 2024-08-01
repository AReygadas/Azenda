<template>
    <div class="som2 imbg" style="bg-white">
        <div class="col1">
            <img src="@/assets/A21.png" alt="" class="img003">
        </div>
        <div class="col2">
            <h1 class="fnt1 fz">Somos</h1>
            <h1 class="fnt2 fz">AZENDA</h1>
            <br />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero inventore consectetur neque unde
                consequuntur tempora tenetur odit quisquam, est enim molestias voluptas facilis numquam deleniti ipsum,
                ad ipsam perferendis fuga.
            </p>
            <br />
            <button class="az-btn">Asesoria Juridica</button>
        </div>
    </div>

</template>

<style scoped deep>
@media(width < 650px) {
    .col1{
        width: 100vw !important;
    }
   .img003{
    width: 90vw !important;
    height: 80vw !important;
   } 
  .som2{
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
    justify-items: center !important;
    width: 100vw !important;
    padding: 5vw !important;

  }
  .col2{
    width: 100vw !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
    text-align:center !important;
    padding: 10vw !important;
  }
}
.fz {font-size: 2rem; margin-top: -1rem}
.imbg{
    background-image: url("@/assets/marcadeagua.png");
    background-size: cover;

}
.az-btn{
    color: rgb(255, 255, 255);
    padding: 0.5rem 1rem;
    border-radius: 5px;
    background-color: rgb(214, 171, 86);
}
.col2{
    width: 60vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    text-align:justify;
    padding-right: 20vw;
}
.col1{
    width: 50vw;
    display: flex;
    justify-content: end;
    padding: 2rem
}
.img003{
    height: 40vw;
}
.som2 {
    display: flex;
}

.varela-round-regular {
    font-family: "Varela Round", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 2rem;
}

.hh {
    font-family: "Varela Round", sans-serif;
    font-size: 0.8rem;
    font-weight: 600;
}

.tjs {
    padding: 2rem;
}

.img1 {
    width: 200px;

}

svg {
    width: 10wv;
}

.imgsvg {
    width: 10vw;
}
</style>