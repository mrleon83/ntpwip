<template>

  <v-card class="overflow-hidden">
    
    <v-app-bar
      absolute
      height="400px"
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="http://cms.navigatetheplanet.co.uk/wp-content/uploads/2022/08/IMG_4080.jpg"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon  @click.stop="drawer = !drawer">
       
        
      </v-app-bar-nav-icon>

      <v-app-bar-title style="width: 400px;font-size: 2em;">Navigate The Planet</v-app-bar-title>

      <v-spacer></v-spacer>

      <template v-slot:extension>
        <v-tabs align-with-title>

          <v-tab>tabs</v-tab>

        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="900"
    >
      <v-container style="height: 1000px;"></v-container>
    </v-sheet>

   <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <!--<v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>-->

        <v-list-item-content>
          <v-list-item-title>Our Places</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in parentCats"
          :key="item.id"
          link
        >
          <v-list-item-content>
            <v-list-item-title @click="alertId(item.id)">{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </v-card>

  
</template>

<script>
// http://localhost:8888/ntp/wp-json/wp/v2/categories to get all categories
// http://localhost:8888/ntp/wp-json/wp/v2/categories?parent=0 get parent categories, specify parent id to get children
// http://localhost:8888/ntp/wp-json/wp/v2/posts?categories=2 get all post by category id
import axios from 'axios';
export default {
    data: () => ({
      parentCats: [],
      drawer: false,
      items: [
          { title: 'Home', icon: 'mdi-view-dashboard' },
          { title: 'About', icon: 'mdi-forum' },
        ],
        posts: [],
    }),
    //Use **mounted** if you want to print it on the screen.
      mounted() {
        this.getCats()
      },

      /*Use **methods** if you have @click function.
      methods(){
        click() {
          AXIOS CALL
        }
      }*/
      methods: {
        alertId(itemid) {
          alert(itemid)
          axios.get("https://cms.navigatetheplanet.co.uk/wp-json/wp/v2/posts?categories="+itemid ,{
            headers: {
            "Content-Type": "application/json",
            }
            })
            .then(response => {
                this.posts = response.data
                console.log(this.posts);
            })
              .catch(function (error) {
                console.log(error);
            });
        },
        getCats(){
          axios.get("https://cms.navigatetheplanet.co.uk/wp-json/wp/v2/categories?parent=0&per_page=100" ,{
            headers: {
            "Content-Type": "application/json",
            }
            })
            .then(response => {
                this.parentCats = response.data
                console.log(this.parentCats);
            })
              .catch(function (error) {
                console.log(error);
            });
        }
      }
  }

</script>

