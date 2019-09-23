<template>
    <section>
        <img v-lazy="require('../assets/logo.png')" alt="" class="logo">
        <ul class="menu">
          <li v-for="(item,index) in menus">
            <input type="radio" name="menu" :id="index" :checked="index===selectMenu?true:false">
            <label :for="index">
              <a  @click="selectMenuFn(index)">{{item.val}}</a>
            </label>
          </li>
        </ul>
        <div v-show="selectMenu===0?true:false" class="downloadWhitePaper">
          <ul>
            <li>
              <img src="../assets/nation1.png" alt=""><span>English</span>
            </li>  
            <li>
              <img src="../assets/nation2.png" alt=""><span>中文</span>
            </li>  
            <li>
              <img src="../assets/nation3.png" alt=""><span>한국어</span>
            </li>  
            <li>
              <img src="../assets/nation4.png" alt=""><span>русский язык</span>
            </li>  
          </ul> 
        </div>
        <div v-show="selectMenu===1?true:false" class="downloadApp">
          <ul>
            <li>
              <img src="../assets/nation1.png" alt=""><span>English</span>
            </li>  
            <li>
              <img src="../assets/nation2.png" alt=""><span>中文</span>
            </li>  
          </ul> 
        </div>
        <div class="languase">
            <a class="languageBtn" v-on:click="languageShow=!languageShow">
              <em>{{language}}</em>
              <img src="../assets/downArrow.png"  alt="" srcset="">
            </a>
            <ul v-show="languageShow">
                <li @click="switchLanguage(index)" v-for="(item,index) in languangeArr" v-bind:key="item.lan">
                  <img :src="item.img" alt=""><span>{{item.lan}}</span>
                </li>
            </ul>
          <!-- <input type="radio" name="lan" id="English" checked>
          <label for="English" @click="switchLanguage(0)" >English</label>
          <em></em>
          <input type="radio" name="lan" id="chinese">
          <label for="chinese"  @click="switchLanguage(1)" >中文</label> -->
        </div>
    </section>
</template>
<script>
import nation1 from "../assets/nation1.png"
import nation2 from "../assets/nation2.png"
import nation3 from "../assets/nation3.png"
import nation4 from "../assets/nation4.png"
export default {
  name: 'Home',
  data(){
    return{
      toTarget:[
        "javascript:;",
        "",
        "",
        "",
        "",
      ],
      selectLan:0,
      selectMenu:-1,
      language:"English",
      selection: '',
      languageShow:false,
      languangeArr:[
      {
        img:nation1,
        lan:"English"
      },
      {
        img:nation2,
        lan:"中文"
      },
      {
        img:nation3,
        lan:"한국어"
      },
      {
        img:nation4,
        lan:"русский язык"
      }
    ]
    }
  },
  mounted() {
  },
  computed:{
    menus(){
     return[
        {
         val:this.$store.state.i18n.menuWhitePaper,
         toTarget:"#whitePaper", 
        },
        {
          val:this.$store.state.i18n.menuCommunity,
          toTarget:"",
        },
        {
         val:this.$store.state.i18n.menuProduct,
         toTarget:"#aboutUs", 
        },
        ]
    },
    selectPlaceholder(){
        return this.$store.state.i18n.selectPlaceholder
    },
  },
  methods:{
    //切换语言
    switchLanguage(i){
      this.language=this.languangeArr[i].lan;
      switch (Number(i)) {
        case 0:
          this.$i18n.locale='en'
          this.storeChange()
        break;
        case 1:
          this.$i18n.locale='cn'
          this.storeChange()
          break;
            case 2:
          this.$i18n.locale='kr'
          this.storeChange()
          break;
            case 3:
          this.$i18n.locale='ja'
          this.storeChange()
          break;           
        default:
          this.$i18n.locale='cn'
          this.storeChange()
          break;
      }
    },
    storeChange(){
      this.$store.commit('increment', {
            menuWhitePaper: this.$t('message.menuWhitePaper'),
            menuCommunity:this.$t('message.menuCommunity'),
            menuProduct:this.$t('message.menuProduct'),
            menuWhitePaper: this.$t('message.menuWhitePaper'),
            selectPlaceholder:this.$t('message.selectPlaceholder'),
            introduction:this.$t('message.introduction'),
            networkImg:this.$t('message.networkImg'),
            networkWidth:this.$t('message.networkWidth'),
            noticeWidth:this.$t('message.noticeWidth'),
            notice:this.$t('message.notice'),
            noticeTitle:this.$t('message.noticeTitle'),
            noticeConect:this.$t('message.noticeConect')
          })
    }
  },
  watch:{
   
  }
}
</script>

<style lang="less" scoped>
        section{
          position: relative;
          display: flex;
          align-items: center;
          height: 100px;
          text-align: center;
        }
        .logo{
          width: 246px;
          height: 41px;
          margin-right: 80px;
        }
        .menu{
          display: flex;
          width: 500px;
          li{
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            height: 54px;
            color: white;
            font-size: 16px;
            flex: 1;
            label{
              cursor: pointer;
              display: block;
              a{
                text-decoration:none;
                color: white;
              }
            }
              input:checked+label{
                a{
                   color: #1bdeb8;
                }
                span{
                  display: block;
                }
              }
          }
        }
        input{
            display: none;
        }
        .downloadWhitePaper{
          position: absolute;
          left: 324px;
          top: 88px;
          width: 189px;
          height: 207px;
          background: url("../assets/blackBox.png") 0 0 no-repeat / 100% 100%;
          ul{
            padding:10px 0 0 24px;
            color: white;
            li{
              margin-top: 20px;
              text-align: left;
              height: 24px;
              line-height: 24px;
              img{
                width: 24px;
                height: 24px;
                margin-right: 16px;
                font-size: 16px;
                vertical-align: middle;
              }
            }
          }
        }
        .downloadApp{
          position: absolute;
          left: 324px;
          top: 88px;
          width: 189px;
          height: 207px;
          background: url("../assets/blackBox.png") 0 0 no-repeat / 100% 100%;
          ul{
            padding:10px 0 0 24px;
            color: white;
            li{
              margin-top: 20px;
              text-align: left;
              height: 24px;
              line-height: 24px;
              img{
                width: 24px;
                height: 24px;
                margin-right: 16px;
                font-size: 16px;
                vertical-align: middle;
              }
            }
          }
        }
        .languase{
          cursor: pointer;
          .languageBtn{
            line-height: 54px;
            height: 54px;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 28px;
            margin: auto;
            em{
              margin-right: 10px;
              color: white;
              vertical-align: middle;
            }
            img{
              width: 16px;
              height: 16px;
              vertical-align: middle;
            }
          }
          ul{
            z-index: 100;
              box-sizing: border-box;
              padding: 30px 0 0 20px;
              position: absolute;
              top: 88px;
              right: 0;
              width: 187px;
              height: 204px;
              background: url("../assets/languange.png") 0 0 no-repeat/ 100% 100%;
              color: white;
              li{
                cursor: pointer;
                text-align: left;
                margin-bottom: 20px;
                img{
                  margin-right: 16px;
                  width: 20px;
                  height: 21px;
                  vertical-align: middle;
                }
              }
            }
        }
</style>

