using System.Web.Http;

namespace WFSample.WebUI.App_Start {
  ///<summary>
  /// Inserts the Breeze Web API controller route at the front of all Web API routes
  ///</summary>
  public static class BreezeWebApiConfig {

    public static void Register(HttpConfiguration config) {
      config.Routes.MapHttpRoute(
          name: "BreezeApi",
          routeTemplate: "breeze/{controller}/{action}"
      );
    }
  }
}