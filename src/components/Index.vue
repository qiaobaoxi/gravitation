<template>
  <div id="home">
    <div class="wrap">
      <Menu></Menu>
      <section class="container">
        <div class="left">
            <article>
              {{introduction}}
            </article>
            <div class="line">
            </div>
            <div class="network">
              <div class="title">
                <img :src="networkImg" alt="" srcset="" :style="`width:${networkWidth}px`">
              </div>
              <ul>
                <li>
                  <img src="../assets/icon1.png" alt="" srcset=""> 
                </li>
                <li>
                  <img src="../assets/icon2.png" alt="" srcset=""> 
                </li>
                <li>
                  <img src="../assets/icon3.png" alt="" srcset=""> 
                </li>
                <li>
                  <img src="../assets/icon4.png" alt="" srcset=""> 
                </li>
                <li>
                  <img src="../assets/icon5.png" alt="" srcset=""> 
                </li>
                <li>
                  <img src="../assets/icon6.png" alt="" srcset=""> 
                </li>
              </ul>
            </div>
        </div>
        <div class="right">
            <div class="wrapNotice">
              <div class="notice" @click="noticeList" ref="notice">
                <img :src="notice" alt="" sizes="" srcset="" :style="`width:${noticeWidth}px`">
              </div>
              <ul class="">
                <li>
                  <h5>
                    {{noticeTitle}}
                  </h5>
                  <p>
                    {{noticeConect}}
                  </p>
                </li>
              </ul>
            </div>
        </div>
      </section>
    </div>
    <Vfooter></Vfooter>
  </div>
</template>

<script>
import Menu from './Menu.vue'
// import MainBody from './MainBody.vue'
import Vfooter from './Vfooter.vue'
export default {
  name: 'app',
  data(){
    return{
      // show1:false,
      // show2:false,
    }
  },
  mounted() {
    //输入框
    // window.addEventListener('scroll', this.show, true);
  },
  computed:{
    introduction(){
       return this.$store.state.i18n.introduction
    },
    networkImg(){
       return this.$store.state.i18n.networkImg
    },
    notice(){
       return this.$store.state.i18n.notice
    },
    noticeTitle(){
       return this.$store.state.i18n.noticeTitle
    },
    networkWidth(){
       return this.$store.state.i18n.networkWidth
    },
    noticeWidth(){
       return this.$store.state.i18n.noticeWidth
    },
    noticeConect(){
       return this.$store.state.i18n.noticeConect
    }
  },
  methods:{
   noticeList(){

   }
  },
  components: {
    Menu,
    // MainBody,
    Vfooter
  }
}
</script>
<style>
html{
  min-width: 1200px;
  background: url(../assets/bg.png) 0 0 no-repeat;
  background-size: cover;
}
</style>
<style lang="less" scoped>
  .wrap{
    position: relative;
    width: 1200px;
    margin: 0 auto;
  }
 .container{
    position: relative;
    height: 917px;
    display: flex;
    .left,.right{
      flex: 1;
    }
    .left{
      article{
        padding-top: 100px;
        color: white;
        width: 464px;
        line-height: 28px;
        font-size: 18px;
      }
      .line{
        margin-top: 20px;
        width: 44px;
        height: 2px;
        background-color: #44D7B6;
      }
      .network{
        position: absolute;
        bottom: 67px;
        .title{
          img{
            width: 337px;
          }
        }
        ul{
          margin-top: 30px;
          display: flex;
          width: 400px;
          li{
            flex: 1;
            img{
              width: 50px;
              height: 50px;
            }
          }
        }
      }
    }
    .right{
      position: relative;
      .wrapNotice{
        position: absolute;
        right: 0;
        bottom: 67px;
        box-sizing: border-box;
        padding: 33px 37px;
        background-color: rgba(0, 0, 0, 0.3);
        color:white;
        border-radius: 8px;
      }
      .notice{
        transition: 1s;
        img{
          width: 90px;
        }
      }
      ul{
        li{
          h5{
            padding:24px 0 16px 0; 
            font-size: 20px;
          }
          P{
            font-size: 16px;
            line-height: 22px;
          }
        }
      }
    }
 }
</style>
