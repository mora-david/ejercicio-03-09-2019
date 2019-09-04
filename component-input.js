export default {
    template: `
    
    </form>
    <form action="/">
    <slot></slot>
        <div class="form-group" style="margin-bottom:0">
            <input class="form-control" placeholder="Agregar Item" v-model="edit1">
        </div>
        <button class=" btn-block btn btn-success col-md-4 mt-3" @click="$emit('addtarea')">
                    Agregar
                </button>

        </form>
    
    </div>`,
    props: ['edit1']
    
}


