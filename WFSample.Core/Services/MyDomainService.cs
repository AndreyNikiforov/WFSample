using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WFSample.Entities;

namespace WFSample.Services
{
    /// <summary>
    /// this guy knows business criteria. in our simple case it is just particular status and one call
    /// for modifiers, it will do validations
    /// </summary>
    public class MyDomainService : IMyDomainService
    {
        private readonly IMyCustomerRepository _repo;

        public MyDomainService(IMyCustomerRepository repo)
        {
            _repo = repo;
        }

        public int CountCustomers()
        {
            return _repo.GetCustomerCountByStatus(CustomerApprovalStatus.Approved);
        }
    }
}
