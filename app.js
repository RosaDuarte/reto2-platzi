Vue.component('modal', {
    props:['titles'],

    methods:{
        close(){
            this.$emit("close");
        }
    },

    computed:{
        title(){
            return `${this.titles.title}`
        }
    },

    template: `
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <h3>{{title}}</h3>
            <div>
                <slot name="body"></slot>
            </div>
            <footer>
              <button v-on:click="close">Cerrar</button>
            </footer>
          </div>
        </div>
      </div>`
})
  
new Vue({
    el: '#app',
    data(){
        return{
            showModal: false,
            mt:{
                title: 'Mi Modal 🎉'
            }
            
        }
    },

    methods:{
        toggleModal(){
            this.showModal = !this.showModal

            
        }
    }
})