import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemaRoutingModule } from './sistema-routing.module';
import { PainelDeControleComponent } from './painel-de-controle/painel-de-controle.component';
import { NotificacoesComponent } from './notificacoes/notificacoes.component';
import { MonitoramentoComponent } from './monitoramento/monitoramento.component';
import { HistoricoComponent } from './historico/historico.component';
import { SuporteComponent } from './suporte/suporte.component';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';


@NgModule({
  declarations: [
    PainelDeControleComponent,
    NotificacoesComponent,
    MonitoramentoComponent,
    HistoricoComponent,
    SuporteComponent,
    MeuPerfilComponent
  ],
  imports: [
    CommonModule,
    SistemaRoutingModule
  ]
})
export class SistemaModule { }
