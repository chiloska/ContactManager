import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../../../services/auth.service';
import { DataService } from '../../../services/data.service';

interface Contact {
  UserUid: string;
  firstName: string;
  lastName: string;
  phones: Array<Phone>;
}

interface Phone {
  number: string;
}

@Component({
  selector: 'app-index-dash',
  templateUrl: './index-dash.component.html',
  styleUrls: ['./index-dash.component.css']
})

export class IndexDashComponent implements OnInit {
  user: any; contacts: Array<any> = new Array<any>(); newPhone: Phone = { number: '' }; private contactId: any;
  newContact: Contact = { UserUid: '', firstName: '', lastName: '', phones: [] }; updatePhoneRecord: any = { number: '' };
  snackBarMess: string = ''; findName: any;

  constructor(private _auth: AuthService, private fbAuth: AngularFireAuth, private dataService: DataService) {
    this.user = {
      name: 'No Name',
      email: 'example@example.com',
      photoURL: 'http://firstaidertraining.org.uk/wp-content/uploads/2017/09/anon.png'
    }
  }

  ngOnInit() {
    this.fbAuth.user.subscribe(fbuser => {
      this.user = {
        id: fbuser.uid,
        name: fbuser.displayName || 'No Name',
        email: fbuser.email,
        photoURL: fbuser.photoURL || 'http://firstaidertraining.org.uk/wp-content/uploads/2017/09/anon.png'
      }

      this.getdata();

    }, err => {
      alert('Error to retrieve data')
    })

  }

  logout() {
    this._auth.signOut()
  }

  getContactByName() {
    this.dataService.getContactByName(this.user.id, this.findName)
      .then(res => {
        this.contacts = res.json();
      })
      .catch(err => {
        if (err.status == 404) {
          this.getdata();
        }
        else {
          alert('Unable to Retrieve Information')
        }
      })
  }
  newContactDialog() {
    let dialog: HTMLDialogElement = document.querySelector('#dialogNew') as HTMLDialogElement;
    dialog.showModal();
  }

  createContact(newForm) {
    this.newContact.UserUid = this.user.id;
    console.log(this.newContact);
    this.dataService.createContact(this.newContact)
      .then(res => {
        this.contacts.push(res);
        newForm.reset();
        this.newContact.phones = []
        this.cancelDialog('new')
      })
      .catch(err => {
        console.error(err)
        alert('Unable to Save Contact')
      })
  }


  editContactDialog(contactId: any) {
    this.newContact = this.contacts.find(x => x.contactId == contactId);
    const dialog = <HTMLDialogElement>document.querySelector('#dialogEdit');
    dialog.showModal();
  }

  editContact(updateForm: any) {
    console.log(this.newContact)
    this.dataService.updateContact(this.newContact)
      .then(res => {
        console.log(res);
        this.cancelDialog('update')
      })
      .catch(err => {
        console.error(err);
        alert('Unable to Update User');
      })
  }

  deleteContactDialog(contactId: any) {
    this.contactId = contactId;
    const dialog = <HTMLDialogElement>document.querySelector('#dialogDeleteContact');
    dialog.showModal();
  }

  deleteContact() {
    this.dataService.deleteContact(this.contactId)
      .then(res => {
        this.getdata();
        this.contactId = null;
        this.cancelDialog('contactDelete')
      })
      .catch(err => {
        console.log(err);
        this.contactId = null;
        this.cancelDialog('contactDelete')
        alert('Unable to Delete Contact')
      })
  }

  updatePhoneDialog(phone: any) {
    this.updatePhoneRecord = phone;
    const dialog = <HTMLDialogElement>document.querySelector('#dialogUpdatePhone');
    dialog.showModal();
  }

  updatePhone() {
    this.dataService.updatePhone(this.updatePhoneRecord)
      .then(res => {
        console.log(res);
        this.updatePhoneRecord = { number: '' }
        this.cancelDialog('phoneUpdate')
      })
      .catch(err => {
        console.log(err);
        alert('Unable to Update Phone')
      })
  }

  deletePhoneDialog(phone: any) {
    this.updatePhoneRecord = phone;
    const dialog = <HTMLDialogElement>document.querySelector('#dialogDeletePhone');
    dialog.showModal();
  }

  deletePhoneNumber() {
    this.dataService.deletePhoneNumber(this.updatePhoneRecord)
      .then(res => {
        this.getdata();
        this.cancelDialog('phoneDelete')
      })
      .catch(err => {
        console.error(err);
        alert('Unable to delete the Phone Number')
      })
  }

  addNewPhoneDialog(contactId: any) {
    this.contactId = contactId;
    const dialog = <HTMLDialogElement>document.querySelector('#dialogAddPhone');
    dialog.showModal();
  }

  addPhoneNumber() {
    const newPhone = {
      contactId: this.contactId,
      number: this.newPhone.number
    }

    this.dataService.addNewPhone(newPhone)
      .then(res => {
        this.getdata();
        this.newPhone = { number: '' };
        this.cancelDialog('addPhone');
      })
      .catch(err => {
        console.error(err);
        alert('Unable to Add new Phone ')
      })

  }

  cancelDialog(name: any) {
    if (name == 'new') {
      const dialog = <HTMLDialogElement>document.querySelector('#dialogNew');
      dialog.close();
      this.newContact = { UserUid: '', firstName: '', lastName: '', phones: [] };
    }
    else if (name == 'phoneUpdate') {
      const dialog = <HTMLDialogElement>document.querySelector('#dialogUpdatePhone');
      dialog.close();
    }
    else if (name == 'phoneDelete') {
      const dialog = <HTMLDialogElement>document.querySelector('#dialogDeletePhone');
      dialog.close();
      this.updatePhoneRecord = { number: '' };
    }
    else if (name == 'contactDelete') {
      const dialog = <HTMLDialogElement>document.querySelector('#dialogDeleteContact');
      dialog.close();
      this.newContact = { UserUid: '', firstName: '', lastName: '', phones: [] };
    }
    else if (name == 'addPhone') {
      const dialog = <HTMLDialogElement>document.querySelector('#dialogAddPhone');
      dialog.close();
      this.contactId = null;
    }
    else {
      const dialog = <HTMLDialogElement>document.querySelector('#dialogEdit');
      dialog.close();
      this.newContact = { UserUid: '', firstName: '', lastName: '', phones: [] };
    }
  }

  addNumber(phone) {
    this.newContact.phones.push({ number: phone })
    this.newPhone.number = '';
  }

  removeNumber(i) {
    this.newContact.phones.splice(i, 1)
  }

  getdata() {
    this.dataService.getContacts(0, this.user.id).then(res => this.contacts = res.json())
  }
}
