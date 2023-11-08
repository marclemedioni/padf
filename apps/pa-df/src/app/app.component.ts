declare const Core: any;
declare const saveAs: any;

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'pa-df-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild("viewer", { static: false })
  viewer!: ElementRef;
  title = 'pa-df';

  async ngAfterViewInit() {
    function saveBuffer(buf: ArrayBuffer, name: string, mimetype: string) {
      const blob = new Blob([buf], {
        type: mimetype,
      });
      saveAs(blob, name);
    }
    
    function saveBufferAsPDFDoc(buf: ArrayBuffer, name: string) {
      saveBuffer(buf, name, 'application/pdf');
    }

    Core.setWorkerPath('assets/pdftron/core');

    Core.officeToPDFBuffer('assets/templates/test.docx', {
      officeOptions: {
        templateValues: {
          logo: {
            image_url: 'http://localhost:4200/assets/img/logo_red.png',
            width: '64',
            height: '64',
          },
          bill_to_name: 'Toto',
          items: [
            { qty: '2', description: 'Item 1', price: '42', total: '84' },
            { qty: '1', description: 'Item 2', price: '10', total: '10' },
            { qty: '2', description: 'Item 1', price: '42', total: '84' },
            { qty: '1', description: 'Item 2', price: '10', total: '10' },
            { qty: '2', description: 'Item 1', price: '42', total: '84' },
            { qty: '1', description: 'Item 2', price: '10', total: '10' },
            { qty: '2', description: 'Item 1', price: '42', total: '84' },
            { qty: '1', description: 'Item 2', price: '10', total: '10' },
            { qty: '2', description: 'Item 1', price: '42', total: '84' },
            { qty: '1', description: 'Item 2', price: '10', total: '10' },
            { qty: '2', description: 'Item 1', price: '42', total: '84' },
            { qty: '1', description: 'Item 2', price: '10', total: '10' },
            { qty: '2', description: 'Item 1', price: '42', total: '84' },
            { qty: '1', description: 'Item 2', price: '10', total: '10' },
            { qty: '2', description: 'Item 1', price: '42', total: '84' },
            { qty: '1', description: 'Item 2', price: '10', total: '10' },
            { qty: '2', description: 'Item 1', price: '42', total: '84' },
            { qty: '1', description: 'Item 2', price: '10', total: '10' },
            { qty: '2', description: 'Item 1', price: '42', total: '84' },
            { qty: '1', description: 'Item 2', price: '10', total: '10' },
            { qty: '2', description: 'Item 1', price: '42', total: '84' },
            { qty: '1', description: 'Item 2', price: '10', total: '10' },
            { qty: '2', description: 'Item 1', price: '42', total: '84' },
            { qty: '1', description: 'Item 2', price: '10', total: '10' },
            { qty: '2', description: 'Item 1', price: '42', total: '84' },
            { qty: '1', description: 'Item 2', price: '10', total: '10' },
            { qty: '2', description: 'Item 1', price: '42', total: '84' },
            { qty: '1', description: 'Item 2', price: '10', total: '10' },
            { qty: '2', description: 'Item 1', price: '42', total: '84' },
            { qty: '1', description: 'Item 2', price: '10', total: '10' },
            { qty: '2', description: 'Item 1', price: '42', total: '84' },
            { qty: '1', description: 'Item 2', price: '10', total: '10' },
            { qty: '2', description: 'Item 1', price: '42', total: '84' },
            { qty: '1', description: 'Item 2', price: '10', total: '10' },
            { qty: '2', description: 'Item 1', price: '42', total: '84' },
            { qty: '1', description: 'Item 2', price: '10', total: '10' },
            { qty: '2', description: 'Item 1', price: '42', total: '84' },
            { qty: '1', description: 'Item 2', price: '10', total: '10' },
            { qty: '2', description: 'Item 1', price: '42', total: '84' },
            { qty: '1', description: 'Item 2', price: '10', total: '10' },
            { qty: '2', description: 'Item 1', price: '42', total: '84' },
            { qty: '1', description: 'Item 2', price: '10', total: '10' },
            { qty: '2', description: 'Item 1', price: '42', total: '84' },
            { qty: '1', description: 'Item 2', price: '10', total: '10' },
            { qty: '2', description: 'Item 1', price: '42', total: '84' },
            { qty: '1', description: 'Item 2', price: '10', total: '10' },
            { qty: '2', description: 'Item 1', price: '42', total: '84' },
            { qty: '1', description: 'Item 2', price: '10', total: '10' },
            { qty: '2', description: 'Item 1', price: '42', total: '84' },
            { qty: '1', description: 'Item 2', price: '10', total: '10' },
            { qty: '2', description: 'Item 1', price: '42', total: '84' },
            { qty: '1', description: 'Item 2', price: '10', total: '10' },
          ]
        }
      }
    }).then((buffer: ArrayBuffer) => {
       saveBufferAsPDFDoc(buffer, 'generated_document.pdf');
    });
  }
}
