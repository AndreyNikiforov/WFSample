using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using WFSample.Entities;
using WFSample.Services;

namespace WFSample.UnitTest
{
    [TestClass]
    public class MyDomainServiceTest
    {
        [TestMethod]
        public void CountCustomer_SHOULD_CallRepoForApprovedCustomers()
        {
            var repo = new Mock<IMyCustomerRepository>(MockBehavior.Strict);

            //setup mock -- only those behavior we are planning to use in THIS particular unit test
            var expectedCounter = 12345;
            repo.Setup(m => m.GetCustomerCountByStatus(CustomerApprovalStatus.Approved)).Returns<int>(_ => expectedCounter);

            var service = new MyDomainService(repo.Object);

            //run test
            var result = service.CountCustomers();

            Assert.AreEqual(expectedCounter, result);   //confirming that service passing number from repo call without changes

            //validating that all calls for repo were actually called
            repo.VerifyAll();
        }
    }
}
