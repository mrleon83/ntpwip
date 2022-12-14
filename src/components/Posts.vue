<template>
    <v-container fluid style="margin-top: 240px" width="100%">
        <div v-for="post in posts" :key="post.id">
        <v-lazy
        v-model="isActive"
        :options="{ threshold: .5  }"
        min-height="200"
        transition="fade-transition" >
                <div style="border: 1px solid black; margin-bottom: 30px; margin-top: 30px; padding: 20px;">
                <v-carousel v-if="post.imageone" id="ntpcarousel" :show-arrows="false">
                  <v-carousel-item v-if="post.imageone"
                    :key="post.id"
                    :src="post.imageone"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                    @click="fullscreen(post.id)"
                  ></v-carousel-item>
                  <v-carousel-item v-if="post.imagetwo"
                    :key="post.id"
                    :src="post.imagetwo"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                    @click="fullscreen(post.id)"
                  ></v-carousel-item>
                  <v-carousel-item v-if="post.imagethree"
                    :key="post.id"
                    :src="post.imagethree"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                    @click="fullscreen(post.id)"
                  ></v-carousel-item>
                  <v-carousel-item v-if="post.imagefour"
                    :key="post.id"
                    :src="post.imagefour"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                    @click="fullscreen(post.id)"
                  ></v-carousel-item>
                  <v-carousel-item v-if="post.imagefive"
                    :key="post.id"
                    :src="post.imagefive"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                    @click="fullscreen(post.id)"
                  ></v-carousel-item>
                  <v-carousel-item v-if="post.imagesix"
                    :key="post.id"
                    :src="post.imagesix"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                    @click="fullscreen(post.id)"
                  ></v-carousel-item>
                  <v-carousel-item v-if="post.imageseven"
                    :key="post.id"
                    :src="post.imageseven"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                    @click="fullscreen(post.id)"
                  ></v-carousel-item>
                  <v-carousel-item v-if="post.imageeight"
                    :key="post.id"
                    :src="post.imageeight"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                    @click="fullscreen(post.id)"
                  ></v-carousel-item>
                </v-carousel>

                <h1 v-html="post.title"></h1>
                <p>{{post.postdate}}</p>
                <p>{{post.author}}</p>
                <p style="white-space: pre-wrap" v-html="post.content"></p> 
                </div>
            </v-lazy>
        </div>

            <v-dialog v-model="dialog" 
              overlay
              transition="dialog-bottom-transition"
              width="100%"
              style="z-index: 10;">
            <v-card>

              <v-carousel v-if="modalimages.imageone" id="ntpcarousel" 
                :show-arrows="false"
                height="auto"
                width="600px">
                  <v-carousel-item v-if="modalimages.imageone"
                    :key="modalimages.id+'mod'"
                    :src="modalimages.imageone"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                  ></v-carousel-item>
                  <v-carousel-item v-if="modalimages.imagetwo"
                    :key="modalimages.id+'mod'"
                    :src="modalimages.imagetwo"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                  ></v-carousel-item>
                  <v-carousel-item v-if="modalimages.imagethree"
                    :key="modalimages.id+'mod'"
                    :src="modalimages.imagethree"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                  ></v-carousel-item>
                  <v-carousel-item v-if="modalimages.imagefour"
                    :key="modalimages.id+'mod'"
                    :src="modalimages.imagefour"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                  ></v-carousel-item>
                  <v-carousel-item v-if="modalimages.imagefive"
                    :key="modalimages.id+'mod'"
                    :src="modalimages.imagefive"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                  ></v-carousel-item>
                  <v-carousel-item v-if="modalimages.imagesix"
                    :key="modalimages.id+'mod'"
                    :src="modalimages.imagesix"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                  ></v-carousel-item>
                  <v-carousel-item v-if="modalimages.imageseven"
                    :key="modalimages.id+'mod'"
                    :src="modalimages.imageseven"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                  ></v-carousel-item>
                  <v-carousel-item v-if="modalimages.imageeight"
                    :key="modalimages.id+'mod'"
                    :src="modalimages.imageeight"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                  ></v-carousel-item>
                  
                </v-carousel>
              </v-card>
            </v-dialog>

       
    </v-container>
</template>

<script>
import axios from 'axios';
export default {
    data: () => ({
      parentCats: [],
      childCats: [],
      drawer: false,
      selectedImage: null,
      isActive: false,
      dialog: false,
      modalimages: {},
    }),
    props: ['posts'],

      mounted() {
        
      },

      methods: {
        fullscreen(postid){
          axios.get("https://cms.navigatetheplanet.co.uk/wp-json/getposts/v1/post?id="+postid ,{
            headers: {
            "Content-Type": "application/json",
            }
            })
            .then(response => {
                this.modalimages = response.data[0]
                console.log(this.modalimages)
            })
              .catch(function (error) {
                console.log(error);
            });
        this.dialog = true;
        }
      },
  }

</script>
