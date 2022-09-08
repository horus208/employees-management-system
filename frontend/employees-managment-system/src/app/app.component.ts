import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employees-managment-system';

  public onOpenModal()
  {
    console.log("caaaaaaalled");
    const container = document.getElementById("app-container");
    const button = document.createElement("button");

    const modal:any = <any> document.getElementById("myModal");
    button.type = "button";
    button.style.display = "none"
    button.setAttribute("data-bs-toggle","modal");
    button.setAttribute("data-bs-target","myModal")
    container?.appendChild(button);
    button.click();
    modal.showModal()
  }
}
