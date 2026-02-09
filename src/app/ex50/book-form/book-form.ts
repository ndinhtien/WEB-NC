import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './book-form.html',
  styleUrl: './book-form.css',
})
export class BookForm implements OnInit {
  book: Book = {
    id: '',
    Tensach: '',
    Giaban: 0,
    Mota: '',
    Anhbia: '',
    Ngaycapnhat: '',
    Soluongton: 0,
    MaCD: 0,
    MaNXB: 0
  };
  isEditMode = false;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.bookService.getBook(id).subscribe({
        next: (data) => {
          this.book = data;
        },
        error: (e) => console.error(e)
      });
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.bookService.updateBook(this.book.id, this.book).subscribe({
        next: () => {
          this.router.navigate(['/ex50']);
        },
        error: (e) => console.error(e)
      });
    } else {
      // Remove id so backend generates it (though my backend overrides it anyway)
      // But for type safety, I keep it.
      this.bookService.createBook(this.book).subscribe({
        next: () => {
          this.router.navigate(['/ex50']);
        },
        error: (e) => console.error(e)
      });
    }
  }
}
