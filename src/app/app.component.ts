import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angularmxgraph';

  onClick() {
    Swal.fire({
      html:
        '<div class="containerHtmlCriadoSwal">' +
        '<img class="imagemSwal" src=/assets/imgs/1.webp/>' +
        '</div>',
      customClass: {
        htmlContainer: 'testeSwal',
        popup: 'popupSwal',
        container: 'containerSwal',
        closeButton: 'closeButtonSwal',
      },
      showCloseButton: true,
      showConfirmButton: false,
    });
  }
  desejaExcluirUsuario() {
    Swal.fire({
      icon: 'error',
      title: 'Deseja excluir esse usuário?',
      html: '<span style="font-size:26px;">Você deseja excluir o usuario da sua lista de usuários?</span>',
      customClass: {
        title: 'titleExcluirUsuarioPopUp',

        popup: 'excluirUsuarioPopUpSwal',
        cancelButton: 'excluirButtonExcluirUsuarioSwal',
        confirmButton: 'voltarButtonExcluirUsuarioSwal',
      },
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Voltar',
      cancelButtonText: 'Excluir',
    });
  }
  logOut() {
    Swal.fire({
      title: 'Realizar Logout',
      html: '<span style="font-size:26px;">Deseja sair da sua conta? você será desconectado do SDREDES</span>',

      customClass: {
        title: 'titleExcluirUsuarioPopUp',
        popup: 'excluirUsuarioPopUpSwal',
        cancelButton: 'excluirButtonExcluirUsuarioSwal',
        confirmButton: 'voltarButtonExcluirUsuarioSwal',
      },
      showCancelButton: true,
      showConfirmButton: true,
      iconHtml: '<img src="/assets/svgs/Logout.svg">',
      confirmButtonText: 'Voltar',
      cancelButtonText: 'Excluir',
    });
  }
}
