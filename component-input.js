export default {
    template: `
    
    </form>
    <form action="/">
    <slot></slot>
        <div class="form-group" style="margin-bottom:0">
            <input class="form-control" placeholder="Agregar Item" v-model="edit1">
        </div>
        

        </form>
    
    </div>`,
    props: ['edit1']
    
}


