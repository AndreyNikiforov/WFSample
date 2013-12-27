using System;
using WFSample.Entities;
using WFSample.Services;

namespace WFSample.DB
{
    /// <summary>
    /// implementation of the repository that uses DB
    /// </summary>
    public class MyCustomerRepository : IMyCustomerRepository
    {
        private readonly string _connectionStringOrName;

        public MyCustomerRepository(string connectionStringOrName)
        {
            _connectionStringOrName = connectionStringOrName;
        }
        public int GetCustomerCountByStatus(CustomerApprovalStatus status)
        {
            return new Random().Next();
            //using (var ctx = new MyConext(connectionStringOrName)) { /* do something */ }
        }
    }
}