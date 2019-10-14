import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public error: BehaviorSubject<string> = new BehaviorSubject<string>('');

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  TOKEN: String;

LANG = window.localStorage.getItem('lang');

BASE_URL = 'https://services-api.herokuapp.com/api/' + this.LANG + '/v1/';

  constructor(private http: HttpClient) {
    if (window.localStorage.getItem("profile")) {
      this.TOKEN = JSON.parse(window.localStorage.getItem("profile")).token;
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Token '+ this.TOKEN
          
        })
      };
      
    }
    if(this.LANG === null) {
      this.LANG = 'en';
      window.localStorage.setItem('lang', 'en');
    }

    this.reInit();
  }

  // LOADING STATUS FOR INDICATOR
  setLoadingStatus(status: boolean) {
    this.isLoading.next(status);
  }
  setLang(lang) {
    if (lang != "en" || lang != "rw") {
      lang = 'en';
    }

    window.localStorage.setItem('lang', lang);

    this.reInit();
  }

  reInit() {
    // LANGUAGE

  this.LANG = window.localStorage.getItem('lang');

    if (!this.LANG) {
      this.LANG = 'en';
      window.localStorage.setItem('lang', 'en');
    }

  this.BASE_URL = 'https://services-api.herokuapp.com/api/' + this.LANG + '/v1/';
  }



   // GETTING BANK SERVICES
   getBankServices() {
    this.setLoadingStatus(true);


    const url = this.BASE_URL + 'bank-services';


    const response = this.http.get(url, this.httpOptions);

    
    return response;
  }
  // GETTING ACCOUNT CATEGORIES

  getAccountCategories(url: string) {
    this.setLoadingStatus(true);

    if (!url) {
      url = this.BASE_URL + 'services?category=Accounts&ordering=name';
    }

    const response = this.http.get(url, this.httpOptions);

    
    return response;
  }
// ADD ACCOUNT CATEGORY

addAccountCategory(data) {
  this.setLoadingStatus(true);
  const url = this.BASE_URL + 'services';
  const response = this.http.post(url, data, this.httpOptions);

  

  return response;
}

// UPDATE ACCOUNT CATEGORY

updateAccountCategory(params: string, data) {
  this.setLoadingStatus(true);
  const url = this.BASE_URL + 'services/' + params;

  const response = this.http.patch(url, data, this.httpOptions);

  

  return response;
}

// GET LOAN CATEGORIES

getLoanCategories(url: string) {
  this.setLoadingStatus(true);

  if (!url) {
    url = this.BASE_URL + 'services?category=Loan&ordering=name';
  }

  const response = this.http.get(url, this.httpOptions);

  

  return response;
}

// ADD LOAN CATEGORY

addLoanCategory(data) {
  this.setLoadingStatus(true);
  const url = this.BASE_URL + 'services';
  const response = this.http.post(url, data, this.httpOptions);

  

  return response;
}

// UPDATE LOAN CATEGORY

updateLoanCategory(params: string, data) {
  this.setLoadingStatus(true);
  const url = this.BASE_URL + 'services/' + params;

  const response = this.http.patch(url, data, this.httpOptions);

  

  return response;
}

 // GET CARDS CATEGORIES

 getCardCategories(url: string) {
  this.setLoadingStatus(true);

  if (!url) {
    url = this.BASE_URL + 'services?category=Cards&ordering=name';
  }

  const response = this.http.get(url, this.httpOptions);

  

  return response;
}

// ADD CARD CATEGORY

addCardCategory(data) {
  this.setLoadingStatus(true);
  const url = this.BASE_URL + 'services';
  const response = this.http.post(url, data, this.httpOptions);

  

  return response;
}

// UPDATE CARD CATEGORY

updateCardCategory(params: string, data) {
  this.setLoadingStatus(true);
  const url = this.BASE_URL + 'services/' + params;

  const response = this.http.patch(url, data, this.httpOptions);

  

  return response;
}

// GET EBANKING CATEGORIES

getEbankingCategories(url: string) {
  this.setLoadingStatus(true);

  if (!url) {
    url = this.BASE_URL + 'services?category=E-banking&ordering=name';
  }

  const response = this.http.get(url, this.httpOptions);

  

  return response;
}

// ADD EBANKING CATEGORY

addEbankingCategory(data) {
  this.setLoadingStatus(true);
  const url = this.BASE_URL + 'services';
  const response = this.http.post(url, data, this.httpOptions);

  

  return response;
}

