<template>
  <Navbar />
  <div class="text-light rounded-20 bg-dark hero shadow">
    <div class="container">
      <div class="jumbotron rounded-0">
        <div class="row justify-content-center">
          <div class="col-md-8 col-12 text-light py-4 mt-4 text-center">
            <h3 class="slogan">Solusi Checkup Penyakit Kelamin</h3>
            <p class="text-slogan">
              Dapatkan Checkup secara gratis dengan menjawab beberapa pertanyaan
              tentang seputar Penyakit Kelamin
            </p>
            <router-link to="/checkup" class="btn primary-old mt-3 text-light">
              checkup sekarang ! <i class="fas fa-book"></i
            ></router-link>
            <router-link
              to="/about"
              class="btn btn-dark mt-3 border border-light ms-3"
            >
              about <i class="fas fa-user"></i
            ></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mb-4">
    <div class="row">
      <p class="text-start title mt-4">Daftar Penyakit Kelamin</p>
      <p class="text-muted text-start mb-4">
        Dan beberapa ini data penyakit kelamin
      </p>
      <load v-if="statusLoad == false" />
      <div
        class="col-md-4 col-12 mb-3"
        v-for="x in dataArtikel"
        :key="x.id_penyakit"
        v-else
      >
        <div class="card card-block" @click="parsingData([x.nama_penyakit,x.description])" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          <img
            class="py-3"
            src="../assets/bg.png"
            alt="medical"
          />
          <h5 class="card-title mt-3 mb-3"><strong>Penyakit {{ x.nama_penyakit }}</strong></h5>
          <p class="card-text">
            Informasi seputar penyakit <strong>{{ x.nama_penyakit }}</strong> dan Pencegahan,penangangan
          </p>
        </div>
      </div>
      <modal :idModal="data_modal" />
    </div>
  </div>
</template>
<script>
import axios from "../url/base_url";
import { onMounted, reactive, ref } from "vue";
import modal from "@/components/Modal.vue";
import load from "@/components/Loading.vue";
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Home",
  components: {
    Navbar,
    modal,
    load,
  },
  setup() {
    const data_modal = ref([]);
    const dataArtikel = ref([]);
    const statusLoad = ref(false);
    const parsingData = (datas) => {
      data_modal.value = datas;
    };
    const getData = async () => {
      await axios
        .get("artikel_penyakit")
        .then((r) => {
          dataArtikel.value = r.data;
          setTimeout(() => {
            statusLoad.value = true;
          }, 1000);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    const image = require("../assets/bg.png");
    onMounted(() => {
      getData();
    });
    return {
      image,
      dataArtikel,
      statusLoad,
      parsingData,
      data_modal,
    };
  },
};
</script>
<style scoped>
.hero {
  border-radius: 10px;
}
.jumbotron {
  padding-top: 90px;
  padding-bottom: 100px;
}
.slogan {
  font-weight: bold;
}
.text-slogan {
  font-size: 20px;
  font-weight: 400;
}

.image {
  border-radius: 10px;
}

.title {
  font-size: 20px;
  font-weight: 600;
}
img{
    height:90px;
    width:80px;
    margin-left: auto;
    margin-right: auto;
  }
  
  div [class^="col-"]{
    padding-left:5px;
    padding-right:5px;
  }
  .card{
    transition:0.5s;
    cursor:pointer;
  }
  .card-title{  
    font-size:15px;
    transition:1s;
    cursor:pointer;
  }
  .card-title i{  
    font-size:15px;
    transition:1s;
    cursor:pointer;
    color:#ffa710
  }
  .card-title i:hover{
    transform: scale(1.25) rotate(100deg); 
    color:#18d4ca;
    
  }
  .card:hover{
    transform: scale(1.05);
    box-shadow: 10px 10px 15px rgba(0,0,0,0.3);
  }
  .card-text{
    height:80px;  
  }
  
  .card::before, .card::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: scale3d(0, 0, 1);
    transition: transform .3s ease-out 0s;
    background: rgba(255, 255, 255, 0.1);
    content: '';
    pointer-events: none;
  }
  .card::before {
    transform-origin: left top;
  }
  .card::after {
    transform-origin: right bottom;
  }
  .card:hover::before, .card:hover::after, .card:focus::before, .card:focus::after {
    transform: scale3d(1, 1, 1);
  }
</style>
