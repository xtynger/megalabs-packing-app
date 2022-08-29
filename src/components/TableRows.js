function TableRows({rowsData, deleteTableRows, handleChange}) {


    return(
        
        rowsData.map((data, index)=>{
            const {ubicacion, pallet, lote, fecha, cantidad}= data;
            return(

                <tr key={index}>
                <td>
               <input type="text" value={ubicacion} onChange={(evnt)=>(handleChange(index, evnt))} name="ubicacion" className="form-control"/>
                </td>
                <td><input type="text" value={pallet}  onChange={(evnt)=>(handleChange(index, evnt))} name="pallet" className="form-control"/> </td>
                <td><input type="text" value={lote}  onChange={(evnt)=>(handleChange(index, evnt))} name="lote" className="form-control"/> </td>
                <td><input type="text" value={fecha}  onChange={(evnt)=>(handleChange(index, evnt))} name="fecha" className="form-control"/> </td>
                <td><input type="text" value={cantidad}  onChange={(evnt)=>(handleChange(index, evnt))} name="cantidad" className="form-control" /> </td>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
            </tr>

        
            )
        })
   
    )
    
}

export default TableRows;

/*

rowsData.map((data, index)=>{
            const {fullName, emailAddress, salary}= data;
            return(

                <tr key={index}>
                <td>
               <input type="text" value={fullName} onChange={(evnt)=>(handleChange(index, evnt))} name="fullName" className="form-control"/>
                </td>
                <td><input type="text" value={emailAddress}  onChange={(evnt)=>(handleChange(index, evnt))} name="emailAddress" className="form-control"/> </td>
                <td><input type="text" value={salary}  onChange={(evnt)=>(handleChange(index, evnt))} name="salary" className="form-control" /> </td>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
            </tr>



        rowsData.map((data, index)=>{
            const {ubicacion, pallet, fecha, cantidad}= data;
            return(

                <tr key={index}>
                <td>
               <input type="text" value={ubicacion} onChange={(evnt)=>(handleChange(index, evnt))} name="ubicacion" className="form-control"/>
                </td>
                <td><input type="text" value={pallet}  onChange={(evnt)=>(handleChange(index, evnt))} name="pallet" className="form-control"/> </td>
                <td><input type="text" value={fecha}  onChange={(evnt)=>(handleChange(index, evnt))} name="fecha" className="form-control"/> </td>
                <td><input type="text" value={cantidad}  onChange={(evnt)=>(handleChange(index, evnt))} name="cantidad" className="form-control" /> </td>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
            </tr>



            */