import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
// import { Books } from 'src/app/model/book';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-pages-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // private booksReference: AngularFirestoreCollection<Books>;
  // books: Observable<Books[]>;

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage,
  ) {
    // this.booksReference = afs.collection<Books>('books');
    // this.books = this.booksReference.valueChanges();
  }

  ngOnInit() {

  }

}
