namespace WFSample.Services
{
    /// <summary>
    /// We still need this service as an interface, so we can unit test MVC controllers
    /// </summary>
    public interface IMyDomainService
    {
        int CountCustomers();
    }
}