import React, { Component } from 'react'

export class ModificarArticulo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            listaArticulo: [],
            articuloSeleccionado,
            nombreCliente: '',
            pedidoVentas: '',
            asignadoPor:'',
            Codigodearticulo:'',
            Seleccionarcantidad:''

        }
    }

    consultarArticulo(idArticulo){
        const rutaServicio = "https://megalabs.digitalbroperu.com/servicioconsultardetallearticulo.php"
        var formData = new FormData();
        formData.append("idArticulo", idArticulo)
        fetch(rutaServicio, {method: 'POST', body: formData})
        .then(res => res.json())
        .then((result) => {this.setState({listaArticulo: result})})
    }


    dibujarFormularioArticulo() {
        return (
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Gestionar articulo</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form > {/* agregar esto dentro del tag para que funcione: onSubmit={this.autosActualizar} con el metodo correcto */}
                            <div className="modal-body">
                                {/*  ESTOS CAMPOS SON LOS QUE COPIAMOS DEL FORMULARIO DE AGREGAR */}
                                <div className="mb-3"> <input type="text" className="form-control" placeholder="Cliente" readOnly value={this.state.nombreCliente} onChange={(e) => this.setState({ nombreCliente: e.target.value })} /></div>
                                <div className="mb-3"> <input type="text" className="form-control" placeholder="Pedido de Ventas" readOnly value={this.state.pedidoVentas} onChange={(e) => this.setState({ pedidoVentas: e.target.value })} /></div>
                                <div className="mb-3"> <input type="text" className="form-control" placeholder="Asignado Por" readOnly value={this.state.asignadoPor} onChange={(e) => this.setState({ asignadoPor: e.target.value })} />  </div>
                                <div className="mb-3"> <input type="text" className="form-control" placeholder="Codigo de Articulo" readOnly value={this.state.Codigodearticulo} onChange={(e) => this.setState({ Codigodearticulo: e.target.value })} /> </div>
                                <div className="mb-3"> <input type="text" className="form-control" placeholder="Cantidad total" readOnly value={this.state.Seleccionarcantidad} onChange={(e) => this.setState({ Seleccionarcantidad: e.target.value })} /></div>
                                {/* ACA TERMINA EL SEGMENTO COPIADO */}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Guardar Cambios</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }



    render() {
        return (
            <div>ModificarArticulo</div>
        )
    }
}

export default ModificarArticulo