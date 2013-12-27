using WFSample.Entities;

namespace WFSample.Services
{

    /// <summary>
    /// this guy knows how to persist/save (and hydrate/load) entities
    /// it may know about shortcuts -- in our case we do not hydrate ALL customers and then filter them in the <see cref="MyDomainService"/>, instead we are using db query
    /// </summary>
    public interface IMyCustomerRepository
    {
        int GetCustomerCountByStatus(CustomerApprovalStatus status);
    }
}