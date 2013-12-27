using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WFSample.Services;

namespace WFSample.WebUI.Controllers
{
    public class HomeController : Controller
    {
        private readonly IMyDomainService _service;

        public HomeController(IMyDomainService service)
        {
            _service = service;
        }
        public ActionResult Index(string returnUrl)
        {
            ViewBag.ReturnUrl = returnUrl;
            ViewBag.MyCustomerCounter = _service.CountCustomers();
            return View();
        }
    }
}