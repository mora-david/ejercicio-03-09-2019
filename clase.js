import card1 from './card1.js' 
import componentinput from './component-input.js'
const app = new Vue({
el: '#app',
components: {
    card1,
    componentinput
},
    data: {
        lists : [],
        cards1: []
    },
    methods: {
        addList(){
            const newList = {
                name:'',
                status: 'creating',
                cards: [],
                card: "",
                edit: "non"
            }
            this.lists.push(newList)
        },
        SaveList(list) {
            list.status ='saved'
        },
        removeList(index) {
            this.lists.splice(index, 1)
        },
        saveCard(list){
            const card1={
                name: list.card,
                status: "ok",
            }
            list.cards.push(card1)
            list.card = ""
        },
        editcards(list, index){
           //list.cards[index].status = "no"
          if(list.cards[index].status == "no"){
            list.cards[index].status = "ok"
          }
          else if(list.cards[index].status == "ok"){
            list.cards[index].status = "no"
          }
            },
            delateCards(list, index){
                list.cards.splice(index, 1)
            },
            editNameList(list){
                list.status = 'creating'
            },
            addCard1(){
                const card1temp = {tarjeta:card1,
                tareas: [],
                status: true,
                edit: ""} 
                this.cards1.push(card1temp)
            },
            addTarea(index, xr){
                const tempo = 'dd'
                this.cards1[index].tareas.push(tempo)
                //card.tareas.push(tempo)
                //console.log(card)
                console.log(this.cards1[index].tareas)
                console.log(this.cards1[index].tareas[0])
               console.log(this.cards1[index].tareas[1])
               console.log(this.cards1[index].tareas[2])
               console.log(this.cards1[index].tareas[3])
               
            },
        },

    }
)