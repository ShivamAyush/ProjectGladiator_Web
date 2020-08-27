import { Component, OnInit } from '@angular/core';
import { AddBeneficiary } from '../dto-classes/AddBeneficiary';
import {AddBeneficiaryService} from '../add-beneficiary.service';
import { CustomerIdGet } from '../add-beneficiary/CustomerIdGet';
import { GetBeneficiary } from '../dto-classes/getBeneficiaryDetails';
import {AccountSummaryService} from '../account-summary.service'
import { TransactionDetailService } from '../transaction-detail.service';
import {TransactionService} from '../transaction.service';
import { Transaction } from '../dto-classes/transaction';
import {Router} from '@angular/router';
@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit {
  setCustomerId = new CustomerIdGet();
  values:any;
  accountValue:any;
  constructor(private service:AddBeneficiaryService,private service1:AccountSummaryService,private service2:TransactionService,private router:Router) {
    this.service.getBeneficiaryList(this.setCustomerId).subscribe(data=>{
      this.values = data;
      console.log(data);
    })

    this.service1.getAccountSummary(this.setCustomerId).subscribe(data=>{
      this.accountValue = data;
    })
    
   }
  ngOnInit(): void {
    console.log(this.values.beneficiaryAccountNo);
  }
  
  transaction = new Transaction();
  transactionArr:any;
  fundTransfer()
  {
    this.service2.getTransactionDetails(this.transaction).subscribe(data=>{
      this.transactionArr = data;
      console.log(data.transactionId);
      sessionStorage.setItem("transactionId",data.transactionId);
      sessionStorage.setItem("transactionMethod",data.transactionMethod);
      sessionStorage.setItem("transactionAmount",data.transactionAmount);
      sessionStorage.setItem("fromAccount",data.fromAccount);
      sessionStorage.setItem("toAccount",data.toAccount);
      sessionStorage.setItem("transactionDate",data.transactionDate);
      sessionStorage.setItem("status",data.status);
      sessionStorage.setItem("currentBalance",data.currentBalance);
      this.router.navigate(['/userDashboard/invoice']);
    })
  }
}
