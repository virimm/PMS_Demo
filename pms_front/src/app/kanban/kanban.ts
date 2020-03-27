import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'kanban',
  templateUrl: 'kanban.html',
  styleUrls: ['kanban.css'],
})
export class KanbanComponent implements OnInit {

    board: Board = new Board();
    columns: Column[];

    ngOnInit() {
       this.board.name = 'Test Board';
       this.columns = [
        {   
            name: "Ideas", 
            tasks: [
                "Some random idea",
                "This is another random idea",
                "build an awesome application"]
        },
        {
            name: 'Research',
            tasks: [
                "Lorem ipsum",
                "foo",
                "This was in the 'Research' column"
            ]
        },
        {
            name: 'Todo',
            tasks: [
                'Get to work',
                'Pick up groceries',
                'Go home',
                'Fall asleep'
            ]
        },
        {
            name: 'Done',
            tasks: [
                'Get up',
                'Brush teeth',
                'Take a shower',
                'Check e-mail',
                'Walk dog'
            ]
        }
       ]

       this.board.columns = this.columns;
    }

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data,
                            event.container.data,
                            event.previousIndex,
                            event.currentIndex);
        }
    }
}

export class Board {
    name: string;
    columns: Column[];
}

export class Column {
    name: string;
    tasks: string[];
}