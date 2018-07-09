using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace App.Models
{
    public class Contact
    {
        public int ContactId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public List<PhoneNumber> Phones { get; set; }
        public string UserUid { get; set; }
        public DateTime CreatedDate { get; set; }
    }

    public class PhoneNumber
    {
        public int PhoneId { get; set; }
        public string Number { get; set; }
        public int ContactId { get; set; }
        public DateTime CreatedDate { get; set; }
    }

    public class NewContact
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public List<NewPhoneNumber> Phones { get; set; }
        public string UserUid { get; set; }
    }

    public class NewPhoneNumber
    {
        public string Number { get; set; }
    }

    public class AddNewPhone
    {
        public int ContactId { get; set; }
        public string Number { get; set; }
    }
}