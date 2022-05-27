import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProveedoresService, Proveedor } from './proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css'],
})
export class ProveedoresComponent implements OnInit {
  public showProv = false;
  public showList = true;
  proveedoresGroup: FormGroup;
  nuevaProv: Proveedor = {}as Proveedor;
  proveedor: Proveedor[] = [];

  constructor(private _proveedorService: ProveedoresService) {
    this.proveedoresGroup = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      cc: new FormControl(0, [Validators.required]),
      edad: new FormControl(0, [Validators.required]),
      numero: new FormControl(0, [Validators.required]),
    });
    this.proveedor = this._proveedorService.getProveedors();
  }

  editarForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    cc: new FormControl(0, [Validators.required]),
    edad: new FormControl(0, [Validators.required]),
    numero: new FormControl(0, [Validators.required]),
  });

  ngOnInit(): void {
    console.log(this.proveedor)
  }

  verDetalle(dataInput: any){
    this.showProv = true;
    this.showList = false;
    this.proveedoresGroup.patchValue(dataInput);
  }

  eliminar(id: number) {
    this._proveedorService.deleteProveedor(id);
    this.proveedor = this._proveedorService.getProveedors();
  }

  showProveedor() {
    this._proveedorService.addProveedors(this.proveedoresGroup.value);
    this.showProv = true;
  }

  llenarForm() {
    this.editarForm = new FormGroup({
      nombre: new FormControl(this.nuevaProv.nombre, [Validators.required]),
      apellido: new FormControl(this.nuevaProv.apellido, [Validators.required]),
      cc: new FormControl(this.nuevaProv.cc, [Validators.required]),
      edad: new FormControl(this.nuevaProv.edad, [Validators.required]),
      numero: new FormControl(this.nuevaProv.numero, [Validators.required]),
    });
  }

  updateProv(value: Proveedor) {
    this.nuevaProv = value;
    this.llenarForm();
  }

  editar() {
    this._proveedorService.editarProveedor(this.editarForm.value);
    this.getProv();
  }

  getProv() {
    this.proveedor = this._proveedorService.getProveedors();
  }
}
