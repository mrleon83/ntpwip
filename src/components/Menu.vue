<template>

  <v-card class="overflow-hidden">
    
    <v-app-bar
      absolute
      color="#ff6600"
      dark
      shrink-on-scroll
      prominent
      src="http://cms.navigatetheplanet.co.uk/wp-content/uploads/2022/08/IMG_4080.jpg"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
      scroll-threshold="500"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon  @click.stop="drawer = !drawer">
       
        
      </v-app-bar-nav-icon>

      <v-app-bar-title style="width: 400px;">Navigate The Planet</v-app-bar-title>

      <v-spacer></v-spacer>

        <template v-slot:extension>
              <v-tabs align-with-title v-for="places in childCats" :key="places.id">
                <v-tab @click="getPosts(places.id)">{{ places.name }}</v-tab>
              </v-tabs>  
        </template>
        
    </v-app-bar>

    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="900">
      <v-container style="height: 900px;">
          <div v-if="postsShowing">
            <Posts :posts="posts"/>
          </div>
          <div v-else>
            <Home/>
          </div>
          
      </v-container>
    </v-sheet>

   <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Our Places</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title @click="getLatestPosts()" style="cursor: pointer;">Latest Posts</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-for="item in parentCats"
          :key="item.id"
          link
        >
          <v-list-item-content>
            <v-list-item-title @click="getChildCats(item.id)">{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </v-card>
</template>

<script>
import axios from 'axios';
import Posts from '@/components/Posts.vue';
import Home from '@/components/Home.vue';
export default {
  components:{
    Posts,
    Home
  },
    data: () => ({
      parentCats: [],
      childCats:  [] ,
      drawer: false,
      posts: {},
      postsShowing: false,
      isHome: true
    }),
    

      mounted() {
        this.getCats()
        this.getLatestPosts()
      },

      methods: {
        getCats(){
          axios.get("https://cms.navigatetheplanet.co.uk/wp-json/wp/v2/categories?parent=0&per_page=100" ,{
            headers: {
            "Content-Type": "application/json",
            }
            })
            .then(response => {
                this.parentCats = response.data
            })
              .catch(function (error) {
                console.log(error);
            });
        },
        getChildCats(itemid){
          this.isHome = false
          this.getPosts(itemid)
          this.drawer = false
            axios.get("https://cms.navigatetheplanet.co.uk/wp-json/wp/v2/categories?parent="+itemid+"&per_page=100" ,{
            headers: {
            "Content-Type": "application/json",
            }
            })
            .then(response => {
                this.childCats = response.data
            })
              .catch(function (error) {
                console.log(error);
            });
        },

        getLatestPosts(){
          this.isHome = true
          this.postsShowing = true
          axios.get("https://cms.navigatetheplanet.co.uk/wp-json/getrecentposts/v1/getrecentposts" ,{
            headers: {
            "Content-Type": "application/json",
            }
            })
            .then(response => {
                this.posts = response.data
            })
              .catch(function (error) {
                console.log(error);
            });
        },
        getPosts(itemid) {
          this.isHome = false
          this.postsShowing = true
          axios.get("https://cms.navigatetheplanet.co.uk/wp-json/getposts/v1/posts?id="+itemid ,{
            headers: {
            "Content-Type": "application/json",
            }
            })
            .then(response => {
                this.posts = response.data
            })
              .catch(function (error) {
                console.log(error);
            });
        },
      }
  }

</script>

