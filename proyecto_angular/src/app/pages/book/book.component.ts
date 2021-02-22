import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { ClientsService } from 'src/app/services/clients.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  libro     = [];
  clientes  = [];
  idLibro   = ''
  constructor(private booksService: BooksService ,private clientService: ClientsService,private route: ActivatedRoute) { }

  ngOnInit(): void {    
    let id = this.route.snapshot.params.id;
    this.idLibro = id
  	this.booksService.getBook(this.idLibro)
      .subscribe(
        (book: any) => {
          this.libro = book
          console.log(this.libro)
        },
        (error) => {
          console.error('Error getting books: ', error)
        }
      )
  }

  getClients (): void {
    this.clientService.getClients()
      .subscribe(
        (clients: any) => {
          this.clientes = clients
          console.log(this.clientes)
        },
        (error) => {
          console.error('Error getting clients: ', error)
        }
      )
  }



}






