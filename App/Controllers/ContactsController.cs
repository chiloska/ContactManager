using App.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Routing;
using System.Xml.Linq;

namespace App.Controllers
{
    public class ContactsController : ApiController
    {
        GHICRMEntities db = new GHICRMEntities();

        [HttpGet]
        public IQueryable<Contact> GetContacts(string id, int page = 0, int pageSize = 30)
        {
            var contacts = db.t_CRM_Contacts.Where(z => z.UserUid == id).Select(y => new Contact
            {
                ContactId = y.ContactId,
                FirstName = y.FistName,
                LastName = y.LastName,
                Phones = db.t_CRM_Phones
                        .Where(x => x.ContactId == y.ContactId)
                        .Select(a => new PhoneNumber
                        {
                            PhoneId = a.PhoneId,
                            ContactId = a.ContactId,
                            Number = a.PhoneNumber,
                            CreatedDate = a.CreatedDate,
                        }).ToList(),
                CreatedDate = y.CreatedDate,
                UserUid = y.UserUid
            }).OrderByDescending(x => x.LastName);

            var totalCount = contacts.Count();

            var totalPages = (int)Math.Ceiling((double)totalCount / pageSize);

            var urlHelper = new UrlHelper(Request);

            var prevLink = page > 0 ? urlHelper.Link("DefaultApi", new { page = page - 1 }) : "";
            var nextLink = page < totalPages - 1 ? urlHelper.Link("DefaultApi", new { page = page + 1 }) : "";

            var results = contacts.Skip(pageSize * page).Take(pageSize);

            var paginationHeader = new
            {
                TotalCount = totalCount,
                TotalPages = totalPages,
                PrevPageLink = prevLink,
                NextPageLink = nextLink
            };

            System.Web.HttpContext.Current.Response.Headers.Add("X-Pagination", Newtonsoft.Json.JsonConvert.SerializeObject(paginationHeader));

            return results;
        }

        [HttpGet]
        public async Task<IHttpActionResult> GetContact(int id)
        {
            var contact = await db.t_CRM_Contacts.FindAsync(id);

            if (contact != null)
            {
                return NotFound();
            }

            return Ok(contact);

        }

        [HttpGet]
        public async Task<IHttpActionResult> GetContactByName(string id, string query)
        {
            var contact = await db.t_CRM_Contacts
                .Where(x =>
                x.UserUid == id &&
                x.FistName.Contains(query) || x.LastName.Contains(query))
                .Select(y => new Contact
                {
                    ContactId = y.ContactId,
                    FirstName = y.FistName,
                    LastName = y.LastName,
                    Phones = db.t_CRM_Phones
                        .Where(x => x.ContactId == y.ContactId)
                        .Select(a => new PhoneNumber
                        {
                            PhoneId = a.PhoneId,
                            ContactId = a.ContactId,
                            Number = a.PhoneNumber,
                            CreatedDate = a.CreatedDate,
                        }).ToList(),
                    CreatedDate = y.CreatedDate,
                    UserUid = y.UserUid
                }).OrderByDescending(x => x.LastName).ToListAsync();

            return Ok(contact);
        }

