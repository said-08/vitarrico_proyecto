import { Injectable } from "@angular/core";

export interface Proveedor{
    nombre:string;
    apellido: string;
    cc: number;
    edad: number;
    numero: number;
  };

@Injectable({
    providedIn: 'root'
})
export class ProveedoresService {

    private proveedor:Proveedor[] = [
        {
          nombre: "Aquaman",
          apellido: "assets/apellido/aquaman.png",
          edad: 34,
          cc: 34234242424,
          numero:23424242
        },
        {
          nombre: "Batman",
          apellido: "assets/apellido/batman.png",
          edad: 34,
          cc: 4324242424,
          numero:434343
        },
        {
          nombre: "Daredevil",
          apellido: "assets/apellido/daredevil.png",
          edad: 34,
          cc: 243423424,
          numero: 322312313
        },
        {
          nombre: "Hulk",
          apellido: "assets/apellido/hulk.png",
          edad: 34,
          cc: 42342424,
          numero:433213
        },
        {
          nombre: "Linterna Verde",
          apellido: "assets/apellido/linterna-verde.png",
          edad: 34,
          cc: 21323131,
          numero: 422332
        },
        {
          nombre: "Spider-Man",
          apellido: "assets/apellido/spiderman.png",
          edad: 34,
          cc: 12313213,
          numero: 2332323
        },
        {
          nombre: "Wolverine",
          apellido: "assets/apellido/wolverine.png",
          edad: 34,
          cc: 21312313,
          numero: 2312313
        }
      ];

    private contProveedor = 0;

    deleteProveedor(id: number){
        this.proveedor=this.proveedor.filter((p)=> p.cc !== id);
      }
    
      editarProveedor(prov: Proveedor){
        console.log(prov);
        this.proveedor=this.proveedor.filter((p)=> p.cc !== prov.cc);
        this.proveedor.push(prov);
      }
    
    
      addProveedors(prov: Proveedor){
        this.contProveedor += 1;
        prov.cc = this.contProveedor;
        this.proveedor.push(prov)  ;
      }
    
      getProveedors(){
        return this.proveedor;
      }
}