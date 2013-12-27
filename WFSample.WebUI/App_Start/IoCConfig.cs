using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Autofac;
using Autofac.Integration.Mvc;
using WFSample.DB;
using WFSample.Services;

namespace WFSample.WebUI.App_Start
{
    public static class IoCConfig
    {
        public static void Register()
        {
            var builder = new ContainerBuilder();
            builder.RegisterControllers(typeof(MvcApplication).Assembly);

            builder.RegisterType<MyDomainService>().AsImplementedInterfaces();  //ctor will be detected automatically and all dependencies injected; 

            builder.Register<IMyCustomerRepository>(ctx => new MyCustomerRepository("BlahBlah"));   //we are providing our own way (in a form of lambda) to create an instance when IoC will need an instance

            var container = builder.Build();
            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
        }
    }
}