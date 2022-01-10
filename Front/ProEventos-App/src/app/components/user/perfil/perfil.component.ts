import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorField } from '@app/helpers/ValidatorField';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.validation();
  }

  //Conveniente para pegar um FormField apenas com a letra F.
  get f(): any{
    return this.form.controls;
  }

  public form!: FormGroup;

  public validation(): void {

    const formOptions: AbstractControlOptions = {
      validators: ValidatorField.MustMatch('senha', 'confirmeSenha')
    };

    this.form = this.fb.group ({
      titulo: ['', [Validators.required]],
      primeiroNome: ['', [Validators.required]],
      ultimoNome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required]],
      funcao: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmeSenha: ['', [Validators.required]],
    }, formOptions)
  }

  onSubmit(){
    //Vai parar aqui se o form estiver inválido
    if (this.form.invalid){
      return;
    }
  }

  resetForm(event: any): void{
    event.preventDefault();
    this.form.reset();
  }

}