        [HttpPost]
        public async Task<IHttpActionResult> CreateContact(NewContact newContact)
        {
            if (ModelState.IsValid)
            {

                t_CRM_Contacts contact = new t_CRM_Contacts()
                {
                    FistName = newContact.FirstName,
                    LastName = newContact.LastName,
                    UserUid = newContact.UserUid,
                    CreatedDate = DateTime.Now
                };

                db.t_CRM_Contacts.Add(contact);

                try
                {
                    await db.SaveChangesAsync();

                    List<t_CRM_Phones> PhoneList = new List<t_CRM_Phones>();

                    foreach (NewPhoneNumber c in newContact.Phones)
                    {
                        t_CRM_Phones phone = new t_CRM_Phones()
                        {
                            PhoneNumber = c.Number,
                            ContactId = contact.ContactId,
                            CreatedDate = contact.CreatedDate
                        };

                        PhoneList.Add(phone);
                    }

                    db.t_CRM_Phones.AddRange(PhoneList);

                    await db.SaveChangesAsync();

                    Contact DTOContact = new Contact()
                    {
                        ContactId = contact.ContactId,
                        FirstName = contact.FistName,
                        LastName = contact.LastName,
                        Phones = db.t_CRM_Phones
                        .Where(x => x.ContactId == contact.ContactId)
                        .Select(y => new PhoneNumber
                        {
                            PhoneId = y.PhoneId,
                            ContactId = y.ContactId,
                            Number = y.PhoneNumber,
                            CreatedDate = y.CreatedDate,
                        }).ToList(),
                        CreatedDate = contact.CreatedDate,
                        UserUid = contact.UserUid
                    };

                    return Ok(DTOContact);
                }
                catch (System.Data.Entity.Validation.DbEntityValidationException ex)
                {
                    return ResponseMessage(Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex));
                }
                catch (DbUpdateException ex)
                {
                    return ResponseMessage(Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex));
                }
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [HttpPost]
        public async Task<IHttpActionResult> AddPhoneNumber(AddNewPhone phone)
        {
            if (ModelState.IsValid)
            {

                t_CRM_Phones NewPhone = new t_CRM_Phones()
                {
                    ContactId = phone.ContactId,
                    PhoneNumber = phone.Number,
                    CreatedDate = DateTime.Now
                };

                db.t_CRM_Phones.Add(NewPhone);

                try
                {
                    await db.SaveChangesAsync();

                    return Ok(NewPhone);
                }
                catch (DbUpdateException ex)
                {
                    return ResponseMessage(Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex));
                }
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [HttpPut]
        public async Task<IHttpActionResult> UpdateContactInfo(int id, NewContact newContact)
        {
            if (ModelState.IsValid)
            {
                var contact = await db.t_CRM_Contacts.FindAsync(id);

                if (contact != null)
                {
                    contact.FistName = newContact.FirstName;
                    contact.LastName = newContact.LastName;

                    db.Entry(contact).State = EntityState.Modified;

                    try
                    {
                        await db.SaveChangesAsync();

                        return Ok(contact);
                    }
                    catch (DbUpdateException ex)
                    {
                        return ResponseMessage(Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex));
                    }
                }
                else
                {
                    return NotFound();
                }
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [HttpPut]
        public async Task<IHttpActionResult> UpdatePhoneNumber(int id, PhoneNumber phone)
        {
            if (ModelState.IsValid)
            {
                var phoneRecord = await db.t_CRM_Phones.FindAsync(id);

                if (phoneRecord != null)
                {
                    phoneRecord.PhoneNumber = phone.Number;

                    db.Entry(phoneRecord).State = EntityState.Modified;

                    try
                    {
                        await db.SaveChangesAsync();

                        return Ok(phoneRecord);
                    }
                    catch (DbUpdateException ex)
                    {
                        return ResponseMessage(Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex));
                    }

                }
                else
                {
                    return NotFound();
                }
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [HttpDelete]
        public async Task<IHttpActionResult> DeletePhone(int id)
        {
            var phone = await db.t_CRM_Phones.FindAsync(id);

            db.t_CRM_Phones.Remove(phone);

            try
            {
                await db.SaveChangesAsync();

                return Ok(phone);
            }
            catch (DbUpdateException ex)
            {
                return ResponseMessage(Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex));
            }
        }

        [HttpDelete]
        public async Task<IHttpActionResult> DeleteContact(int id)
        {
            var contact = await db.t_CRM_Contacts.FindAsync(id);

            db.t_CRM_Contacts.Remove(contact);

            try
            {
                await db.SaveChangesAsync();

                return Ok(contact);
            }
            catch (DbUpdateException ex)
            {
                return ResponseMessage(Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex));
            }
        }
    }
}
