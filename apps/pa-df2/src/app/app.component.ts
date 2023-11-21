import { Component, ElementRef, ViewChild } from '@angular/core';
import html2pdf from 'html2pdf.js';
import * as Handlebars from 'handlebars';
import html from 'raw-loader!../assets/templates/invoice.hbs'

function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}

function formatDate(date: Date) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('-');
}


@Component({
  selector: 'pa-df-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pa-df2';

  @ViewChild('content')
  content!: ElementRef;

  @ViewChild('iframe')
  iframe!: ElementRef;

  htmlContent!: string;

  templateValues = {
    logo: {
      image_url: 'http://localhost:4200/assets/img/logo_red.png',
      width: '64',
      height: '64',
    },
    number: 'FA2023-0001',
    created_at: formatDate(new Date()),
    due_at: formatDate(new Date()),
    bill_from: {
      name: 'LMD HOLDINGS',
      address: '5 route de Saint Aubin',
      zip: 91190,
      city: "Villiers-le-Bâcle",
      phone: "01 23 45 67 89",
      email: 'contact@lemedioni.fr'
    },
    bill_to: {
      name: 'John Doe',
      address: '10 rue Charles Rouxel',
      zip: 75014,
      city: 'Paris'
    },
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
    ],
    notes: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus ducimus, pariatur aspernatur aperiam unde non illo nobis nulla, recusandae inventore, praesentium earum molestiae maxime enim quia quo numquam minima tempore.',
    siret: 'XXXXXXXX',
    naf_ape: 'YYYYYYY',
    num_tva: 'ZZZZZZZZZZ',
    total_ht: 80000,
    total_tva: 42,
    total_ttc: 8564123
  }

  downloadPDF() {
    const template = Handlebars.compile(html)
    const doc = this.iframe.nativeElement.contentDocument;

    doc.open();
    doc.write(template(this.templateValues));
    doc.close();


    const content = this.iframe.nativeElement.contentDocument.body;

    this.iframe.nativeElement.addEventListener("load", () => {
      const options = {
        filename: 'document.pdf',
        image: { type: 'jpeg' },
        pagebreak: { mode: 'avoid-all' },
        margin: 2,
        html2canvas:  { scale: 2 },
      };

      html2pdf().from(content).set(options).toPdf().get('pdf').save();
    })



  }
}
