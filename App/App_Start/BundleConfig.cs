using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace App.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Script/Bundles")
                .Include(
                    "~/bundles/runtime.*",
                    "~/bundles/polyfills.*",
                    "~/bundles/styles.*",
                    "~/bundles/vendor.*",
                    "~/bundles/main.*"));
            bundles.Add(new StyleBundle("~/Content/Styles")
                .Include("~/bundles/styles.*"));
        }
    }
}