// UPDATE EBANKING CATEGORY

updateEbankingCategory(params: string, data) {
  this.setLoadingStatus(true);
  const url = this.BASE_URL + 'services/' + params;

  const response = this.http.patch(url, data, this.httpOptions);

  

  return response;
}

//GETTING ADs
getAds(url: string) {
  this.setLoadingStatus(true);

  if (!url) {
    url = this.BASE_URL + 'ads';
  }

  const response = this.http.get(url, this.httpOptions);

  

  return response;
}

// ADD Ad

addAd(data) {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Token ${this.TOKEN}`

    })
  };
  console.log(data);
  this.setLoadingStatus(true);
  const url = this.BASE_URL + 'ads';
  const response = this.http.post(url, data, httpOptions);

  

  return response;
}

// UPDATE Ad

updateAd(params: string, data) {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Token ${this.TOKEN}`

    })
  };
  this.setLoadingStatus(true);
  const url = this.BASE_URL + 'ads/' + params;

  const response = this.http.patch(url, data, httpOptions);

  

  return response;
}
// GET BANKS

getBanks(url: string) {
  this.setLoadingStatus(true);

  if (!url) {
    url = this.BASE_URL + 'banks';
  }

  const response = this.http.get(url, this.httpOptions);

  

  return response;
}

// ADD BANK

addBank(data) {
  this.setLoadingStatus(true);
  const url = this.BASE_URL + 'banks';
  const response = this.http.post(url, data, this.httpOptions);

  

  return response;
}
//ADD BANK ADMIN
addBankAdmin(data) {
  this.setLoadingStatus(true);
  const url = this.BASE_URL + 'users';
  const response = this.http.post(url, data, this.httpOptions);

  

  return response;
}

// UPDATE BANK

updateBank(params: string, data) {
  this.setLoadingStatus(true);
  const url = this.BASE_URL + 'banks/' + params;

  const response = this.http.patch(url, data, this.httpOptions);

  

  return response;
}

// DELETE BANK

deleteBank(params: string) {
  this.setLoadingStatus(true);


  let url = this.BASE_URL + 'banks/' + params;

  const response = this.http.delete(url, this.httpOptions);

  

  return response;
}

//GETTING MESSAGES

getMessages(url: string) {
  this.setLoadingStatus(true);

  if (!url) {
    url = this.BASE_URL + 'messages';
  }

  const response = this.http.get(url, this.httpOptions);

  

  return response;
}

//VIEW MESSAGE

viewMessage(params: string) {
  const data = {
    is_read: true
  }
  const url = this.BASE_URL + 'messages/' + params;

  const response = this.http.patch(url, data, this.httpOptions);

  

  return response;
}

//GETTING PENDING LOANS
getPendingLoans(url: string) {
  this.setLoadingStatus(true);

  if (!url) {
    url = this.BASE_URL + 'loans-services?approval_level=BNR&deletion_leve=Bank+Administrator';
  }

  const response = this.http.get(url, this.httpOptions);

  

  return response;
}
//GETTING PENDING ACCOUNTS
getPendingAccounts(url: string) {
  this.setLoadingStatus(true);

  if (!url) {
    url = this.BASE_URL + 'accounts-services?approval_level=BNR&deletion_leve=Bank+Administrator';
  }

  const response = this.http.get(url, this.httpOptions);

  

  return response;
}
//GETTING PENDING CARDS
getPendingCards(url: string) {
  this.setLoadingStatus(true);

  if (!url) {
    url = this.BASE_URL + 'cards-services?approval_level=BNR&deletion_leve=Bank+Administrator';
  }

  const response = this.http.get(url, this.httpOptions);

  

  return response;
}
//GETTING PENDING EBANKING
getPendingEbanking(url: string) {
  this.setLoadingStatus(true);

  if (!url) {
    url = this.BASE_URL + 'ebanking-services?approval_level=BNR&deletion_leve=Bank+Administrator';
  }

  const response = this.http.get(url, this.httpOptions);

  

  return response;
}

