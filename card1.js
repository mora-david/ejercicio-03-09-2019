export default {

template: `        <div class="row">
<div class="col-md-4 mt-3" >
    <div class="card">
        <div class="card-header">
            <div class="d-flex justify-content-between">
                
                <button 
                
                class="btn btn-sm"
                
              
                </button>
                <button >
                    editar
                </button>
            </div>
        </div>
        <div class="card-body">
            <form  action="/">
                <div class="form-group">
                    <input class="form-control" placeholder="Nombre de la lista">
                </div>
                <button class="btn btn-primary btn-block">
                    Guardar
                </button>
                </form>
                <div>
            </div> 
    </div>
</div>
<p></p>
<slot></slot>
</div>`
}