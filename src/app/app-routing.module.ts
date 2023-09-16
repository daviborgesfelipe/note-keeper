import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarNotasComponent } from './components/notas/listar-notas/listar-notas.component';
import { CriarNotaComponent } from './components/notas/criar-nota/criar-nota.component';
import { EditarNotaComponent } from './components/notas/editar-nota/editar-nota.component';
import { ExcluirNotaComponent } from './components/notas/excluir-nota/excluir-nota.component';
import { CriarCategoriaComponent } from './components/categorias/criar-categoria/criar-categoria.component';
import { ListarCategoriaComponent } from './components/categorias/listar-categoria/listar-categoria.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'notas/listar',
    pathMatch: 'full' 
  },
  {
    path: 'notas/listar',
    component: ListarNotasComponent
  },
  {
    path: 'notas/criar',
    component: CriarNotaComponent
  },
  {
    path: 'notas/editar/:id',
    component: EditarNotaComponent
  },
  {
    path: 'notas/excluir/:id',
    component: ExcluirNotaComponent
  },
  {
    path: 'categorias/criar',
    component: CriarCategoriaComponent
  },
  {
    path: 'categorias/listar',
    component: ListarCategoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
