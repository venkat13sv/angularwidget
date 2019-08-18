import { Component, OnInit } from '@angular/core';
import { CaseService } from './case.service';


@Component({
  selector: 'case-search',
  templateUrl: './case-search.component.html',
  styleUrls: ['./case-search.component.css']
})
export class CaseSearchComponent {
  
  title = 'caseWidgetApp';
  searchObj:any;
  searchResult:any;
  obj:any;
  constructor(private _caseService: CaseService) { }




  searchCases(caseId:string,caseName:string,caseType:string){
    //console.log(caseId);
    //console.log(caseName);
    //console.log(caseType);
    if(caseId==""&&caseName==""&&caseType=="")
      alert("Please enter data!");
    else
    {
        this.obj={
          "caseId":caseId,
          "caseName":caseName,
          "caseType":caseType
        };
        this.searchObj=<JSON>this.obj;
        console.log("Search Obj: "+ JSON.stringify(this.searchObj));
        this._caseService.getCases(this.searchObj).subscribe(
        (response:any) =>{
          if(response.result.length>0)
            this.searchResult=response.result;
          else
            this.searchResult=[{"id":"","name":"Sorry! No case data found for your search","description":""}];
          console.log("Response from server: "+ JSON.stringify(this.searchResult));
        },
        err => console.log(err)
      );
    }
  }

}