//APPROVING LOAN
approveLoan(params: string) {
  const data = {
    approval_level: 'Approved'
  }
  this.setLoadingStatus(true);
  const url = this.BASE_URL + 'loans-services/' + params;

  const response = this.http.patch(url, data, this.httpOptions);

  

  return response;
}
//APPROVING ACCOUNT
approveAccount(params: string) {
  const data = {
    approval_level: 'Approved'
  }
  this.setLoadingStatus(true);
  const url = this.BASE_URL + 'accounts-services/' + params;

  const response = this.http.patch(url, data, this.httpOptions);

  

  return response;
}
//APPROVING CARD
approveCard(params: string) {
  const data = {
    approval_level: 'Approved'
  }
  this.setLoadingStatus(true);
  const url = this.BASE_URL + 'cards-services/' + params;

  const response = this.http.patch(url, data, this.httpOptions);

  

  return response;
}
//APPROVING EBANKING
approveEbanking(params: string) {
  const data = {
    approval_level: 'Approved'
  }
  this.setLoadingStatus(true);
  const url = this.BASE_URL + 'ebanking-services/' + params;

  const response = this.http.patch(url, data, this.httpOptions);

  

  return response;
}

 //GETTING PENDING DELETED LOANS
 getPendingDeletedLoans(url: string) {
  this.setLoadingStatus(true);

  if (!url) {
    url = this.BASE_URL + 'loans-services?deletion_level=BNR';
  }

  const response = this.http.get(url, this.httpOptions);

  

  return response;
}
//GETTING PENDING DELETED ACCOUNTS
getPendingDeletedAccounts(url: string) {
  this.setLoadingStatus(true);

  if (!url) {
    url = this.BASE_URL + 'accounts-services?deletion_level=BNR';
  }

  const response = this.http.get(url, this.httpOptions);

  

  return response;
}
//GETTING PENDING DELETED CARDS
getPendingDeletedCards(url: string) {
  this.setLoadingStatus(true);

  if (!url) {
    url = this.BASE_URL + 'cards-services?deletion_level=BNR';
  }

  const response = this.http.get(url, this.httpOptions);

  

  return response;
}
//GETTING PENDING DELETED EBANKING
getPendingDeletedEbanking(url: string) {
  this.setLoadingStatus(true);

  if (!url) {
    url = this.BASE_URL + 'ebanking-services?deletion_level=BNR';
  }

  const response = this.http.get(url, this.httpOptions);

  

  return response;
}

//APPROVING DELETION OF LOAN
approveLoanDelete(params: string) {
  const data = {
    deletion_level: 'Deleted'
  }
  this.setLoadingStatus(true);
  const url = this.BASE_URL + 'loans-services/' + params;

  const response = this.http.patch(url, data, this.httpOptions);

  

  return response;
}
//APPROVING DELETION OF ACCOUNT
approveAccountDelete(params: string) {
  const data = {
    deletion_level: 'Deleted'
  }
  this.setLoadingStatus(true);
  const url = this.BASE_URL + 'accounts-services/' + params;

  const response = this.http.patch(url, data, this.httpOptions);

  

  return response;
}
//APPROVING DELETION OF CARD
approveCardDelete(params: string) {
  const data = {
    deletion_level: 'Deleted'
  }
  this.setLoadingStatus(true);
  const url = this.BASE_URL + 'cards-services/' + params;

  const response = this.http.patch(url, data, this.httpOptions);

  

  return response;
}
//APPROVING DELETION OF EBANKING
approveEbankingDelete(params: string) {
  const data = {
    deletion_level: 'Deleted'
  }
  this.setLoadingStatus(true);
  const url = this.BASE_URL + 'ebanking-services/' + params;

  const response = this.http.patch(url, data, this.httpOptions);

  

  return response;
}
//GETTING REPORTS
getReport() {
  this.setLoadingStatus(true);

    const url = this.BASE_URL + 'service-visits';


  const response = this.http.get(url, this.httpOptions);

  

  return response;
}
// GET BANK ADMINS
getUsers(params: string) {
  this.setLoadingStatus(true);

    const url = this.BASE_URL + 'users?bank=' + params;


  const response = this.http.get(url, this.httpOptions);

  

  return response;
}

//DEACTIVATE USER
deactivateUser(params: string) {
  this.setLoadingStatus(true);
  const data = {
    is_active: false
  }

    const url = this.BASE_URL + 'users/' + params;


  const response = this.http.patch(url, data, this.httpOptions);

  

  return response;
}
//RESET PASSWORD FOR BANK ADMINS
resetPassword(params: string) {
  this.setLoadingStatus(true);
  const data = {
    user: params
  }
  
    const url = this.BASE_URL + 'reset-password';


  const response = this.http.post(url, data, this.httpOptions);

  

  return response;
}

}

