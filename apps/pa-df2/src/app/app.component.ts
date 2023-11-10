import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'pa-df-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'pa-df2';

  @ViewChild('content')
  content!: ElementRef;

  templateValues = {
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

  ngAfterViewInit() { 
    const content = this.content.nativeElement;
    const options = {
      filename: 'document.pdf',
      image: { type: 'jpeg', quality: 0.98 }
    };

    html2pdf().from(content).set(options).toPdf().get('pdf').save();

  }
}
