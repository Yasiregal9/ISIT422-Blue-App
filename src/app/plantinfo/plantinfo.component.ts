import { Component, OnInit } from '@angular/core';
import { PlantInfoService } from '../plant-info.service';
import { PlantInfo } from '../plantInfo';

@Component({
  selector: 'app-plantinfo',
  templateUrl: './plantinfo.component.html',
  styleUrls: ['./plantinfo.component.css'],
})
export class PlantinfoComponent implements OnInit {
  allPlants: PlantInfo[] = [];
  constructor(public plantInfoService: PlantInfoService) {}

  ngOnInit(): void {
    this.plantInfoService.getAllPlants().subscribe((results) => {
      this.allPlants = results;
    });
  }

  filterPlants(): void {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById('userInput');
    filter = input.value.toUpperCase();
    table = document.getElementById('myTable');
    tr = table.getElementsByTagName('tr');

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName('td')[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        txtValue = txtValue.toUpperCase();
        console.log(txtValue);
        if (txtValue.includes(filter)) {
          tr[i].style.display = '';
        } else {
          tr[i].style.display = 'none';
        }
      }
    }
  }

}
