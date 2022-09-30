<template>
  <div class="profile">
    <Navbar />
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-md-7">
          <div class="card p-3 py-4">
            <div class="text-center">
              <img
                src="../assets/profile.jpg"
                width="100"
                class="img"
              />
            </div>
            <div class="text-center mt-3">
              <h5 class="mt-2 mb-0">Adin Pakaya</h5>
              <span>531417037</span>

              <div class="px-4 mt-1">
                <p class="fonts">
                  Jurusan <strong>Teknik Informatika,Prodi Sistem Informasi,Universitas Negeri Gorontalo</strong>
                </p>
              </div>

              <ul class="social-list">
                <li><i class="fa-brands fa-facebook"></i></li>
                <li><i class="fa-brands fa-dribbble"></i></li>
                <li><i class="fa-brands fa-instagram"></i></li>
                <li><i class="fa-brands fa-linkedin"></i></li>
                <li><i class="fa-brands fa-google"></i></li>
              </ul>
              <div class="buttons">
                <a href="https://wa.me/6287841570452" class="btn btn-outline-primary px-4">Message</a>
                <a href="mailto:adinpakaya@gmail.com" class="btn btn-primary px-4 ms-3">Email</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  setup() {},
};
</script>
<style scoped>
    .container{
        margin-top: 100px;
    }
    
    .card{
        border:none;

        position:relative;
        overflow:hidden;
        border-radius:8px;
        cursor:pointer;
    }

    .card:before{
        
        content:"";
        position:absolute;
        left:0;
        top:0;
        width:4px;
        height:100%;
        background-color:#E1BEE7;
        transform:scaleY(1);
        transition:all 0.5s;
        transform-origin: bottom
    }

    .card:after{
        
        content:"";
        position:absolute;
        left:0;
        top:0;
        width:4px;
        height:100%;
        background-color:#7330f9;
        transform:scaleY(0);
        transition:all 0.5s;
        transform-origin: bottom
    }

    .card:hover::after{
        transform:scaleY(1);
    }


    .fonts{
        font-size:15px;
    }

    .social-list{
        display:flex;
        list-style:none;
        justify-content:center;
        padding:0;
    }

    .social-list li{
        padding:10px;
        color:#7330f9;
        font-size:19px;
    }


    .buttons button:nth-child(1){
        border:1px solid #7330f9 !important;
        color:#7330f9;
        height:40px;
    }

    .buttons button:nth-child(1):hover{
        border:1px solid #7330f9 !important;
        color:#fff;
        height:40px;
        background-color:#7330f9;
    }

    .buttons button:nth-child(2){
        border:1px solid #7330f9 !important;
        background-color:#7330f9;
        color:#fff;
            height:40px;
    }
    img{
       border-radius: 50px;
    }
</style>
